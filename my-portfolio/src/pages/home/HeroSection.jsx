import React from "react";
import '../../'
import heroImage from '../../img/hero_img.png'

const HeroSection = () => {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Mohammed</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
            I am a developer and I am passionate about creating innovative
            complicated
            <br /> A passionate Full stack developer with a background in
          </p>
        <button className="btn btn-primary">Get In Touch</button>
        </div>
        <div className="hero--section--img">
          <img src={heroImage} alt="hero section " />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
