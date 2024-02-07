import { MySkillsStyle } from './my-skills.style';
import { Reveal } from '@components/animations';
import { useTranslation } from 'react-i18next';
import { LoaderComponent, SectionTitle } from '@components/ui';
import { ProfessionalSkillsEntity, TechnologyEntity } from '@domain';
import { Tag, Tooltip, Typography } from '@juanmsl/ui';
import { useDeferredValue, useState } from 'react';
import { useGetProfessionalSkills, useGetTechnologies } from '@hooks';

export const MySkills = () => {
  const { t } = useTranslation();
  const { data: professionalSkills = [] } = useGetProfessionalSkills();
  const { data: technologies = [] } = useGetTechnologies();
  const [hoveredCategory, setHoveredCategory] = useState([]);
  const [selectedTechnology, setSelectedTechnology] = useState<TechnologyEntity>(null);
  const technology = useDeferredValue(selectedTechnology);

  const getHoveredTechnologiesOfCategory = (category: ProfessionalSkillsEntity) => {
    setHoveredCategory(category.technologies.items.map((tech) => tech.name));
  };

  return (
    <MySkillsStyle>
      <div className="left">
        <SectionTitle>{t('home:mySkills.title')}</SectionTitle>

        <div className="skills-categories">
          {professionalSkills.map((skill, key) => (
            <Reveal key={key} delay={(key + 1) * 100}>
              <Typography
                variant="body"
                className="skill-category"
                onMouseOver={() => getHoveredTechnologiesOfCategory(skill)}
                onMouseLeave={() => setHoveredCategory([])}
              >
                {skill.name}
              </Typography>
            </Reveal>
          ))}
        </div>

        <div className="skills-labels">
          {technologies.map((technology, key) => (
            <Tooltip
              key={key}
              offset={5}
              content={t('home:mySkills.yearsOfExperience', { count: technology.yearsOfExperience })}
            >
              <Reveal delay={(key + 1) * 100}>
                <Tag
                  isSelected={hoveredCategory.includes(technology.name)}
                  onMouseOver={() => setSelectedTechnology(technology)}
                >
                  {technology.name}
                </Tag>
              </Reveal>
            </Tooltip>
          ))}
        </div>
      </div>

      <div className="right">
        <LoaderComponent isPending={!technology}>
          <div className="right-content">
            <img src={technology?.icon} alt="Technology icon" className="technology-icon" />
            <Typography withoutPadding variant="body">
              {t('home:mySkills.yearsOfExperience', { count: technology?.yearsOfExperience })}
            </Typography>
            <div className="seniority-container">
              <div className="seniority-bar">
                <div className="seniority-bar-line" style={{ width: `${technology?.seniority}%` }} />
              </div>
              <div className="seniority-labels">
                <Typography variant="label" weight="bold">
                  Jr
                </Typography>
                <Typography variant="label" weight="bold">
                  SSr
                </Typography>
                <Typography variant="label" weight="bold">
                  Sr
                </Typography>
              </div>
            </div>
          </div>
        </LoaderComponent>
      </div>
    </MySkillsStyle>
  );
};
