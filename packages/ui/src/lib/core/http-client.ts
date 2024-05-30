import axios, { AxiosInstance } from 'axios';

export class HttpClient {
  private _instance: AxiosInstance;
  private _token: string;

  public logout = () => localStorage.removeItem('token');

  constructor(baseURL: string) {
    this._token = localStorage.getItem('token') ?? '';

    this._instance = axios.create({
      baseURL: baseURL,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this._instance.interceptors.request.use(req => {
      const token = this.token;
      token !== null && req.headers.setAuthorization(`Bearer ${token}`);

      return req;
    });

    this._instance.interceptors.response.use(
      response => Promise.resolve(response),
      error => {
        error.response.status === 401 && this.logout();
        Promise.reject(error);
      },
    );
  }

  public get instance(): AxiosInstance {
    return this._instance;
  }

  public get token() {
    return this._token;
  }

  public set token(token: string) {
    this._token = token;
    localStorage.setItem('token', token);
  }
}
