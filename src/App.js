import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

import Home from "./Home";
import Projectsall from "./Projectsall";
import ProjectDetails from "./ProjectDetails"; // <-- Import this
import AllBoutMe from "./AllBoutMe";
import Freelance from "./Freelance";
import Hire from "./Hire";
import Error404 from "./Error404";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projectsall" element={<Projectsall />} />

        {/* Dynamic slug route */}
        <Route path="/projects/:slug" element={<ProjectDetails />} />

        <Route path="/allboutme" element={<AllBoutMe />} />
        <Route path="/freelance" element={<Freelance />} />
        <Route path="/hire" element={<Hire />} />
        
         {/* Always last */}
        <Route path="*" element={<Error404 />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;