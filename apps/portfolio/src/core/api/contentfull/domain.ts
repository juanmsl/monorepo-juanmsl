

export type QueryResponse<T> = {
  data: T;
}

export type QueryAsset<T> = {
  asset: T;
}

export type QueryCollection<T> = {
  items: Array<T>;
}

export type AssetEntity = {
  title: string;
  url: string;
}

export type QueryAssetResponse = QueryResponse<QueryAsset<AssetEntity>>;

export type ContactEntity = {
  icon: string;
  name: string;
  url: string;
  username: string;
};

export type ContactsCollection = QueryCollection<ContactEntity>;

export type TechnologyEntity = {
  name: string;
  yearsOfExperience: number;
  seniority: number;
  icon: string;
}

export type TechnologiesCollection = QueryCollection<TechnologyEntity>;

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

export type ProfessionalSkillsEntity = {
  name: string;
  color: string;
  technologies: QueryCollection<Pick<TechnologyEntity, 'name'>>;
};

export type ProfessionalSkillsCollection = QueryCollection<ProfessionalSkillsEntity>;
