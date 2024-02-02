import {QueryCollection} from "./content-full.entity.ts";
import {TechnologyEntity} from "./technology.entity.ts";

export type JobExperienceEntity = {
  name: string;
  dateStart: string;
  dateEnd: string | undefined | null;
  description: Array<string>;
  technologies: QueryCollection<Pick<TechnologyEntity, 'name'>>;
  position: string;
  icon: string;
  links: Array<{
    url: string;
    icon: string;
  }>;
  order: number;
};

export type JobExperienceCollection = QueryCollection<JobExperienceEntity>;
