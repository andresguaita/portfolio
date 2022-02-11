import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import DirectionReveal from 'direction-reveal';
import ModalOneContent from "./modal/ModalOneContent";
import ModalTwoContent from "./modal/ModalTwoContent";
import ModalThreeContent from "./modal/ModalThreeContent";
import ModalFourContent from "./modal/ModalFourContent";
import ModalFiveContent from "./modal/ModalFiveContent";
import ModalSixContent from "./modal/ModalSixContent";
import ModalSevenContent from "./modal/ModalSevenContent";
import ModalEightContent from "./modal/ModalEightContent";
import ModalNineContent from "./modal/ModalNineContent";

const PortfolioLight = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
 

  function toggleModalOne() {
    setIsOpen(!isOpen);
  }
  function toggleModalTwo() {
    setIsOpen2(!isOpen2);
  }
  function toggleModalThree() {
    setIsOpen3(!isOpen3);
  }
  
  
 


  useEffect(() => {
  DirectionReveal();
 
// Init with all options at default setting
 DirectionReveal({
  selector: '.direction-reveal',
  itemSelector: '.direction-reveal__card',
  animationName: 'swing',
  animationPostfixEnter: 'enter',
  animationPostfixLeave: 'leave',
  enableTouch: true,
  touchThreshold: 250
});
  }, []);

  return (
    <ul className="row grid">
      <li className="direction-reveal">
        <figure className="direction-reveal__card" onClick={toggleModalOne}>
          <img src="img/projects/project-1.jpg" alt="Portolio" />
          <div className=" direction-reveal__overlay direction-reveal__anim--enter">
            <span className="direction-reveal__title">Image Project</span>
          </div>
        </figure>

        {/* <!-- Portfolio Item Starts --> */}
        <Modal
          isOpen={isOpen}
          onRequestClose={toggleModalOne}
          contentLabel="My dialog"
          className="custom-modal dark green"
          overlayClassName="custom-overlay"
          closeTimeoutMS={500}
        >
          <div>
            <button className="close-modal" onClick={toggleModalOne}>
              <img src="/img/cancel.svg" alt="close icon" />
            </button>
            {/* End close icon */}

            <div className="box_inner portfolio">
              <ModalOneContent />
            </div>
          </div>
        </Modal>
        {/* End  ModalOneContent */}
      </li>
      {/* <!-- Portfolio Item Ends --> */}

      {/* <!-- Portfolio Item Starts --> */}
      <li className="direction-reveal">
        <figure className="direction-reveal__card" onClick={toggleModalTwo}>
          <img src="img/projects/project-2.jpg" alt="Portolio" />
          <div className=" direction-reveal__overlay direction-reveal__anim--enter">
            <span className="direction-reveal__title">Youtube Project</span>
          </div>
        </figure>

        {/* Start ModalTwoContent */}
        <Modal
          isOpen={isOpen2}
          onRequestClose={toggleModalTwo}
          contentLabel="My dialog"
          className="custom-modal dark green"
          overlayClassName="custom-overlay"
          closeTimeoutMS={500}
        >
          <div>
            <button className="close-modal" onClick={toggleModalTwo}>
              <img src="/img/cancel.svg" alt="close icon" />
            </button>
            {/* End close icon */}

            <div className="box_inner portfolio">
              <ModalTwoContent />
            </div>
          </div>
        </Modal>
        {/* End  ModalTwoContent */}
      </li>
      {/* <!-- Portfolio Item Ends --> */}

      {/* <!-- Portfolio Item Starts --> */}
      <li className="direction-reveal">
        <figure className="direction-reveal__card" onClick={toggleModalThree}>
          <img src="img/projects/project-3.jpg" alt="Portolio" />
          <div className=" direction-reveal__overlay direction-reveal__anim--enter">
            <span className="direction-reveal__title">Slider Project</span>
          </div>
        </figure>

        {/* Start ModalThreeContent */}
        <Modal
          isOpen={isOpen3}
          onRequestClose={toggleModalThree}
          contentLabel="My dialog"
          className="custom-modal dark green"
          overlayClassName="custom-overlay"
          closeTimeoutMS={500}
        >
          <div>
            <button className="close-modal" onClick={toggleModalThree}>
              <img src="/img/cancel.svg" alt="close icon" />
            </button>
            {/* End close icon */}

            <div className="box_inner portfolio">
              <ModalThreeContent />
            </div>
          </div>
        </Modal>
        {/* End  ModalThreeContent */}
      </li>
      {/* <!-- Portfolio Item Ends --> */}

    </ul>
  );
};

export default PortfolioLight;
