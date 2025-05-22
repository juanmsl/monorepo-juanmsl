import {
  AssetEntity,
  CharacteristicEntity,
  ContactEntity,
  JobExperienceEntity,
  NavbarOptionEntity,
  ProfessionalSkillsEntity,
  ProjectEntity,
  TechnologyEntity,
  PortfolioAPI,
  PortfolioAdapter,
} from '@juanmsl/portfolio-api';
import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';

import { ENV } from '@core/env';

export const PortfolioAPIKeys = {
  all: ['all'] as const,

  allJobExperiences: () => [...PortfolioAPIKeys.all, 'jobExperiences'] as const,
  jobExperiencesLocale: (locale: string) => [...PortfolioAPIKeys.allJobExperiences(), locale] as const,

  allContacts: () => [...PortfolioAPIKeys.all, 'contacts'] as const,
  contactsLocale: (locale: string) => [...PortfolioAPIKeys.allContacts(), locale] as const,

  allProfessionalSkills: () => [...PortfolioAPIKeys.all, 'professionalSkills'] as const,
  professionalSkillsLocale: (locale: string) => [...PortfolioAPIKeys.allProfessionalSkills(), locale] as const,

  allTechnologies: () => [...PortfolioAPIKeys.all, 'technologies'] as const,
  technologiesLocale: (locale: string) => [...PortfolioAPIKeys.allTechnologies(), locale] as const,

  allCharacteristics: () => [...PortfolioAPIKeys.all, 'characteristics'] as const,
  characteristicsLocale: (locale: string) => [...PortfolioAPIKeys.allCharacteristics(), locale] as const,

  allNavbarOptions: () => [...PortfolioAPIKeys.all, 'navbar-options'] as const,
  navbarOptionsLocale: (locale: string) => [...PortfolioAPIKeys.allNavbarOptions(), locale] as const,

  allProjects: () => [...PortfolioAPIKeys.all, 'projects'] as const,
  projectsLocale: (locale: string) => [...PortfolioAPIKeys.allProjects(), locale] as const,

  allAssets: () => [...PortfolioAPIKeys.all, 'assets'] as const,
  assetId: (assetId: string) => [...PortfolioAPIKeys.allAssets(), 'asset', assetId] as const,
};

const adapter = new PortfolioAdapter(
  `${ENV.API_URL}/content/v1/spaces/${ENV.CONTENT_FULL_API_SPACE_ID}/environments/${ENV.CONTENT_FULL_ENVIRONMENT}`,
  ENV.CONTENT_FULL_API_ACCESS_TOKEN,
);

export const useGetSocialContact = (): UseQueryResult<Array<ContactEntity>> => {
  const { i18n } = useTranslation();

  return useQuery({
    queryKey: PortfolioAPIKeys.contactsLocale(i18n.languages[0]),
    queryFn: () => PortfolioAPI.use(adapter).getSocialContact(i18n.languages[0]),
  });
};

export const useGetJobExperience = (): UseQueryResult<Array<JobExperienceEntity>> => {
  const { i18n } = useTranslation();

  return useQuery({
    queryKey: PortfolioAPIKeys.jobExperiencesLocale(i18n.languages[0]),
    queryFn: () => PortfolioAPI.use(adapter).getJobExperience(i18n.languages[0]),
  });
};

export const useGetProfessionalSkills = (): UseQueryResult<Array<ProfessionalSkillsEntity>> => {
  const { i18n } = useTranslation();

  return useQuery({
    queryKey: PortfolioAPIKeys.professionalSkillsLocale(i18n.languages[0]),
    queryFn: () => PortfolioAPI.use(adapter).getProfessionalSkills(i18n.languages[0]),
  });
};

export const useGetTechnologies = (): UseQueryResult<Array<TechnologyEntity>> => {
  const { i18n } = useTranslation();

  return useQuery({
    queryKey: PortfolioAPIKeys.technologiesLocale(i18n.languages[0]),
    queryFn: () => PortfolioAPI.use(adapter).getTechnologies(i18n.languages[0]),
  });
};

export const useGetCharacteristics = (): UseQueryResult<Array<CharacteristicEntity>> => {
  const { i18n } = useTranslation();

  return useQuery({
    queryKey: PortfolioAPIKeys.characteristicsLocale(i18n.languages[0]),
    queryFn: () => PortfolioAPI.use(adapter).getCharacteristics(i18n.languages[0]),
  });
};

export const useAsset = (assetId: string): UseQueryResult<AssetEntity> => {
  return useQuery({
    queryKey: PortfolioAPIKeys.assetId(assetId),
    queryFn: () => PortfolioAPI.use(adapter).getAssetById(assetId),
  });
};

export const useGetNavbarOptions = (): UseQueryResult<Array<NavbarOptionEntity>> => {
  const { i18n } = useTranslation();

  return useQuery({
    queryKey: PortfolioAPIKeys.navbarOptionsLocale(i18n.languages[0]),
    queryFn: () => PortfolioAPI.use(adapter).getNavbarOptions(i18n.languages[0]),
  });
};

export const useGetProjects = (): UseQueryResult<Array<ProjectEntity>> => {
  const { i18n } = useTranslation();

  return useQuery({
    queryKey: PortfolioAPIKeys.projectsLocale(i18n.languages[0]),
    queryFn: () => PortfolioAPI.use(adapter).getProjects(i18n.languages[0]),
  });
};
