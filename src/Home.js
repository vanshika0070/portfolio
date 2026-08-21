import Banner from "./Banner";
import Why from "./Why";
import Projects from "./Projects";
import About1 from "./About1";
import Select from "./Select";
import Availability from "./Availability";

function Home() {
  return (
    <>
      <Banner />
      <Projects from="home" />
      <Why />
      <About1 />
      <Select />
      <Availability />
      
            {/* <div className="availability">
              <span className="dot"></span>
              <span>Available for work</span>
            </div> */}

            
    </>
  );
}

export default Home;





