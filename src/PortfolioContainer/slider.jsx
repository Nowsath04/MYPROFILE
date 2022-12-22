import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Quiz from "../assets/Projects/Quiz.jpg";
import ECom from "../assets/Projects/Ecommerce.jpg";
import Whatsapp from "../assets/Projects/whatsapp-clone.JPG";
import Chatify from "../assets/Projects/Chatify.jpg";

function slider() {
  const settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 2000,
    // pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div>
      <Slider {...settings}>
      
              <div className="col-lg-12 Owl" style={{ width: "300px" }}>
              <div className="testi-item">
                  <div className="testi-comment">
                      <img src={Whatsapp} style={{ height: "120px" }} className="project-pic card-img-top" alt="..." />
                      <div className="card-body text-center">
                        <h6 className="card-title fw-bold text-center">Whatsapp-Clone</h6>
                        <a href="https://deft-smakager-85a14b.netlify.app/"  target="_blank"  className="btn btn-info " >
                          Live Site
                        </a>
                        <a href="https://github.com/Nowsath04/Whatsapp-clone-frondend.git"  target="_blank"  className="btn btn-info " >
                          Frond-End
                        </a>
                        <a href="https://github.com/Nowsath04/Whatsapp-clone-backend.git"  target="_blank"  className="btn btn-info " >
                          Back-End
                        </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 Owl" style={{ width: "300px" }}>
              <div className="testi-item">
                  <div className="testi-comment">
                      <img src={ECom} style={{ height: "120px" }} className="project-pic card-img-top" alt="..." />
                      <div className="card-body text-center">
                        <h6 className="card-title fw-bold text-center">Book Store</h6>
                        <a href="https://ecomerce-mern.netlify.app"  target="_blank"  className="btn btn-info " >
                          Live Site
                        </a>
                      <a href="https://github.com/Prasanth138/E-Commerce-frontend"  target="_blank"  className="btn btn-info " >
                          Frond-End
                        </a>
                      <a href="https://github.com/Prasanth138/E-Commerce-backend"  target="_blank"  className="btn btn-info " >
                          Back-End
                        </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 Owl" style={{ width: "300px" }}>
              <div className="testi-item">
                  <div className="testi-comment">
                      <img src={Chatify} style={{ height: "120px" }} className="project-pic card-img-top" alt="..." />
                      <div className="card-body text-center">
                        <h6 className="card-title fw-bold text-center">Chatify App</h6>
                        <a href="https://chatiify-mern.netlify.app"  target="_blank"  className="btn btn-info " >
                          Live Site
                        </a>
                        <a href="https://github.com/Prasanth138/Chatapp-frontend"  target="_blank"  className="btn btn-info " >
                          Frond-End
                        </a>
                        <a href="https://github.com/Prasanth138/Chatapp-backend"  target="_blank"  className="btn btn-info " >
                          Back-End
                        </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 Owl" style={{ width: "300px" }}>
              <div className="testi-item">
                  <div className="testi-comment">
                      <img src={Quiz} style={{ height: "120px" }} className="project-pic card-img-top" alt="..." />
                      <div className="card-body text-center">
                        <h6 className="card-title fw-bold text-center">Quiz App</h6>
                        <a href="https://quizapp-mern.netlify.app/#"  target="_blank"  className="btn btn-info " >
                          Live Site
                        </a>
                        <a href="https://github.com/Prasanth138/Quiz_Frontend"  target="_blank"  className="btn btn-info " >
                          Frond-End
                        </a>
                        <a href="https://github.com/Prasanth138/Quiz-Backend"  target="_blank"  className="btn btn-info " >
                          Back-End
                        </a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* <div className="col-lg-12 Owl" style={{ width: "300px" }}>
              <div className="testi-item">
                  <div className="testi-comment">
                      <img src={ECom} style={{ height: "120px" }} className="project-pic card-img-top" alt="..." />
                      <div className="card-body text-center">
                        <h6 className="card-title fw-bold text-center">Book Store</h6>
                        <p className="card-text text-center">
                        Front-end: Reactjs <br /> Back-end: Nodejs <br /> Database: MongoDB
                        </p>
                        <a href="https://ecomerce-mern.netlify.app"  target="_blank"  className="btn btn-info " >
                          Check it out
                        </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 Owl" style={{ width: "300px" }}>
              <div className="testi-item">
                  <div className="testi-comment">
                      <img src={Quiz} style={{ height: "120px" }} className="project-pic card-img-top" alt="..." />
                      <div className="card-body text-center">
                        <h6 className="card-title fw-bold text-center">Quiz App</h6>
                        <p className="card-text small text-center">
                        Front-end: Reactjs <br /> Back-end: Nodejs <br /> Database: MongoDB
                        </p>
                        <a href="https://quizapp-mern.netlify.app/#"  target="_blank"  className="btn btn-info" >
                          Check it out
                        </a>
                    </div>
                  </div>
                </div>
              </div> */}
              {/* <div className="col-lg-12 Owl" style={{ width: "300px" }}>
              <div className="testi-item">
                  <div className="testi-comment">
                      <img src={ONYX} style={{ height: "120px" }} className="project-pic card-img-top" alt="..." />
                      <div className="card-body text-center">
                        <h5 className="card-title fw-bold">Open Brewery API</h5>
                        <p className="card-text">
                          This is my first Hackathon project. It shows th
                        </p>
                        <a href="https:www.google.com"  target="_blank">
                          <button className="btn btn-info fw-bold bb" >Check it out</button>
                        </a>
                    </div>
                  </div>
                </div>
              </div> */}
              
      </Slider>
    </div>
  );
}

export default slider


 