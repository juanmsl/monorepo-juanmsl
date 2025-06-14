import axios, { AxiosInstance } from 'axios';

import { AccessTokenParams, AccessTokenResponse } from './domain';

export class AccountAPI {
  private readonly accountHttpClient: AxiosInstance;
  private params: AccessTokenParams;

  constructor(params: AccessTokenParams) {
    this.accountHttpClient = axios.create({
      baseURL: 'https://accounts.spotify.com/api',
      method: 'post',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
      },
    });

    this.params = params;
  }

  protected async getAccessToken(): Promise<AccessTokenResponse> {
    const { data } = await this.accountHttpClient<AccessTokenResponse>({
      url: '/token',
      data: {
        grant_type: 'client_credentials',
        client_id: this.params.client_id,
        client_secret: this.params.client_secret,
      },
    });

    return data;
  }
}
