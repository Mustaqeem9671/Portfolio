import React from "react";
import aboutImage from "../../img/about-me.png";

const AboutMe = () => {
  return (
    <section className="about--section" id="AboutMe">
      <div className="about--section--img">
        <img src="/image/about2.jpg" alt="About me" />
      </div>

      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title">About </p>
          <h1 className="skills--section--heading">About Me</h1>
          <p className="skills--section--description">
            Hello, I'm Mohammed Mustaqeem, originally from Haryana but now
            calling Bangalore home for the past six years. I completed my 10th
            and 12th grades in Bangalore and earned my Bachelor of Computer
            Applications (BCA) from Presidency College with an 8.18 cgpa.
            Passionate about continuous learning, I thrive on acquiring new
            skills and applying them to my projects. With a strong foundation in
            frontend design, I've successfully developed multiple websites and
            completed two noteworthy projects.
          </p>
          <p className="skills--section--description">
            One project involved building an e-commerce platform with responsive
            design and robust security measures. In another, I collaborated on a
            real-time chat application using React.js and WebSocket. I actively
            engage in online communities and attend workshops to stay updated
            with the latest frontend technologies. My goal is to evolve into a
            proficient developer capable of delivering innovative solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
