import { Image, Tooltip, Typography } from '@juanmsl/ui';
import { useState } from 'react';

import { MySkillsStyle } from './my-skills.style';

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
    <MySkillsStyle>
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
          <Tooltip content={technology.name} key={key}>
            <Reveal key={key} delay={(key + 1) * 50}>
              <Image
                className={`technology-icon ${hoveredCategory.includes(technology.name) ? 'is-selected' : ''}`}
                src={technology.icon}
                alt={technology.name}
              />
            </Reveal>
          </Tooltip>
        ))}
      </section>
    </MySkillsStyle>
  );
};
