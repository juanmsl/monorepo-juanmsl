import { Button, Grid } from '@juanmsl/ui';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { MyProjectsStyle } from '@components/modules/my-projects/my-projects.style';
import { ProjectCard, SectionTitle } from '@components/ui';
import { PATHS } from '@core/constants';
import { useGetProjects } from '@hooks';

export const MyProjects = () => {
  const { data: projects = [] } = useGetProjects();
  const { t } = useTranslation();

  return (
    <MyProjectsStyle contentClassName='layout-content'>
      <SectionTitle>{t('home:myProjects.title')}</SectionTitle>
      <Grid gtc='repeat(auto-fill, minmax(400px, 1fr))' gap='3em' jc='center'>
        {projects.slice(0, 3).map((project, key) => (
          <ProjectCard project={project} key={key} />
        ))}
      </Grid>
      <Link className='see-all-projects-button' to={PATHS.PROJECTS_URL}>
        <Button variant='flat' leftIcon='arrow-right' noShadow>
          {t('home:myProjects.viewAll')}
        </Button>
      </Link>
    </MyProjectsStyle>
  );
};
