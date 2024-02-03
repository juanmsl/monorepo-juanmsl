import {
  AssetEntity,
  AssetInstance,
  CharacteristicEntity,
  CharacteristicInstance,
  ContactEntity,
  ContactInstance,
  ContentFullPort,
  JobExperienceEntity,
  JobExperienceInstance,
  ProfessionalSkillInstance,
  ProfessionalSkillsEntity,
  TechnologyEntity,
  TechnologyInstance,
} from '@domain';

export class ContentFullMockAdapter implements ContentFullPort {
  static timeout = 3000;
  getAssetById() {
    return new Promise<AssetEntity>((resolve) => {
      setTimeout(() => resolve(AssetInstance), ContentFullMockAdapter.timeout);
    });
  }

  getJobExperience() {
    return new Promise<Array<JobExperienceEntity>>((resolve) => {
      setTimeout(() => resolve(JobExperienceInstance), ContentFullMockAdapter.timeout);
    });
  }

  getSocialContact() {
    return new Promise<Array<ContactEntity>>((resolve) => {
      setTimeout(() => resolve(ContactInstance), ContentFullMockAdapter.timeout);
    });
  }

  getProfessionalSkills() {
    return new Promise<Array<ProfessionalSkillsEntity>>((resolve) => {
      setTimeout(() => resolve(ProfessionalSkillInstance), ContentFullMockAdapter.timeout);
    });
  }

  getTechnologies() {
    return new Promise<Array<TechnologyEntity>>((resolve) => {
      setTimeout(() => resolve(TechnologyInstance), ContentFullMockAdapter.timeout);
    });
  }

  getCharacteristics() {
    return new Promise<Array<CharacteristicEntity>>((resolve) => {
      setTimeout(() => resolve(CharacteristicInstance), ContentFullMockAdapter.timeout);
    });
  }
}
