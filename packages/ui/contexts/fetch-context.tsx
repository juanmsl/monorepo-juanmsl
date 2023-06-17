import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import axios, { AxiosInstance } from 'axios';

type UserT = {
  name: string;
  username: string;
  full_name: string;
  email: string;
};

type SessionT = {
  isAuthenticated: boolean;
  user: UserT | null;
  token: string | null;
};

type FetchContextT = SessionT & {
  httpClient: AxiosInstance;
  login: (user: UserT, token: string) => void;
  logout: () => void;
};

const FetchContext = createContext<FetchContextT | null>(null);

type FetchProviderProps = {
  children: React.ReactNode;
  baseURL: string;
};

export const FetchProvider = ({ children, baseURL }: FetchProviderProps) => {
  const [session, setSession] = useState<SessionT>({
    isAuthenticated: false,
    user: null,
    token: null,
  });

  const getToken = useCallback(() => localStorage.getItem('token'), []);

  const updateSession = useCallback(() => {
    const user = localStorage.getItem('user');
    const token = getToken();

    setSession({
      isAuthenticated: token !== null,
      user: user !== null ? JSON.parse(user) : user,
      token: token,
    });
  }, [getToken]);

  useEffect(updateSession, [updateSession]);

  const login = useCallback(
    (user: UserT, token: string) => {
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('token', token);
      updateSession();
    },
    [updateSession],
  );

  const logout = useCallback(() => {
    localStorage.clear();
    updateSession();
  }, [updateSession]);

  const httpClient = useMemo(() => {
    const instance = axios.create({
      baseURL: baseURL,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    instance.interceptors.request.use((req) => {
      const token = getToken();
      token !== null && req.headers.setAuthorization(`Bearer ${token}`);
      return req;
    });

    instance.interceptors.response.use(
      (response) => Promise.resolve(response),
      (error) => {
        error.response.status === 401 && logout();
        Promise.reject(error);
      },
    );

    return instance;
  }, [baseURL, getToken, logout]);

  return (
    <FetchContext.Provider
      value={{
        ...session,
        httpClient,
        login,
        logout,
      }}
    >
      {children}
    </FetchContext.Provider>
  );
};

export const useFetch = (): FetchContextT => {
  const context = useContext(FetchContext);

  if (context === null) {
    throw new Error('useFetch must be used with in a FetchProvider');
  }

  return context;
};
