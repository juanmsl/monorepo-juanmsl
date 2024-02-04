import axios, { AxiosInstance } from 'axios';

export class HttpClient {
  private _instance: AxiosInstance;
  private _token: string | null;

  public getToken = () => this._token;

  public logout = () => localStorage.removeItem('token');

  public login = (token: string) => localStorage.setItem('token', token);

  constructor(baseURL: string) {
    this._token = localStorage.getItem('token');

    this._instance = axios.create({
      baseURL: baseURL,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this._instance.interceptors.request.use((req) => {
      const token = this.getToken();
      token !== null && req.headers.setAuthorization(`Bearer ${token}`);
      return req;
    });

    this._instance.interceptors.response.use(
      (response) => Promise.resolve(response),
      (error) => {
        error.response.status === 401 && this.logout();
        Promise.reject(error);
      },
    );
  }

  public get instance(): AxiosInstance {
    return this._instance;
  }
}
