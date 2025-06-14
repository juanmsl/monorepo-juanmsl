export type AccessTokenParams = {
  client_id: string;
  client_secret: string;
};

export type AccessTokenResponse = {
  access_token: string;
  token_type: string;
  expires_in: number;
};
