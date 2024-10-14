import { Button, Grid, Image, Ripple, Tooltip, Typography } from '@juanmsl/ui';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
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
  const { name, description, pictures, links } = project;
  const [imageIndex, setImageIndex] = useState(0);
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <ProjectCardStyle>
      <Typography variant='header4' className='project-title' noPadding>
        {name}
      </Typography>
      <ProjectDesktopViewStyle href={links.items[0].url} rel='noopener' target='_blank'>
        <section className='project-toolbar'>
          <span className='toolbar-button' />
          <span className='toolbar-button' />
          <span className='toolbar-button' />
          <Tooltip content={t('projects:card.siteAddress')} position='bottom'>
            <Typography className='site-address' variant='small' family='code' noPadding>
              {links.items[0].url}
            </Typography>
          </Tooltip>
        </section>
        <ProjectCardContentStyle>
          <Image className='project-image' src={pictures.items[imageIndex].url} alt={pictures.items[0].title} />
          <section className='project-container'>
            <Typography nowrap={5} variant='label' noPadding>
              {description}
            </Typography>
          </section>
          <Ripple color={theme.colors.text.main} />
        </ProjectCardContentStyle>
      </ProjectDesktopViewStyle>
      <Grid flow='column' jc='space-between' gap='1em' ai='center'>
        <ImageDotsStyle>
          {pictures.items.map((_, key) => (
            <span
              className={`image-dot ${key === imageIndex ? 'is-image-dot-selected' : ''}`}
              key={key}
              onMouseOver={() => setImageIndex(key)}
            />
          ))}
        </ImageDotsStyle>
        <Link to={PATHS.PROJECT_URL('')}>
          <Button rightIcon='arrow-right' size='small' variant='flat' noShadow>
            {t('projects:card.seeMore')}
          </Button>
        </Link>
      </Grid>
    </ProjectCardStyle>
  );
};
