import axios, { AxiosInstance } from 'axios';

import { AccountAPI } from './account.api';
import { AccessTokenParams, SpotifyPort } from './domain';

export class SpotifyAPI extends AccountAPI implements SpotifyPort {
  private readonly spotifyHttpClient: AxiosInstance;

  constructor({ client_id, client_secret }: AccessTokenParams) {
    super({ client_id, client_secret });
    this.spotifyHttpClient = axios.create({
      baseURL: 'https://api.spotify.com/v1',
      method: 'post',
      headers: {
        'content-type': 'application/json',
      },
    });

    this.spotifyHttpClient.interceptors.request.use(async config => {
      const { token_type, access_token } = await this.getAccessToken();
      config.headers.Authorization = `${token_type} ${access_token}`;

      return config;
    });
  }

  async getProfile() {
    const { data } = await this.spotifyHttpClient<object>({
      method: 'get',
      url: '/me/player',
    });

    return data;
  }
}
