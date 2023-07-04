import "./Services.css";
import React from "react";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <div>
      <section id="service">
        <h5>What I Offer</h5>
        <h2>Services</h2>
        <div className="container service_container">
          <div className="service">
            <div className="service_head">
              <h3>UI/UX Design</h3>
            </div>

            <ul className="service_list">
              <li>
                <BiCheck className="service_list-icon" />
                <p>Lorem ipsum, dolor sitEnim.</p>
              </li>
              <li>
                <BiCheck className="service_list-icon" />
                <p>Lorem ipsum, dolor sitEnim.</p>
              </li>
              <li>
                <BiCheck className="service_list-icon" />
                <p>Lorem ipsum, dolor sitEnim.</p>
              </li>
            </ul>
          </div>
          <div className="service">
            <div className="service_head">
              <h3>WebDevelopment Design</h3>
            </div>

            <ul className="service_list">
              <li>
                <BiCheck className="service_list-icon" />
                <p>Lorem ipsum, dolor sitEnim.</p>
              </li>
              <li>
                <BiCheck className="service_list-icon" />
                <p>Lorem ipsum, dolor sitEnim.</p>
              </li>
              <li>
                <BiCheck className="service_list-icon" />
                <p>Lorem ipsum, dolor sitEnim.</p>
              </li>
            </ul>
          </div>
          <div className="service">
            <div className="service_head">
              <h3>Content Creation</h3>
            </div>

            <ul className="service_list">
              <li>
                <BiCheck className="service_list-icon" />
                <p>Lorem ipsum, dolor sitEnim.</p>
              </li>
              <li>
                <BiCheck className="service_list-icon" />
                <p>Lorem ipsum, dolor sitEnim.</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
