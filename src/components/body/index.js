import React from "react";
import "./body.css";
import About from "./about/index";
import Contact from "./contact";
import Projects from "./projects/index";
import Skills from "./skills";
import Work from "./work";

function Body() {
  return (
    <div className="body">
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="work">
        <Work />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default Body;
