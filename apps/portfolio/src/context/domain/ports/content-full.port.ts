import {
  AssetEntity,
  CharacteristicEntity,
  ContactEntity,
  JobExperienceEntity,
  NavbarOptionEntity,
  ProfessionalSkillsEntity,
  TechnologyEntity,
} from '@domain';

export interface ContentFullPort {
  getJobExperience(locale: string): Promise<Array<JobExperienceEntity>>;
  getSocialContact(locale: string): Promise<Array<ContactEntity>>;
  getProfessionalSkills(locale: string): Promise<Array<ProfessionalSkillsEntity>>;
  getAssetById(assetId: string): Promise<AssetEntity>;
  getTechnologies(locale: string): Promise<Array<TechnologyEntity>>;
  getCharacteristics(locale: string): Promise<Array<CharacteristicEntity>>;
  getNavbarOptions(locale: string): Promise<Array<NavbarOptionEntity>>;
}
