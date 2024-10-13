import { Flex, Grid, Icon, IconNameT, Image, Ripple, Tag, Typography } from '@juanmsl/ui';
import { useState } from 'react';
import { useTheme } from 'styled-components';

import {
  ImageDotsStyle,
  ProjectCardContentStyle,
  ProjectCardStyle,
  ProjectDesktopViewStyle,
} from './project-card.style';

import { PATHS } from '@core/constants';
import { ProjectEntity } from '@domain';

type ProjectCardProps = {
  project: ProjectEntity;
};

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const { name, description, pictures, links, technologies } = project;
  const [imageIndex, setImageIndex] = useState(0);
  const theme = useTheme();

  return (
    <ProjectCardStyle>
      <ProjectDesktopViewStyle to={PATHS.PROJECT_URL('')} target='_blank' rel='noopener'>
        <section className='project-toolbar'>
          <span />
          <span />
          <span />
        </section>
        <ProjectCardContentStyle>
          <Image className='project-image' src={pictures.items[imageIndex].url} alt={pictures.items[0].title} />
          <section className='project-container'>
            <Typography nowrap={3} variant='label' noPadding>
              {description}
            </Typography>
          </section>
          <Ripple color={theme.colors.text.main} />
        </ProjectCardContentStyle>
      </ProjectDesktopViewStyle>
      <ImageDotsStyle>
        {pictures.items.map((_, key) => (
          <span
            className={`image-dot ${key === imageIndex ? 'is-image-dot-selected' : ''}`}
            key={key}
            onClick={() => setImageIndex(key)}
          />
        ))}
      </ImageDotsStyle>
      <Typography variant='header4' className='project-title' noPadding>
        {name}
      </Typography>
      <Flex gap='4px' wrap='wrap' jc='start'>
        {technologies.items.map(({ name }, key) => (
          <Tag key={key}>{name}</Tag>
        ))}
      </Flex>
      <Flex gap='4px' wrap='wrap' jc='start'>
        {links.items.map(({ url, label, icon }, key) => (
          <a href={url} target='_blank' rel='noopener' key={key}>
            <Grid flow='column' ai='center' jc='start' gap='0.5em'>
              <Icon name={icon as IconNameT} />
              <Typography>
                <Typography variant='label' family='code'>
                  {url}
                </Typography>{' '}
                | {label}
              </Typography>
            </Grid>
          </a>
        ))}
      </Flex>
    </ProjectCardStyle>
  );
};
