import { Header } from '@components/ui';
import { Line } from '@juanmsl/ui';
import { AboutMe, MyExperience, MySkills } from '@components/modules';

export const Home = () => {
  return (
    <>
      <Header />
      <AboutMe />
      <MySkills />
      <Line orientation="horizontal" style={{ width: '100px', margin: 'auto' }} />
      <MyExperience />
    </>
  );
};
