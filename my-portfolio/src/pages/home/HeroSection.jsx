import React from "react";
import "../../";
import heroImage from "../../img/hero_img.png";
import { Link } from "react-router-dom";
// import profile from

const HeroSection = () => {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">
            Hey, I'm
            <span style={{ color: "red", paddingLeft: "5px" }}>Mohammed</span>
          </p>
          <h1 className="hero--section--title">
            <span
              className="hero--section-title--color"
              style={{ paddingLeft: "10px" }}
            >
              Mustaqeem
            </span>{" "}
            <br />
            <h2>
              Develo<span style={{ color: "red" }}>per</span>
            </h2>
          </h1>
          <p className="hero--section-description">
            I am a skilled & Passionate web developer with experience in
            creating visually appealing and user friendly websites ,
          </p>
        </div>
        <a href="/image/Mustaqeem Resume.docx" className="btn btn-primary">
          Download CV
        </a>
      </div>
      <div className="hero--section--img">
        <img
          style={{ paddingBottom: "80px" }}
          src="/image/my photofrofile.png"
          alt="Hero Section"
        />
      </div>
    </section>
  );
};

export default HeroSection;
