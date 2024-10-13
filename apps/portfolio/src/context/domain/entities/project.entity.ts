import { AssetCollection } from './asset.entity';
import { QueryCollection } from './content-full.entity';
import { LinkCollection } from './link.entity';
import { TechnologyEntity } from './technology.entity';

export type ProjectEntity = {
  name: string;
  pictures: AssetCollection;
  technologies: QueryCollection<Pick<TechnologyEntity, 'name'>>;
  links: LinkCollection;
  description: string;
};

export type ProjectCollection = QueryCollection<ProjectEntity>;
