import {MyExperienceStyle} from "./my-experience.style.ts";
import {useTranslation} from "react-i18next";
import {useGetJobExperience} from "@/hooks";
import {useMemo, useState} from "react";
import {CompanyListItem} from "./company-list-item.tsx";
import {CompanyDetails} from "./company-details.tsx";
import {LoaderComponent, SectionTitle} from "@/components/ui";
import {Reveal} from "@/components/animations";

export const MyExperience = () => {
  const { t } = useTranslation();
  const {data: jobExperience = []} = useGetJobExperience();
  const [index, setIndex] = useState<number>(0);

  const renderedCompanies = useMemo(() => (
    jobExperience.map((company, key) => (
      <Reveal delay={100 * key} key={key}>
        <CompanyListItem
          selected={jobExperience?.[index]?.name === company.name}
          selectCompany={() => setIndex(key)}
          company={company}
        />
      </Reveal>
    ))
  ), [index, jobExperience]);

  return (
    <MyExperienceStyle>
      <SectionTitle>
        {t('home:myExperience.title')}
      </SectionTitle>
      <div className="my-experience-content">
        <div className="companies-list">
          {renderedCompanies}
        </div>
        <LoaderComponent isPending={!jobExperience?.[index]}>
          <CompanyDetails company={jobExperience[index]} key={index} />
        </LoaderComponent>
      </div>
    </MyExperienceStyle>
  );
};
