/* eslint-disable jsx-a11y/alt-text */
import "./Portfolio.css";
import React from "react";
import Img1 from "../../assets/portfolio1.jpg";

const Portfolio = () => {
  const Data = [
    {
      id: 1,
      image: Img1,
      title: "Maintaing tasks and tracking progress",
      github: "",
      demo: "",
    },
    {
      id: 1,
      image: Img1,
      title: "Maintaing tasks and tracking progress",
      github: "",
      demo: "",
    },
    {
      id: 1,
      image: Img1,
      title: "Maintaing tasks and tracking progress",
      github: "",
      demo: "",
    },
    {
      id: 1,
      image: Img1,
      title: "Maintaing tasks and tracking progress",
      github: "",
      demo: "",
    },
    {
      id: 1,
      image: Img1,
      title: "Maintaing tasks and tracking progress",
      github: "",
      demo: "",
    },
    {
      id: 1,
      image: Img1,
      title: "Maintaing tasks and tracking progress",
      github: "",
      demo: "",
    },
  ];
  return (
    <div>
      <section id=" portfolio">
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>
        <div className="container portfolio_container">
          {Data.map(({ id, image, title, github, demo }) => {
            return (
              <article className="portfolio_item">
                <div className="portfolio_item-image">
                  <img src={Img1} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio_item-cta">
                  <a
                    href={github}
                    className="btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                  <a
                    href={demo}
                    className="btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Demo
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
