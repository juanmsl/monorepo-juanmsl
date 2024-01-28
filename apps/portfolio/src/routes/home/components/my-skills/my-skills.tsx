import {MySkillsStyle} from "./my-skills.style.ts";
import {useTranslation} from "react-i18next";
import {useGetProfessionalSkills, useGetTechnologies} from "@/hooks";
import {Tag, Tooltip, Typography} from "@juanmsl/ui";
import {LoaderComponent, ProgressAnimation, SectionTitle} from "@/components/ui";
import {useState} from "react";
import { easeQuadInOut } from 'd3-ease';
import {ProfessionalSkillsEntity, TechnologyEntity} from "@/core";

export const MySkills = () => {
  const { t } = useTranslation();
  const { isPending: isProfessionalSkillsPending, data: professionalSkills = [] } = useGetProfessionalSkills();
  const { isPending: isTechnologiesPending, data: technologies = [] } = useGetTechnologies();
  const [hoveredCategory, setHoveredCategory] = useState([]);
  const [selectedTechnology, setSelectedTechnology] = useState<TechnologyEntity>(null);

  const getHoveredTechnologiesOfCategory = (category: ProfessionalSkillsEntity) => {
    setHoveredCategory(category.technologies.items.map(tech => tech.name));
  };

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
                  onMouseOver={() => getHoveredTechnologiesOfCategory(skill)}
                  onMouseLeave={() => setHoveredCategory([])}
                >
                  {skill.name}
                </Typography>
              ))}
            </div>

            <div className="skills-labels">
              {technologies.map((technology, key) => (
                <Tooltip
                  key={key}
                  offset={5}
                  content={t('home:mySkills.yearsOfExperience', { count: technology.yearsOfExperience })}
                >
                  <Tag
                    isSelected={hoveredCategory.includes(technology.name)}
                    onMouseOver={() => setSelectedTechnology(technology)}
                    onMouseLeave={() => setSelectedTechnology(null)}
                  >
                    {technology.name}
                  </Tag>
                </Tooltip>
              ))}
            </div>
          </div>

          <div className="right">
            <div className="right-content">
              <LoaderComponent isPending={!selectedTechnology}>
                <img src={selectedTechnology?.icon} alt='Technology icon' width='150px' />
                <ProgressAnimation
                  duration={300}
                  valueEnd={selectedTechnology?.yearsOfExperience}
                  easingFunction={easeQuadInOut}
                >
                  {(value) => (
                    <Typography withoutPadding variant='body'>{t('home:mySkills.yearsOfExperience', { count: value })}</Typography>
                  )}
                </ProgressAnimation>
                <Typography withoutPadding variant='label' weight='bold'>{selectedTechnology?.seniority}%</Typography>
              </LoaderComponent>
            </div>
          </div>
        </div>
      </LoaderComponent>
    </MySkillsStyle>
  );
};
