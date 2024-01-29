import {ContentFullAPIPort} from "./port";


export class ContentFullAPI implements ContentFullAPIPort {
  private adapter: ContentFullAPIPort;

  constructor(adapter: ContentFullAPIPort) {
    this.adapter = adapter;
  }

  async getAssetById(assetId: string) {
    return await this.adapter.getAssetById(assetId);
  }

  async getJobExperience(locale: string) {
    return await this.adapter.getJobExperience(locale);
  }

  async getSocialContact(locale: string) {
    return await this.adapter.getSocialContact(locale);
  }

  async getProfessionalSkills(locale: string) {
    return await this.adapter.getProfessionalSkills(locale);
  }

  async getTechnologies(locale: string) {
    return await this.adapter.getTechnologies(locale);
  }

  async getCharacteristics(locale: string) {
    return await this.adapter.getCharacteristics(locale);
  }

}
