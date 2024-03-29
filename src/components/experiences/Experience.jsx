import "./Experience.css";
import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <div>
      <section id="experience">
        <h5>What Skills I Have</h5>
        <h2>My Experience</h2>

        <div className="container experience_container">
          <div className="experience_frontend">
            <h3>Frontend Development</h3>
            <div className="experience_content">
              <article className="experience_details">
                <BsPatchCheckFill className="experience_detail_icons" />
                <div>
                  <h4>Html</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience_details">
                <BsPatchCheckFill className="experience_detail_icons" />
                <div>
                  <h4>Html</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience_details">
                <BsPatchCheckFill className="experience_detail_icons" />
                <div>
                  <h4>Html</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience_details">
                <BsPatchCheckFill className="experience_detail_icons" />
                <div>
                  <h4>Html</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience_details">
                <BsPatchCheckFill className="experience_detail_icons" />
                <div>
                  <h4>Html</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
            </div>
          </div>
          <div className="experience_Backend">
            <h3>Backend Development</h3>
            <div className="experience_content">
              <article className="experience_details">
                <BsPatchCheckFill className="experience_detail_icons" />
                <div>
                  <h4>Html</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience_details">
                <BsPatchCheckFill className="experience_detail_icons" />
                <div>
                  <h4>Html</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience_details">
                <BsPatchCheckFill className="experience_detail_icons" />
                <div>
                  <h4>Html</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience_details">
                <BsPatchCheckFill className="experience_detail_icons" />
                <div>
                  <h4>Html</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience_details">
                <BsPatchCheckFill className="experience_detail_icons" />
                <div>
                  <h4>Html</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
