import {
  AssetEntity,
  ContactEntity,
  ContentFullAPI,
  JobExperienceEntity,
  ProfessionalSkillsEntity,
  TechnologyEntity
} from "@/core";
import {useQuery, UseQueryResult} from "@tanstack/react-query";
import {useTranslation} from "react-i18next";
import {ContentFullAPIAdapter} from "@/core/api/contentfull/adapter";


export const ContentFullKeys = {
  all: ['all'] as const,

  allJobExperiences: () => [...ContentFullKeys.all, 'jobExperiences'] as const,
  jobExperiencesLocale: (locale: string) => [...ContentFullKeys.allJobExperiences(), locale] as const,

  allContacts: () => [...ContentFullKeys.all, 'contacts'] as const,
  contactsLocale: (locale: string) => [...ContentFullKeys.allContacts(), locale] as const,

  allProfessionalSkills: () => [...ContentFullKeys.all, 'professionalSkills'] as const,
  professionalSkillsLocale: (locale: string) => [...ContentFullKeys.allProfessionalSkills(), locale] as const,

  allTechnologies: () => [...ContentFullKeys.all, 'technologies'] as const,
  technologiesLocale: (locale: string) => [...ContentFullKeys.allTechnologies(), locale] as const,

  allAssets: () => [...ContentFullKeys.all, 'assets'] as const,
  assetId: (assetId: string) => [...ContentFullKeys.allAssets(), 'asset', assetId] as const,
}

export const useGetSocialContact = (): UseQueryResult<Array<ContactEntity>> => {
  const adapter = new ContentFullAPIAdapter();
  const controllerAPI = new ContentFullAPI(adapter);
  const { i18n } = useTranslation();

  return useQuery({
    queryKey: ContentFullKeys.contactsLocale(i18n.languages[0]),
    queryFn: () => controllerAPI.getSocialContact(i18n.languages[0]),
  });
};

export const useGetJobExperience = (): UseQueryResult<Array<JobExperienceEntity>> => {
  const adapter = new ContentFullAPIAdapter();
  const controllerAPI = new ContentFullAPI(adapter);
  const { i18n } = useTranslation();

  return useQuery({
    queryKey: ContentFullKeys.jobExperiencesLocale(i18n.languages[0]),
    queryFn: () => controllerAPI.getJobExperience(i18n.languages[0]),
  });
};

export const useGetProfessionalSkills = (): UseQueryResult<Array<ProfessionalSkillsEntity>> => {
  const adapter = new ContentFullAPIAdapter();
  const controllerAPI = new ContentFullAPI(adapter);
  const { i18n } = useTranslation();

  return useQuery({
    queryKey: ContentFullKeys.professionalSkillsLocale(i18n.languages[0]),
    queryFn: () => controllerAPI.getProfessionalSkills(i18n.languages[0]),
  });
};

export const useGetTechnologies = (): UseQueryResult<Array<TechnologyEntity>> => {
  const adapter = new ContentFullAPIAdapter();
  const controllerAPI = new ContentFullAPI(adapter);
  const { i18n } = useTranslation();

  return useQuery({
    queryKey: ContentFullKeys.technologiesLocale(i18n.languages[0]),
    queryFn: () => controllerAPI.getTechnologies(i18n.languages[0]),
  });
};

export const useAsset = (assetId: string): UseQueryResult<AssetEntity> => {
  const adapter = new ContentFullAPIAdapter();
  const controllerAPI = new ContentFullAPI(adapter);

  return useQuery({
    queryKey: ContentFullKeys.assetId(assetId),
    queryFn: () => controllerAPI.getAssetById(assetId),
  });
};

