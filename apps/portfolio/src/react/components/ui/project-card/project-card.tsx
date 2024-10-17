import { Button, Grid, Icon, IconNameT, Image, Ripple, Tag, Tooltip, Typography } from '@juanmsl/ui';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'styled-components';

import {
  LinksContainerStyle,
  ProjectCardContentStyle,
  ProjectCardStyle,
  ProjectDesktopViewStyle,
} from './project-card.style';

import { ProjectEntity } from '@domain';

type ProjectCardProps = {
  project: ProjectEntity;
  verticalMode?: boolean;
};

export const ProjectCard = ({ project, verticalMode = false }: ProjectCardProps) => {
  const { name, description, pictures, links, technologies } = project;
  const [imageIndex, setImageIndex] = useState(0);
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <ProjectCardStyle className={`project-card ${verticalMode ? 'vertical-mode' : ''}`}>
      <Grid className='project-card-content'>
        <LinksContainerStyle>
          {links.items.map(({ url, icon, label }, key) => (
            <Tooltip content={label} key={key}>
              <a href={url} target='_blank' rel='noopener'>
                <Icon name={icon as IconNameT} />
              </a>
            </Tooltip>
          ))}
        </LinksContainerStyle>
        <Typography variant='header4' className='project-title'>
          {name}
        </Typography>
        <Typography className='project-description' recommendedWith>
          {description}
        </Typography>
        <section className='project-technologies'>
          {technologies.items.map(({ name, icon }) => (
            <Tag key={name} size='small' className='project-technology' rounded>
              <Image className='project-technology-icon' src={icon} alt={name} />
              {name}
            </Tag>
          ))}
        </section>
        <a className='project-open-button' href={links.items[0].url} rel='noopener' target='_blank'>
          <Button rightIcon='arrow-right' size='small' color='primary' variant='flat' noShadow>
            {t('projects:card.seeProject')}
          </Button>
        </a>
      </Grid>
      <Grid className='project-card-screen' gap='1em'>
        <ProjectDesktopViewStyle
          href={links.items[0].url}
          rel='noopener'
          target='_blank'
          onMouseOver={() => setImageIndex(1)}
          onMouseLeave={() => setImageIndex(0)}
        >
          <section className='project-toolbar'>
            <span className='toolbar-button' />
            <span className='toolbar-button' />
            <span className='toolbar-button' />
            <Typography className='site-address' variant='small' family='code' noPadding nowrap>
              {links.items[0].url}
            </Typography>
          </section>
          <ProjectCardContentStyle>
            <Image className='project-image' src={pictures.items[imageIndex].url} alt={pictures.items[0].title} />
            <Ripple color={theme.colors.text.main} />
          </ProjectCardContentStyle>
        </ProjectDesktopViewStyle>
      </Grid>
    </ProjectCardStyle>
  );
};
