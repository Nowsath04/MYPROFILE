import React from "react";
import "./Profile.css";
import { Typewriter } from "react-simple-typewriter";

function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text">NOWSATH</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                <Typewriter
                  words={["Full Stack Developer", "Mern Stack Developer"]}
                  loop
                  cursor
                  cursorStyle="|"
                  typeSpeed={100}
                  deleteSpeed={100}
                  delaySpeed={1000}
                />
              </h1>
            </span>
            <span className="profile-role-tagline">
              Knack of building Web applications with front and back end
              operations.
            </span>
          </div>
          <div className="profile-options">
            <a href="#ContactMe1">
              <button className="btn primary-btn rounded-pill">
                {""}
                <span className="ButtonHire">Hire Me </span>
              </button>
            </a>
            <a
              href="https://drive.google.com/file/d/1R3i7VjQ1_XTEqSQykMxFMlNEAv3gy8lI/view?usp=sharing"
              target="_blank"
              id="resume"
            >
              <button className="btn highlighted-btn rounded-pill px-2">
                Resume
              </button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
