import { JobExperienceEntity } from '@domain';

export const JobExperienceInstance: Array<JobExperienceEntity> = [
  {
    name: 'My Company',
    dateStart: '1018/01/01',
    dateEnd: '',
    position: 'Developer',
    description: ['Hello world'],
    links: [{ url: '', icon: '' }],
    icon: 'https://rotulosmatesanz.com/wp-content/uploads/2017/09/2000px-Google_G_Logo.svg_.png',
    order: 0,
    technologies: {
      items: [
        {
          name: 'Code',
        },
      ],
    },
  },
];
