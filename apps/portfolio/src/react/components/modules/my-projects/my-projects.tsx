import { Button } from '@juanmsl/ui';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { MyProjectsStyle } from '@components/modules/my-projects/my-projects.style';
import { LoaderComponent, ProjectCard, SectionTitle } from '@components/ui';
import { PATHS } from '@core/constants';
import { useGetProjects } from '@hooks';

export const MyProjects = () => {
  const { data: projects = [] } = useGetProjects();
  const { t } = useTranslation();

  return (
    <MyProjectsStyle contentClassName='layout-content'>
      <LoaderComponent isPending={projects.length === 0}>
        <SectionTitle center>{t('home:myProjects.title')}</SectionTitle>
        <section className='layout-projects-grid'>
          {projects.slice(0, 3).map((project, key) => (
            <ProjectCard project={project} key={key} />
          ))}
        </section>
        <Link className='see-all-projects-button' to={PATHS.PROJECTS_URL}>
          <Button variant='flat' leftIcon='arrow-right' noShadow>
            {t('home:myProjects.viewAll')}
          </Button>
        </Link>
      </LoaderComponent>
    </MyProjectsStyle>
  );
};
