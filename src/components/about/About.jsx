import "./About.css";
import React from "react";
import Me from "../../assets/suman.png";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import { FiUsers } from "react-icons/fi";

const About = () => {
  return (
    <div>
      <section id="about">
        <h2>About Me</h2>
        <div className="container about_container">
          <div className="about_me">
            <div className="about_me_image">
              <img src={Me} />
            </div>
          </div>

          <div className="about_content">
            <div className="about_cards">
              <article className="about_card">
                <FaAward className="about_icon" />
                <h5>Experience</h5>
                <small>1+ years working</small>
              </article>
              <article className="about_card">
                <FiUsers className="about_icon" />
                <h5>Clients</h5>
                <small>200+ Worldwide</small>
              </article>
              <article className="about_card">
                <VscFolderLibrary className="about_icon" />
                <h5>Projects</h5>
                <small>50+ completed</small>
              </article>
            </div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni
              aspernatur odio ipsa debitis quaerat, consequuntur expedita
              assumenda vel nobis ex quisquam dolores molestiae aperiam? Hic
              facilis odit consequuntur doloremque expedita?
            </p>
            <a href="#contact" className="btn btn-primary">
              Lets Talk
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
