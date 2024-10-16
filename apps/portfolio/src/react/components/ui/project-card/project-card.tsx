import { Button, Grid, Image, Ripple, Tag, Typography } from '@juanmsl/ui';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'styled-components';

import {
  ImageDotsStyle,
  ProjectCardContentStyle,
  ProjectCardStyle,
  ProjectDesktopViewStyle,
} from './project-card.style';

import { ProjectEntity } from '@domain';

type ProjectCardProps = {
  project: ProjectEntity;
};

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const { name, description, pictures, links, technologies } = project;
  const [imageIndex, setImageIndex] = useState(0);
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <ProjectCardStyle className='project-card'>
      <Grid className='project-card-content'>
        <Typography variant='header4' className='project-title'>
          {name}
        </Typography>
        <Typography recommendedWith>{description}</Typography>
        <section className='project-technologies'>
          {technologies.items.map(({ name }) => (
            <Tag key={name} size='small' rounded>
              {name}
            </Tag>
          ))}
        </section>
        <a className='project-open-button' href={links.items[0].url} rel='noopener' target='_blank'>
          <Button rightIcon='arrow-right' size='small' variant='flat' noShadow>
            {t('projects:card.seeProject')}
          </Button>
        </a>
      </Grid>
      <Grid className='project-card-screen' gap='1em'>
        <ProjectDesktopViewStyle href={links.items[0].url} rel='noopener' target='_blank'>
          <section className='project-toolbar'>
            <span className='toolbar-button' />
            <span className='toolbar-button' />
            <span className='toolbar-button' />
            <Typography className='site-address' variant='small' family='code' noPadding>
              {links.items[0].url}
            </Typography>
          </section>
          <ProjectCardContentStyle>
            <Image className='project-image' src={pictures.items[imageIndex].url} alt={pictures.items[0].title} />
            <Ripple color={theme.colors.text.main} />
          </ProjectCardContentStyle>
        </ProjectDesktopViewStyle>
        <ImageDotsStyle>
          {pictures.items.map((_, key) => (
            <span
              className={`image-dot ${key === imageIndex ? 'is-image-dot-selected' : ''}`}
              key={key}
              onMouseOver={() => setImageIndex(key)}
            />
          ))}
        </ImageDotsStyle>
      </Grid>
    </ProjectCardStyle>
  );
};
