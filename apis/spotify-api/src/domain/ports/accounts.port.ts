import { AccessTokenResponse } from '../entities';

export interface AccountsPort {
  getAccessToken(): Promise<AccessTokenResponse>;
}
