import { Characteristics } from '@components/modules/characteristics';
import { Header } from '@components/ui';
import { AboutMe, MyExperience, MySkills } from '@components/modules';

export const Home = () => {
  return (
    <>
      <Header />
      <AboutMe />
      <MySkills />
      <Characteristics />
      <MyExperience />
    </>
  );
};
