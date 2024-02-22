import { QueryCollection } from './content-full.entity';
import { TechnologyEntity } from './technology.entity';

export type ProfessionalSkillsEntity = {
  name: string;
  color: string;
  technologies: QueryCollection<Pick<TechnologyEntity, 'name' | 'icon'>>;
};

export type ProfessionalSkillsCollection = QueryCollection<ProfessionalSkillsEntity>;
