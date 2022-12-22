import React from "react";
import "./AboutMe.css";

function AboutMe() {
  return (
    <div className="about-me-container screen-container fade-in" id="AboutMe">
      <div className="about-me-parent">
        <div className="heading-container">
          <div className="screen-heading">
            <span>About</span>
          </div>
          <div className="screen-sub-heading">
            <span>Why Choose Me?</span>
          </div>
          <div className="heading-seperator">
            <div className="seperator-line"></div>
            <div className="seperator-blob">
              <div></div>
            </div>
          </div>
        </div>
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              Hello! I'm Nowsath, a passionate Full Stack Devolopement. I develop
              web applications.My core skill is based on JavaScript and I love
              to do most of the things using JavaScript. I love to make the web
              more open to the world. I have graduated with a bachelor's degree
              in Computer Application from Nehru Arts And Science College at
              Coimbatore, TamilNadu in 2022. I am available for any kind of job
              opportunity that suits my interests.
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span className="about-me-descr">
                  Here are a Few Highlights:
                </span>
              </div>
              <div className="highlight">
                <div className="highlight-blob"></div>
                <span className="about-me-desc">
                  Full Stack web development
                </span>
              </div>
              <div className="highlight">
                <div className="highlight-blob"></div>
                <span className="about-me-desc">
                  Interactive UI as per the design
                </span>
              </div>
              <div className="highlight">
                <div className="highlight-blob"></div>
                <span className="about-me-desc">React Developer</span>
              </div>
              <div className="highlight">
                <div className="highlight-blob"></div>
                <span className="about-me-desc">
                  Redux for State Management
                </span>
              </div>
              <div className="highlight">
                <div className="highlight-blob"></div>
                <span className="about-me-desc">Building REST API</span>
              </div>
              <div className="highlight">
                <div className="highlight-blob"></div>
                <span className="about-me-desc">Managing database</span>
              </div>
            </div>
            {/*  <div className="about-me-options">
            <a href="#ContactMe1"><button className="btn primary-btn ButtonHire"> Hire Me </button></a>
              <a href="Resume.pdf" download="Prasanth.pdf">
                <button className="btn highlighte-btn">Get Resume</button>
              </a> 
            </div>*/}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
