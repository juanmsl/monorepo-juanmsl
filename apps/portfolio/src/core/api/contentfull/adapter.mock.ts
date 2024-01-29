import {ContentFullAPIPort} from "./port.ts";
import {
  AssetEntity, CharacteristicEntity, ContactEntity,
  JobExperienceEntity, ProfessionalSkillsEntity, TechnologyEntity,
} from "./domain.ts";

export class ContentFullAPIAdapter implements ContentFullAPIPort {
  async getAssetById() {
    return await new Promise<AssetEntity>((resolve) => setTimeout(() => resolve({
      title: 'test',
      url: 'https://static.vecteezy.com/system/resources/previews/028/728/142/original/totoro-black-eye-free-png.png'
    }), 300));
  }

  async getJobExperience() {
    return await new Promise<Array<JobExperienceEntity>>((resolve) => setTimeout(() => resolve([
      {
        name: 'My Company',
        dateStart: '1018/01/01',
        dateEnd: '',
        position: 'Developer',
        description: ['Hello world'],
        links: [
          { url: '', icon: ''}
        ],
        icon: 'https://rotulosmatesanz.com/wp-content/uploads/2017/09/2000px-Google_G_Logo.svg_.png',
        order: 0,
        technologies: {
          items: [
            {
              name: 'Code',
            }
          ]
        }
      }
    ]), 3000));
  }

  async getSocialContact() {
    return new Promise<Array<ContactEntity>>((resolve) => setTimeout(() => resolve([
      {
        name: 'Linkedin',
        icon: 'linkedin',
        username: 'user',
        url: 'https://www.linkedin.com/in/user',
      }
    ]), 3000));
  }

  async getProfessionalSkills() {
    return new Promise<Array<ProfessionalSkillsEntity>>((resolve) => setTimeout(() => resolve([
      {
        name: 'Dev',
        color: 'red',
        technologies: {
          items: [
            {
              name: 'Code',
            }
          ]
        }
      }
    ]), 3000));
  }

  async getTechnologies() {
    return new Promise<Array<TechnologyEntity>>((resolve) => setTimeout(() => resolve([
      {
        name: 'Dev',
        yearsOfExperience: 10,
        seniority: 100,
        icon: 'https://rotulosmatesanz.com/wp-content/uploads/2017/09/2000px-Google_G_Logo.svg_.png'
      }
    ]), 3000));
  }

  async getCharacteristics() {
    return new Promise<Array<CharacteristicEntity>>((resolve) => setTimeout(() => resolve([
      {
        title: 'Dev',
        icon: 'https://rotulosmatesanz.com/wp-content/uploads/2017/09/2000px-Google_G_Logo.svg_.png'
      }
    ]), 3000));
  }
}
