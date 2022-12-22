import React, { useState } from "react";
import "./Resume.css";
import education1 from "../../assets/Resume/education.svg";
import interest1 from "../../assets/Resume/interests.svg";
import pskills1 from "../../assets/Resume/programming-skills.svg";
import projects1 from "../../assets/Resume/projects.svg";
import workhistory1 from "../../assets/Resume/work-history.svg";

export default function Resume() {
  const [isActive, setActive] = useState({
    activeObject: null,
    objects: [
      {
        id: 2,
        Name: "Technical Skills",
        src: pskills1,
        href: "#PSkills",
      },
      {
        id: 1,
        Name: "Projects",
        src: projects1,
        href: "#Projects",
      },
      {
        id: 3,
        Name: "Interests",
        src: workhistory1,
        href: "#Interests",
      },
      {
        id: 4,
        Name: "Education",
        src: education1,
        href: "#Education",
      },
    ],
  });
  function toggleActive(index) {
    setActive({ ...isActive, activeObject: isActive.objects[index] });
  }
  function toggleActiveStyles(index) {
    if (isActive.objects[index] === isActive.activeObject) {
      return "bullet selected-bullet";
    } else {
      return "bullet";
    }
  }

  return (
    <div className="resume-container screen-container fade-in" id="Resume">
      <div className="resume-content">
        <div className="heading-container">
          <div className="screen-heading">
            <span>Resume</span>
          </div>
          <div className="screen-sub-heading">
            <span>My formal Bio Details</span>
          </div>
          <div className="heading-seperator">
            <div className="seperator-line"></div>
            <div className="seperator-blob">
              <div></div>
            </div>
          </div>
        </div>
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">
                {isActive.objects.map((elements, index) => (
                  <div
                    key={index}
                    className={toggleActiveStyles(index)}
                    onClick={() => {
                      toggleActive(index);
                    }}
                  >
                    <img className="bullet-logo" src={elements.src} alt="B" />
                    <span className="bullet-label">
                      <a href={elements.href}> {elements.Name} </a>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="resume-bullet-details">
            <div className="resume-details-carousal">
              <div
                className="resume-screen-container programming-skills-container"
                id="PSkills"
              >
                <div className="skill-parent">
                  <div className="heading-bullet"></div>
                  <span>JavaScript</span>
                  <div className="skill-percentage">
                    <div
                      style={{ width: "85%" }}
                      className="active-percentage-bar"
                    ></div>
                  </div>
                </div>
                <div className="skill-parent">
                  <div className="heading-bullet"></div>
                  <span>React JS</span>
                  <div className="skill-percentage">
                    <div
                      style={{ width: "85%" }}
                      className="active-percentage-bar"
                    ></div>
                  </div>
                </div>
                <div className="skill-parent">
                  <div className="heading-bullet"></div>
                  <span>Bootstrap</span>
                  <div className="skill-percentage">
                    <div
                      style={{ width: "85%" }}
                      className="active-percentage-bar"
                    ></div>
                  </div>
                </div>
                <div className="skill-parent">
                  <div className="heading-bullet"></div>
                  <span>GitHub</span>
                  <div className="skill-percentage">
                    <div
                      style={{ width: "85%" }}
                      className="active-percentage-bar"
                    ></div>
                  </div>
                </div>
                <div className="skill-parent">
                  <div className="heading-bullet"></div>
                  <span>Node JS</span>
                  <div className="skill-percentage">
                    <div
                      style={{ width: "89%" }}
                      className="active-percentage-bar"
                    ></div>
                  </div>
                </div>
                <div className="skill-parent">
                  <div className="heading-bullet"></div>
                  <span>Mongo DB</span>
                  <div className="skill-percentage">
                    <div
                      style={{ width: "83%" }}
                      className="active-percentage-bar"
                    ></div>
                  </div>
                </div>
                <div className="skill-parent">
                  <div className="heading-bullet"></div>
                  <span>HTML</span>
                  <div className="skill-percentage">
                    <div
                      style={{ width: "80%" }}
                      className="active-percentage-bar"
                    ></div>
                  </div>
                </div>
                <div className="skill-parent">
                  <div className="heading-bullet"></div>
                  <span>CSS</span>
                  <div className="skill-percentage">
                    <div
                      style={{ width: "80%" }}
                      className="active-percentage-bar"
                    ></div>
                  </div>
                </div>
              </div>
              <div className="resume-screen-container" id="Projects">
                <div className="resume-heading">
                  <div className="resume-main-heading">
                    <div className="heading-bullet"></div>
                    <span>Whatsapp Clone App</span>
                  </div>
                  <div className="resume-sub-heading">
                    <span>
                      <span className="Tecnologyspan">Technologies Used :</span><span> FrondEnd :  React JS,</span><span> BackEnd : Node JS, </span>
                      <span>DataBase : MongoDB</span>.
                    </span>
                  </div>
                  <div className="resume-heading-description">
                    <span>
                      Hotel Booking System is online booking engine that allows
                      guests to make secure online reservations through hotel
                      website and helps hotels to accept bookings and collect
                      payments online.
                    </span>
                  </div>
                </div>
                <div className="resume-heading">
                  <div className="resume-main-heading">
                    <div className="heading-bullet"></div>
                    <span>Book Shop </span>
                  </div>
                  <div className="resume-sub-heading">
                  <span>
                      <span className="Tecnologyspan">Technologies Used :</span><span> FrondEnd :  React JS,</span><span> BackEnd : Node JS, </span>
                      <span>DataBase : MongoDB</span>.
                    </span>
                  </div>
                  <div className="resume-heading-description">
                    <span>
                      Book shopping App allows users to check for various Books
                      Instruments and can purchase them using Paypal, Debit or
                      Credit Card. The user may browse through these products as
                      per categories
                    </span>
                  </div>
                </div>
                <div className="resume-heading">
                  <div className="resume-main-heading">
                    <div className="heading-bullet"></div>
                    <span>Chatify App</span>
                  </div>
                  <div className="resume-sub-heading">
                  <span>
                      <span className="Tecnologyspan">Technologies Used :</span><span> FrondEnd :  React JS,</span><span> BackEnd : Node JS, </span>
                      <span>DataBase : MongoDB</span>.
                    </span>
                  </div>
                  <div className="resume-heading-description">
                    <span>
                      Chatify app allows you to communicate with your buddies
                      through chat. It enables you to send and receive messages.
                      Chatting apps make it easier, simpler and faster to
                      connect with everyone and it is also easy to use.
                    </span>
                  </div>
                </div>
                <div className="resume-heading">
                  <div className="resume-main-heading">
                    <div className="heading-bullet"></div>
                    <span>Quiz App </span>
                  </div>
                  <div className="resume-sub-heading">
                  <span>
                      <span className="Tecnologyspan">Technologies Used :</span><span> FrondEnd :  React JS,</span><span> BackEnd : Node JS, </span>
                      <span>DataBase : MongoDB</span>.
                    </span>
                  </div>
                  <div className="resume-heading-description">
                    <span>
                      It provides a common platform to connect student and
                      teacher online to take quiz. The User can create Quiz and
                      take quiz and can asses himself/herself
                    </span>
                  </div>
                </div>
              </div>
              <div className="resume-screen-container" id="Interests">
                <div className="resume-heading">
                  <div className="resume-main-heading">
                    <div className="heading-bullet"></div>
                    <span>Cricket</span>
                  </div>
                </div>
                <div className="resume-heading">
                  <div className="resume-main-heading">
                    <div className="heading-bullet"></div>
                    <span>FootBall</span>
                  </div>
                  
                </div>
                <div className="resume-heading">
                  <div className="resume-main-heading">
                    <div className="heading-bullet"></div>
                    <span>Music</span>
                  </div>
                </div>
                <div className="resume-heading">
                  <div className="resume-main-heading">
                    <div className="heading-bullet"></div>
                    <span>Watching Movies</span>
                    <div></div>
                  </div>
                </div>
                <div className="resume-heading">
                  <div className="resume-main-heading">
                    <div className="heading-bullet"></div>
                    <span>Video Games</span>
                  </div>
                </div>
              </div>
              <div className="resume-screen-container" id="Education">
                <div className="resume-heading">
                  <div className="resume-main-heading">
                    <div className="heading-bullet"></div>
                    <span>Bachelor Of Computer Application (BCA)</span>
                    <div className="heading-date">2019-2022</div>
                  </div>
                  <div className="resume-sub-heading">
                    <span>NEHRU ARTS AND SCIENCE COLLEGE-COIMBATORE</span>
                  </div>
                  <div className="resume-heading-description">
                    <span></span>
                  </div>
                </div>
                <div className="resume-heading">
                  <div className="resume-main-heading">
                    <div className="heading-bullet"></div>
                    <span>Higher Secondary Certificate</span>
                    <div className="heading-date">2017-2019</div>
                  </div>
                  <div className="resume-sub-heading">
                    <span>C.S.I BOYS HR SEC SCHOOL-COIMABATORE-08</span>
                  </div>
                  <div className="resume-heading-description">
                    <span></span>
                  </div>
                </div>
                <div className="resume-heading">
                  <div className="resume-main-heading">
                    <div className="heading-bullet"></div>
                    <span>Secondary School Leaving Certificate </span>
                    <div className="heading-date">2016-2017</div>
                  </div>
                  <div className="resume-sub-heading">
                    <span>C.S.I BOYS HR SEC SCHOOL-COIMABATORE-08</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
