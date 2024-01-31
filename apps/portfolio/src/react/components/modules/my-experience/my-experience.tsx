import {MyExperienceStyle} from "./my-experience.style.ts";
import {useTranslation} from "react-i18next";
import {useMemo, useState} from "react";
import {CompanyListItem} from "./company-list-item.tsx";
import {CompanyDetails} from "./company-details.tsx";
import {useGetJobExperience} from "@hooks";
import {Reveal} from "@components/animations";
import {LoaderComponent, SectionTitle} from "@components/ui";
import {Line} from "@juanmsl/ui";

export const MyExperience = () => {
  const { t } = useTranslation();
  const {data: jobExperience = []} = useGetJobExperience();
  const [index, setIndex] = useState<number>(0);

  const renderedCompanies = useMemo(() => (
    jobExperience.flatMap((company, key) => {
      const item = (
        <Reveal delay={100 * key} key={key} width='100%'>
          <CompanyListItem
            selected={jobExperience?.[index]?.name === company.name}
            selectCompany={() => setIndex(key)}
            company={company}
          />
        </Reveal>
      );

      return key === 0 ? item : [
        <Line orientation='horizontal' className='companies-list-line-separator' key={`${key}.5`} />,
        item
      ]
    })
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
        <div className="company-details">
          <LoaderComponent isPending={!jobExperience?.[index]}>
            <CompanyDetails company={jobExperience[index]} key={index} />
          </LoaderComponent>
        </div>
      </div>
    </MyExperienceStyle>
  );
};
