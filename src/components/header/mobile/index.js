import React from "react";
import "./mobile.css";
import { FaRegTimesCircle } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { FaPenSquare } from "react-icons/fa";
import { FaLaptop } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
function Mobile({ isOpen, setIsOpen }) {
  return (
    <div className="mobile">
      <div onClick={() => setIsOpen(!isOpen)} className="close-icon">
        <FaRegTimesCircle className="option-icon" />
      </div>
      <div className="mobile-options">
        <div className="mobile-option">
          <a href="#projects">
            <FaPenSquare className="option-icon" /> Projects
          </a>
        </div>
        <div className="mobile-option">
          <a href="#skills">
            <FaLaptop className="option-icon" />
            Skills
          </a>
        </div>
        <div className="mobile-option">
          <a href="#work">
            {" "}
            <FaBriefcase className="option-icon" />
            Work
          </a>
        </div>
        <div className="mobile-option">
          <a href="#contact">
            <FaUser className="option-icon" />
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}

export default Mobile;
