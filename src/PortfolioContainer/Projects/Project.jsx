import React from "react";
import "./Project.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Slider from '../slider';
import bg from "../../assets/Projects/bg.png";

function Project() {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   cssEase: "linear"
  // };
  return (
    <div id="Projects1">
      <div className="heading-container"  >
        <div className="screen-heading">
          <span>Projects</span>
        </div>
        <div className="screen-sub-heading">
          <span><b>Credentials:- User: user@gmail.com | Password : User@123 </b></span>
          <span> || <b>Admin : admin@gmail.com | Password : Admin@123 </b></span>
        </div>
        <div className="heading-seperator">
          <div className="seperator-line"></div>
          <div className="seperator-blob">
            <div></div>
          </div>
        </div>
      </div>
      
      
      <div
        className="testimonial-section fade-in"
        id="Testimonial"
        style={{ opacity: "5", transform: "translateY(1px)" }}
      >
        <div className="container"> 
           <div className="row">
           <Slider/>
          </div>
        </div>
      </div>
      <div className="footer-image">
        <img src={bg} alt="Photo not responding" />
      </div>
    </div>
  );
}

export default Project; 


 
 