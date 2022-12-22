import React, { useState, useRef } from "react";
import "./ContactMe.css";
import mail from "../../assets/ContactMe/th.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Result = () => {
  return <p>Your Message has been Sent Successfully.</p>;
};

function ContactMe() {
  const form = useRef();
  const [result, showResult] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7ry0p95",
        "template_1fn6cjq",
        form.current,
        "mVIMJ2NC5zlWP8NF3"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    showResult(true);
  };

  setTimeout(() => {
    showResult(false);
  }, 5000);

  return (
    <div
      className="main-container fade-in"
      id="ContactMe"
      style={{ opacity: "5", transform: "translateY(1px)" }}
    >
      <div className="heading-container">
        <div className="screen-heading">
          <span>Contact Me</span>
        </div>
        <div className="screen-sub-heading">
          <span>Lets Keep In Touch</span>
        </div>
        <div className="heading-seperator">
          <div className="seperator-line"></div>
          <div className="seperator-blob">
            <div></div>
          </div>
        </div>
      </div>
      <div className="central-form" id="ContactMe1">
        <div className="col">
          <h2 className="title">Connect with me 📧</h2>
          <div className="col-icon">
            <a href="https://github.com/Nowsath04" target="_blank">
              <i className="Nowsath">
                <FaGithub />
              </i>
            </a>
            <a
              href="https://www.linkedin.com/in/nowsath-a-66a0b9255/"
              target="_blank"
            >
              <i className="Nowsath">
                <FaLinkedin />
              </i>
            </a>
            <span></span>
          </div>
          <div className="img-back">
            <img src={mail} alt="image not found" />
          </div>
        </div>
        <div className="back-form">
          <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input
              type="text"
              id="name"
              name="from_name"
              required
              placeholder="Enter your name"
            />
            <label>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Enter your email"
            />
            <label>Message</label>
            <textarea
              name="message"
              id="message"
              required
              placeholder="Enter your message"
            />
            <div className="send-btn px-3">
              <button type="submit">
                <a href="mailto:nowsathnichu@gmail.com">Submit</a>
              </button>
              <div className="underline">
                <a href="mailto:nowsatnichu@gmail.com">
                  Send me email directly
                </a>
              </div>
              <div className="row">{result ? <Result /> : null}</div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
