import {QueryCollection} from "./content-full.entity.ts";
import {TechnologyEntity} from "./technology.entity.ts";

export type ProfessionalSkillsEntity = {
  name: string;
  color: string;
  technologies: QueryCollection<Pick<TechnologyEntity, 'name'>>;
};

export type ProfessionalSkillsCollection = QueryCollection<ProfessionalSkillsEntity>;
