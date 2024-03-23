import { Characteristics } from '@components/modules/characteristics';
import { HomeHeader } from '@components/ui';
import { AboutMe, MyExperience, MySkills } from '@components/modules';

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
