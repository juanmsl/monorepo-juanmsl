import { AboutMe, MyExperience, MySkills } from '@components/modules';
import { Characteristics } from '@components/modules/characteristics';
import { HomeHeader } from '@components/ui';

export const Home = () => {
  return (
    <>
      <HomeHeader />
      <AboutMe />
      <MySkills />
      <Characteristics />
      <MyExperience />
    </>
  );
};
