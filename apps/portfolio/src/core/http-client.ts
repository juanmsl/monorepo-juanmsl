import { HttpClient } from 'juanmsl/ui';

import { ENV } from '@core/env';

export type PokemonEntity = {
  name: string;
  url: string;
};

type GetPokemonsResponse = {
  count: number;
  next: string;
  results: Array<PokemonEntity>;
};

export class PokeAPI {
  private static httpClient: HttpClient = new HttpClient(ENV.API_URL);

  public static async getPokemons(): Promise<GetPokemonsResponse> {
    const response = await this.httpClient.instance.get<GetPokemonsResponse>('/pokemon');

    return response.data;
  }
}
