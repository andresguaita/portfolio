import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ModalOneContent = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
  };
  return (
    <div className="slideshow">
      <figure>
        {/* Project Details Starts */}
        <figcaption>
          <h3>Country App</h3>
          <div className="row open-sans-font">
            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-file-text-o pr-2"></i>
              <span className="project-label">Proyecto </span>:{" "}
              <span className="ft-wt-600 uppercase">Country App</span>
            </div>
            {/* End .col */}

            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-user-o pr-2"></i>
              <span className="project-label">Cliente</span>:{" "}
              <span className="ft-wt-600 uppercase">Proyecto Personal</span>
            </div>
            {/* End .col */}

            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-code pr-2"></i>
              <span className="project-label">Tecnologías </span>:{" "}
              <span className="ft-wt-600 uppercase">HTML, CSS, Javascript, React, Redux, Node, Express, PostgreSQL </span>
            </div>
            {/* End .col */}

            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-external-link pr-2"></i>
              <span className="project-label">Live </span>:{" "}
              <span className="ft-wt-600 uppercase">
                <a
                  href="https://frontend-countries-ashy.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  frontend-countries-ashy.vercel.app
                </a>
              </span>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </figcaption>
        {/* Project Details Ends */}

        {/*  Main Project Content Starts */}
        <Slider {...settings}>
          <div className="slide_item">
            <img src="img/projects/project-1.jpg" alt="slide 1" />
          </div>
          <div className="slide_item">
            <img src="img/projects/project-1-1.jpg" alt="slide 1" />
          </div>
          <div className="slide_item">
            <img src="img/projects/project-1-2.jpg" alt="slide 1" />
          </div>
        </Slider>
        {/* Main Project Content Ends */}
      </figure>
    </div>
    //  End .slideshow
  );
};

export default ModalOneContent;
