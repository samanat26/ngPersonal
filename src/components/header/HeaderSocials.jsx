import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a
        href="https://www.linkedin.com/in/suman-gill-91b2b6152/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/samanat26" rel="noreferrer" target="_blank">
        <FaGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
