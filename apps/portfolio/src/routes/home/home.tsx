import {Header} from "@/components/ui";
import {AboutMe, MyExperience, MySkills} from "./components";

const Home = () => {

  return (
    <section>
      <Header />
      <AboutMe />
      <MySkills />
      <MyExperience />
    </section>
  );
}

export default Home;
