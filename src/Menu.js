import CulinaryExcellence from "./Culinary";
import Specials from "./Specials";

export default function Menu() {
  return (
    <section className="menu-page">

      {/* DISH CAROUSEL */}
      <Specials/>

 <div className="divider-line"></div>

 <CulinaryExcellence/>


    </section>
  );
}