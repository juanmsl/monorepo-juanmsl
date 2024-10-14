import { Button, Flex, Grid, Icon, IconNameT, Image, Ripple, Tag, Tooltip, Typography } from '@juanmsl/ui';
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
  const { name, description, pictures, links, technologies } = project;
  const [imageIndex, setImageIndex] = useState(0);
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <ProjectCardStyle>
      <Typography variant='header4' className='project-title' noPadding>
        {name}
      </Typography>
      {links.items.length - 1 > 0 && (
        <Flex gap='4px' wrap='wrap' jc='start'>
          {links.items.map(({ url, label, icon }, key) => (
            <Tooltip content={label} key={key}>
              <a href={url} target='_blank' rel='noopener'>
                <Icon name={icon as IconNameT} />
              </a>
            </Tooltip>
          ))}
        </Flex>
      )}
      <ProjectDesktopViewStyle>
        <section className='project-toolbar'>
          <span className='toolbar-button' />
          <span className='toolbar-button' />
          <span className='toolbar-button' />
          <Tooltip content={t('projects:card.siteAddress')} position='bottom'>
            <Typography className='site-address' variant='small' family='code' noPadding>
              <a href={links.items[0].url} rel='noopener' target='_blank'>
                {links.items[0].url}
              </a>
            </Typography>
          </Tooltip>
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
      <Flex gap='0.5em' wrap='wrap' jc='start'>
        {technologies.items.map(({ name }, key) => (
          <Tag key={key} rounded size='small'>
            {name}
          </Tag>
        ))}
      </Flex>
    </ProjectCardStyle>
  );
};
