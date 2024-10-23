import { useClassNames } from 'juanmsl/hooks';
import { Button, FlipCard, Grid, Icon, IconNameT, Image, Tag, Tooltip, Typography } from 'juanmsl/ui';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { LinksContainerStyle, ProjectCardStyle } from './project-card.style';

import { ScreenImage } from '@components/ui';
import { ProjectEntity } from '@domain';

type ProjectCardProps = {
  project: ProjectEntity;
  verticalMode?: boolean;
  className?: string;
};

export const ProjectCard = ({ project, verticalMode = false, className = '' }: ProjectCardProps) => {
  const { name, description, pictures, links, technologies } = project;
  const [isFlipped, setIsFlipped] = useState(false);
  const { t } = useTranslation();
  const projectCardClassName = useClassNames({
    [className]: Boolean(className),
    'vertical-mode': verticalMode,
  });

  return (
    <ProjectCardStyle
      className={projectCardClassName}
      onMouseOver={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
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
        <Typography recommendedWith>{description}</Typography>
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
        <FlipCard isFlipped={isFlipped} flipDirection='horizontal'>
          <ScreenImage
            className='screen-image-desktop'
            src={pictures.items[0].url}
            alt={pictures.items[0].title}
            url={links.items[0].url}
          />

          <ScreenImage
            className='screen-image-desktop'
            src={pictures.items[1].url}
            alt={pictures.items[1].title}
            url={links.items[0].url}
          />
        </FlipCard>
      </Grid>
    </ProjectCardStyle>
  );
};
