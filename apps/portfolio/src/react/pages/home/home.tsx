import { AboutMe, Characteristics, MyExperience, MyProjects, MySkills } from '@components/modules';
import { HomeHeader } from '@components/ui';

export const Home = () => {
  return (
    <>
      <HomeHeader />
      <AboutMe />
      <MySkills />
      <Characteristics />
      <MyExperience />
      <MyProjects />
    </>
  );
};
