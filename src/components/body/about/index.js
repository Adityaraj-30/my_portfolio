import React from "react";
import "./about.css";
function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hello There 👋, I am <br />
          <span className="info-name"> Aditya Raj</span>.<br /> I love
          experimenting with the web.
        </div>
            <div className="about-photo">
                <img src={require ('../../../assets/dp.jpg')} alt="dp" className="picture" /> 
            </div>
      </div>
      <div className="about-bottom"></div>
    </div>
  );
}

export default About;
