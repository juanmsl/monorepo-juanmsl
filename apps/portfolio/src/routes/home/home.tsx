import {Header} from "@/components/ui";
import {AboutMe, MyExperience, MySkills} from "./components";
import {Line} from "@juanmsl/ui";

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
