import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Header";
import Banner from "./Banner";
import Menu from "./Menu";
import About from "./About";
import Contact from "./Contact";
import Reservation from "./Reservation";
import Policies from "./Policies";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Banner />} />   {/* HOME */}
        <Route path="/menu" element={<Menu />} /> {/* MENU */}
        <Route path="/about" element={<About />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policies" element={<Policies />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;