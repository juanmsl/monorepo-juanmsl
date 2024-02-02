import {QueryCollection} from "./content-full.entity.ts";

export type TechnologyEntity = {
  name: string;
  yearsOfExperience: number;
  seniority: number;
  icon: string;
}

export type TechnologiesCollection = QueryCollection<TechnologyEntity>;
