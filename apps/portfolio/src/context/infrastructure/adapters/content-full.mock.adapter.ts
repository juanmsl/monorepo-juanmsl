import {
  AssetEntity, AssetInstance, CharacteristicEntity, CharacteristicInstance,
  ContactEntity, ContactInstance,
  ContentFullPort,
  JobExperienceEntity, JobExperienceInstance, ProfessionalSkillInstance,
  ProfessionalSkillsEntity,
  TechnologyEntity, TechnologyInstance
} from "@domain";

export class ContentFullMockAdapter implements ContentFullPort {
  static timeout = 3000;
  async getAssetById() {
    return await new Promise<AssetEntity>((resolve) => setTimeout(() => resolve(AssetInstance), ContentFullMockAdapter.timeout));
  }

  async getJobExperience() {
    return await new Promise<Array<JobExperienceEntity>>((resolve) => setTimeout(() => resolve(JobExperienceInstance), ContentFullMockAdapter.timeout));
  }

  async getSocialContact() {
    return new Promise<Array<ContactEntity>>((resolve) => setTimeout(() => resolve(ContactInstance), ContentFullMockAdapter.timeout));
  }

  async getProfessionalSkills() {
    return new Promise<Array<ProfessionalSkillsEntity>>((resolve) => setTimeout(() => resolve(ProfessionalSkillInstance), ContentFullMockAdapter.timeout));
  }

  async getTechnologies() {
    return new Promise<Array<TechnologyEntity>>((resolve) => setTimeout(() => resolve(TechnologyInstance), ContentFullMockAdapter.timeout));
  }

  async getCharacteristics() {
    return new Promise<Array<CharacteristicEntity>>((resolve) => setTimeout(() => resolve(CharacteristicInstance), ContentFullMockAdapter.timeout));
  }
}

