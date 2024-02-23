import { AxiosInstance } from 'axios';
export declare class HttpClient {
  private _instance;
  private _token;
  logout: () => void;
  constructor(baseURL: string);
  get instance(): AxiosInstance;
  get token(): string;
  set token(token: string);
}
//# sourceMappingURL=http-client.d.ts.map
