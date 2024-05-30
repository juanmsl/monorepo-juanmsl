import axios from 'axios';
export class HttpClient {
  constructor(baseURL) {
    var _a;
    this.logout = () => localStorage.removeItem('token');
    this._token = (_a = localStorage.getItem('token')) !== null && _a !== void 0 ? _a : '';
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
  get instance() {
    return this._instance;
  }
  get token() {
    return this._token;
  }
  set token(token) {
    this._token = token;
    localStorage.setItem('token', token);
  }
}
