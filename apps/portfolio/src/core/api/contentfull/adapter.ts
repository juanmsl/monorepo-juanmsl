import {ContentFullAPIPort} from "./port.ts";
import {
  ContactsCollection,
  JobExperienceCollection, ProfessionalSkillsCollection,
  QueryAssetResponse,
  QueryResponse, TechnologiesCollection
} from "./domain.ts";
import axios, {AxiosInstance} from "axios";
import {ENV} from "@/core";


export class ContentFullAPIAdapter implements ContentFullAPIPort {
  private http: AxiosInstance;

  constructor() {
    this.http = axios.create({
      baseURL: `${ENV.API_URL}/content/v1/spaces/${ENV.CONTENTFULL_API_SPACE_ID}/environments/${ENV.ENVIRONMENT}`,
      method: 'post',
      headers: {
        'Authorization': `Bearer ${ENV.CONTENTFULL_API_ACCESS_TOKEN}`,
        "content-type": "application/json",
      }
    });
  }

  async getAssetById(assetId: string) {
    const { data } = await this.http<QueryAssetResponse>({
      data: {
        query: `
          query {
            asset (id: "${assetId}") {
              title
              url
            }
          }
        `,
        variables: {}
      }
    });

    return data.data.asset;
  }

  async getJobExperience(locale: string) {
    const { data } = await this.http<QueryResponse<{jobExperienceCollection: JobExperienceCollection}>>({
      data: {
        query: `
          query($locale: String) {
            jobExperienceCollection(locale: $locale, order: [order_DESC]) {
              items {
                name
                dateStart
                dateEnd
                position
                description
                links
                icon
                technologies: technologiesCollection {
                  items {
                    name
                    yearsOfExperience
                    seniority
                  }
                }
              }
            }
          }
        `,
        variables: {
          locale: locale,
        }
      }
    });

    return data.data.jobExperienceCollection.items;
  }

  async getSocialContact(locale: string) {
    const { data } = await this.http<QueryResponse<{ contactCollection: ContactsCollection }>>({
      data: {
        query: `
          query($locale: String) {
            contactCollection(locale:$locale) {
              items {
                icon
                name
                url
                username
              }
            }
          }
        `,
        variables: {
          locale: locale
        }
      }
    });

    return data.data.contactCollection.items;
  }

  async getProfessionalSkills(locale: string) {
    const { data } = await this.http<QueryResponse<{ professionalSkillsCollection: ProfessionalSkillsCollection }>>({
      data: {
        query: `
          query($locale: String) {
            professionalSkillsCollection(locale:$locale, order: [name_ASC]) {
              items {
                name
                color
                technologies: technologiesCollection {
                  items {
                    name
                  }
                }
              }
            }
          }
        `,
        variables: {
          locale: locale
        }
      }
    });


    return data.data.professionalSkillsCollection.items;
  }

  async getTechnologies(locale: string) {
    const { data } = await this.http<QueryResponse<{ technologyCollection: TechnologiesCollection }>>({
      data: {
        query: `
          query($locale: String) {
            technologyCollection(locale:$locale) {
              items {
                name
                yearsOfExperience
                seniority
                icon
              }
            }
          }
        `,
        variables: {
          locale: locale
        }
      }
    });


    return data.data.technologyCollection.items;
  }
}
