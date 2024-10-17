import { QueryCollection } from './content-full.entity';
import { LinkCollection } from './link.entity';
import { TechnologyEntity } from './technology.entity';

export type JobExperienceEntity = {
  name: string;
  dateStart: string;
  dateEnd: string | undefined | null;
  description: Array<string>;
  technologies: QueryCollection<TechnologyEntity>;
  position: string;
  icon: string;
  links: LinkCollection;
  order: number;
};

export type JobExperienceCollection = QueryCollection<JobExperienceEntity>;
