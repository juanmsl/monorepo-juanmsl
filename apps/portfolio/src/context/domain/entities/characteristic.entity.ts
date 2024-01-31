import {QueryCollection} from "./content-full.entity.ts";

export type CharacteristicEntity = {
  title: string;
  icon: string;
}

export type CharacteristicCollection = QueryCollection<CharacteristicEntity>;
