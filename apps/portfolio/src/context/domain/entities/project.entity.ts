import { AssetEntity } from './asset.entity';
import { QueryCollection } from './content-full.entity';
import { TechnologyEntity } from './technology.entity';

export type ProjectEntity = {
  name: string;
  pictures: QueryCollection<AssetEntity>;
  technologies: QueryCollection<Pick<TechnologyEntity, 'name'>>;
  urls: Array<string>;
  description: string;
};

export type ProjectCollection = QueryCollection<ProjectEntity>;
