import {MySkillsStyle} from "./my-skills.style.ts";
import {SectionTitle} from "@/components/modules";
import {useTranslation} from "react-i18next";
import {useGetProfessionalSkills, useGetTechnologies} from "@/hooks";
import {Tag, Tooltip, Typography} from "@juanmsl/ui";
import {LoaderComponent} from "@/components/ui";

export const MySkills = () => {
  const { t } = useTranslation();
  const { isPending: isProfessionalSkillsPending, data: professionalSkills = [] } = useGetProfessionalSkills();
  const { isPending: isTechnologiesPending, data: technologies = [] } = useGetTechnologies();

  return (
    <MySkillsStyle>
      <LoaderComponent isPending={isProfessionalSkillsPending || !professionalSkills || isTechnologiesPending || !technologies}>
        <div className="layout-content">
          <div className="left">
            <SectionTitle>
              {t('home:mySkills.title')}
            </SectionTitle>

            <div className="skills-categories">
              {professionalSkills.map((skill, key) => (
                <Typography
                  key={key}
                  variant='body'
                  className='skill-category'
                >
                  {skill.name}
                </Typography>
              ))}
            </div>

            <div className="skills-labels">
              {technologies.map((technology, key) => (
                <Tooltip offset={5} content={t('home:mySkills.yearsOfExperience', { count: technology.yearsOfExperience })}>
                  <Tag key={key}>{technology.name}</Tag>
                </Tooltip>
              ))}
            </div>
          </div>
          <div className="right">

          </div>
        </div>
      </LoaderComponent>
    </MySkillsStyle>
  );
};
