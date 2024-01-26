import {MyExperienceStyle} from "./my-experience.style.ts";
import {SectionTitle} from "@/components/modules";
import {useTranslation} from "react-i18next";
import {useGetJobExperience} from "@/hooks";
import {useMemo, useState} from "react";
import {CompanyListItem} from "./company-list-item.tsx";
import {CompanyDetails} from "@/routes/home/components/my-experience/company-details.tsx";
import {LoaderComponent} from "@/components/ui";

export const MyExperience = () => {
  const { t } = useTranslation();
  const {isPending, data: jobExperience = []} = useGetJobExperience();
  const [index, setIndex] = useState<number>(0);

  const renderedCompanies = useMemo(() => (
    jobExperience.map((company, key) => (
      <CompanyListItem
        key={key}
        selected={jobExperience?.[index]?.name === company.name}
        selectCompany={() => setIndex(key)}
        company={company}
      />
    ))
  ), [index, jobExperience]);

  return (
    <MyExperienceStyle>
      <div className="layout-content">
        <SectionTitle>
          {t('home:myExperience.title')}
        </SectionTitle>
        <LoaderComponent isPending={isPending || !jobExperience?.[index]}>
          <div className="my-experience-content">
            <div className="companies-list">
              {renderedCompanies}
            </div>
            <CompanyDetails company={jobExperience[index]} />
          </div>
        </LoaderComponent>
      </div>
    </MyExperienceStyle>
  );
};
