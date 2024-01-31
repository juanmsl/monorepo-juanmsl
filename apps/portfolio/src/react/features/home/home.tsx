import {AboutMe, MyExperience, MySkills} from "@components/modules";
import {Line} from "@juanmsl/ui";
import {Header} from "@components/ui";

const Home = () => {

  return (
    <>
      <Header />
      <AboutMe />
      <MySkills />
      <Line orientation='horizontal' style={{ width: '100px', margin: 'auto' }} />
      <MyExperience />
    </>
  );
}

export default Home;
