import {MySkillsStyle} from "./my-skills.style.ts";
import {SectionTitle} from "@/components/modules";
import {useTranslation} from "react-i18next";
import {useGetProfessionalSkills, useGetTechnologies} from "@/hooks";
import {Tag, Tooltip, Typography} from "@juanmsl/ui";
import {LoaderComponent} from "@/components/ui";
import {useState} from "react";
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
                  >
                    {technology.name}
                  </Tag>
                </Tooltip>
              ))}
            </div>
          </div>

          <div className="right">
            <LoaderComponent isPending={!selectedTechnology}>
              <img src={selectedTechnology?.icon} alt='Technology icon' width='150px' />
              <Typography withoutPadding variant='header4'>{selectedTechnology?.name}</Typography>
              <Typography withoutPadding variant='body'>{t('home:mySkills.yearsOfExperience', { count: selectedTechnology?.yearsOfExperience })}</Typography>
              <Typography withoutPadding variant='label' weight='bold'>{selectedTechnology?.seniority}%</Typography>
            </LoaderComponent>
          </div>
        </div>
      </LoaderComponent>
    </MySkillsStyle>
  );
};
