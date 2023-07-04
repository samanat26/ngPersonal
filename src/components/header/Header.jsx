import "./Header.css";
import React from "react";
import CTA from "./../cta/CTA";
import Me from "../../assets/suman.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <section id="#" className="container header_container">
      <h5>Hello I'm</h5>
      <h1>Suman Amanat</h1>
      <h5>
        <div className="text-light">Frontend-Developer</div>
      </h5>
      <CTA />
      <HeaderSocials />
      <a href="#contact" className="scroll_down">
        Scroll Down
      </a>

      {/* <div className="me">
        <img src={Me} alt="profile_image" />
      </div> */}
    </section>
  );
};

export default Header;
