import { Grid } from '@juanmsl/ui';
import { useTranslation } from 'react-i18next';

import { SectionLayout } from '@components/layouts';
import { Header, ProjectCard } from '@components/ui';
import { useGetProjects } from '@hooks';

export const Projects = () => {
  const { data: projects = [] } = useGetProjects();
  const { t } = useTranslation();

  return (
    <>
      <Header title={t('projects:title')} />
      <SectionLayout>
        <Grid gtc='repeat(auto-fill, minmax(400px, 1fr))' gap='3em' jc='center'>
          {projects.map((project, key) => (
            <ProjectCard project={project} key={key} />
          ))}
        </Grid>
      </SectionLayout>
    </>
  );
};
