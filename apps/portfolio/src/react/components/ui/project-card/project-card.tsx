import { Grid, Image, Ripple, Typography } from '@juanmsl/ui';
import { useTheme } from 'styled-components';

import { ProjectCardStyle } from './project-card.style';

import { ProjectEntity } from '@domain';

type ProjectCardProps = {
  project: ProjectEntity;
};

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const { name, description, pictures, urls } = project;
  const theme = useTheme();

  return (
    <ProjectCardStyle href={urls[0]} target='_blank' rel='noopener'>
      <Image className='project-image' src={pictures.items[0].url} alt={pictures.items[0].title} />
      <section className='project-container'>
        <Grid gap='4px' className='project-content'>
          <Typography variant='body' weight='bold' noPadding>
            {name}
          </Typography>
          <Typography nowrap variant='label' noPadding>
            {description}
          </Typography>
          <Ripple color={theme.colors.text.main} />
        </Grid>
      </section>
    </ProjectCardStyle>
  );
};
