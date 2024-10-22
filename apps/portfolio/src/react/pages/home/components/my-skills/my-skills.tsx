import { Image, Typography } from '@juanmsl/ui';
import { useState } from 'react';

import { GlassStyled, MySkillsStyle, SkillStyle } from './my-skills.style';

import { Reveal } from '@components/animations';
import { ProfessionalSkillsEntity } from '@domain';
import { useGetProfessionalSkills, useGetTechnologies } from '@hooks';

export const MySkills = () => {
  const { data: professionalSkills = [] } = useGetProfessionalSkills();
  const { data: technologies = [] } = useGetTechnologies();
  const [hoveredCategory, setHoveredCategory] = useState([]);

  const getHoveredTechnologiesOfCategory = (category: ProfessionalSkillsEntity) => {
    setHoveredCategory(category.technologies.items.map(tech => tech.name));
  };

  return (
    <MySkillsStyle fitHeightContent contentClassName='layout-content'>
      <section className='skills-categories'>
        {professionalSkills.map((skill, key) => (
          <Reveal key={key} delay={(key + 1) * 100}>
            <Typography
              variant='body'
              className='skill-category'
              onMouseOver={() => getHoveredTechnologiesOfCategory(skill)}
              onMouseLeave={() => setHoveredCategory([])}
            >
              {skill.name}
            </Typography>
          </Reveal>
        ))}
      </section>
      <section className='skills-labels'>
        {technologies.map((technology, key) => (
          <Reveal key={key} delay={(key + 1) * 50}>
            <SkillStyle className={hoveredCategory.includes(technology.name) ? 'is-selected' : ''}>
              <Image className='technology-icon' src={technology.icon} alt={technology.name} />
              <GlassStyled />
              <span className='skill-label'>{technology.name}</span>
            </SkillStyle>
          </Reveal>
        ))}
      </section>
    </MySkillsStyle>
  );
};
