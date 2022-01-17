import React from "react";
import "./web.css";
import { FaBriefcase } from "react-icons/fa";
import { FaPenSquare } from "react-icons/fa";
import { FaLaptop } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

function Web() {
  return (
    <div className="web">
      <div className="web-option">
        <a href="#projects">
          <FaPenSquare className="option-icon" /> Projects
        </a>
      </div>
      <div className="web-option">
        <a href="#skills">
          <FaLaptop className="option-icon" />
          Skills
        </a>
      </div>
      <div className="web-option">
        <a href="#work">
          <FaBriefcase className="option-icon" />
          Work
        </a>
      </div>
      <div className="web-option">
        <a href="#contact">
          <FaUser className="option-icon" />
          Contact
        </a>
      </div>
    </div>
  );
}

export default Web;
