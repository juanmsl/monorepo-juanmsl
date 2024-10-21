import axios, { AxiosInstance } from 'axios';

import { ENV } from '@core/env';
import {
  CharacteristicCollection,
  ContactsCollection,
  ContentFullPort,
  JobExperienceCollection,
  NavbarOptionCollection,
  ProfessionalSkillsCollection,
  ProjectCollection,
  QueryAssetResponse,
  QueryResponse,
  TechnologiesCollection,
} from '@domain';

export class ContentFullAdapter implements ContentFullPort {
  private http: AxiosInstance;

  constructor() {
    this.http = axios.create({
      baseURL: `${ENV.API_URL}/content/v1/spaces/${ENV.CONTENT_FULL_API_SPACE_ID}/environments/${ENV.CONTENT_FULL_ENVIRONMENT}`,
      method: 'post',
      headers: {
        Authorization: `Bearer ${ENV.CONTENT_FULL_API_ACCESS_TOKEN}`,
        'content-type': 'application/json',
      },
    });
  }

  async getAssetById(assetId: string) {
    const { data } = await this.http<QueryAssetResponse>({
      data: {
        query: `
          query($assetId: String!) {
            asset (id: $assetId) {
              title
              url
            }
          }
        `,
        variables: {
          assetId: assetId,
        },
      },
    });

    return data.data.asset;
  }

  async getJobExperience(locale: string) {
    const { data } = await this.http<QueryResponse<{ jobExperienceCollection: JobExperienceCollection }>>({
      data: {
        query: `
          query($locale: String) {
            jobExperienceCollection(locale: $locale, order: [order_DESC]) {
              items {
                name
                dateStart
                dateEnd
                position
                content
                links: linksCollection {
                  items {
                    url
                    label
                    icon
                  }
                }
                icon
                technologies: technologiesCollection {
                  items {
                    name
                    icon
                  }
                }
              }
            }
          }
        `,
        variables: {
          locale: locale,
        },
      },
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
          locale: locale,
        },
      },
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
          locale: locale,
        },
      },
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
                icon
              }
            }
          }
        `,
        variables: {
          locale: locale,
        },
      },
    });

    return data.data.technologyCollection.items;
  }

  async getCharacteristics(locale: string) {
    const { data } = await this.http<QueryResponse<{ characteristicCollection: CharacteristicCollection }>>({
      data: {
        query: `
          query($locale: String) {
            characteristicCollection(locale:$locale, order:[title_ASC]) {
              items {
                title
                icon
              }
            }
          }
        `,
        variables: {
          locale: locale,
        },
      },
    });

    return data.data.characteristicCollection.items;
  }

  async getNavbarOptions(locale: string) {
    const { data } = await this.http<QueryResponse<{ navbarOptionCollection: NavbarOptionCollection }>>({
      data: {
        query: `
          query($locale: String) {
            navbarOptionCollection(locale:$locale, order:[order_ASC]) {
              items {
                label
                page
                icon
              }
            }
          }
        `,
        variables: {
          locale: locale,
        },
      },
    });

    return data.data.navbarOptionCollection.items;
  }

  async getProjects(locale: string) {
    const { data } = await this.http<QueryResponse<{ projectCollection: ProjectCollection }>>({
      data: {
        query: `
          query($locale: String) {
            projectCollection(locale:$locale) {
              items {
                name
                description
                links: linksCollection {
                  items {
                    url
                    label
                    icon
                  }
                }
                pictures: picturesCollection {
                  items {
                    url
                    title
                  }
                }
                technologies: technologiesCollection {
                  items {
                    name
                    icon
                  }
                }
              }
            }
          }
        `,
        variables: {
          locale: locale,
        },
      },
    });

    return data.data.projectCollection.items;
  }
}
