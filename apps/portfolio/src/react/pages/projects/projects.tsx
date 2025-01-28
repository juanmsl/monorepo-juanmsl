import { Grid, SectionLayout } from 'polpo/ui';
import { useTranslation } from 'react-i18next';

import { Header, ProjectCard } from '@components/ui';
import { useGetProjects } from '@hooks';

export const Projects = () => {
  const { data: projects = [] } = useGetProjects();
  const { t } = useTranslation();

  return (
    <>
      <Header title={t('projects:title')} />
      <SectionLayout>
        <Grid gap='2em' jc='center'>
          {projects.map((project, key) => (
            <ProjectCard project={project} key={key} />
          ))}
        </Grid>
      </SectionLayout>
    </>
  );
};
