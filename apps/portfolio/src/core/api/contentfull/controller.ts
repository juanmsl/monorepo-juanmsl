import {ContentFullAPIPort} from "./port";
import {ContentFullAPIAdapter} from "./adapter";


export class ContentFullAPI implements ContentFullAPIPort {
  private static adapter: ContentFullAPIPort = new ContentFullAPIAdapter;

  async getAssetById(assetId: string) {
    return await ContentFullAPI.adapter.getAssetById(assetId);
  }

  async getJobExperience(locale: string) {
    return await ContentFullAPI.adapter.getJobExperience(locale);
  }

  async getSocialContact(locale: string) {
    return await ContentFullAPI.adapter.getSocialContact(locale);
  }

  async getProfessionalSkills(locale: string) {
    return await ContentFullAPI.adapter.getProfessionalSkills(locale);
  }

  async getTechnologies(locale: string) {
    return await ContentFullAPI.adapter.getTechnologies(locale);
  }

}
