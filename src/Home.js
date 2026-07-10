import Banner from "./Banner";
import Why from "./Why";
import Projects from "./Projects";
import About1 from "./About1";
import Select from "./Select";

function Home() {
  return (
    <>
      <Banner />
      <Why />
      <Projects from="home" />
      <About1 />
      <Select />
    </>
  );
}

export default Home;