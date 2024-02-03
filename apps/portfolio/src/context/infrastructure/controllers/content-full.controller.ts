import { ContentFullPort } from '@domain';

export class ContentFullAPI implements ContentFullPort {
  private adapter: ContentFullPort;

  constructor(adapter: ContentFullPort) {
    this.adapter = adapter;
  }

  getAssetById(assetId: string) {
    return this.adapter.getAssetById(assetId);
  }

  getJobExperience(locale: string) {
    return this.adapter.getJobExperience(locale);
  }

  getSocialContact(locale: string) {
    return this.adapter.getSocialContact(locale);
  }

  getProfessionalSkills(locale: string) {
    return this.adapter.getProfessionalSkills(locale);
  }

  getTechnologies(locale: string) {
    return this.adapter.getTechnologies(locale);
  }

  getCharacteristics(locale: string) {
    return this.adapter.getCharacteristics(locale);
  }
}
