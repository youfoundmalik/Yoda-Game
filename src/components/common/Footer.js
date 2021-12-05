import React from "react";
import "./Footer.scss";

import retry from "../../images/sysIcon/Dark_Retry.png";
import sound from "../../images/sysIcon/Dark_SoundOff.png";
import fullscreen from "../../images/sysIcon/Dark_Fullscreen.png";

const Footer = ({ reset,flip }) => {
  return (
    <div className="footer-area">
      <div className="footer__retry-area">
        <div className="footer__retry" onClick={reset}>
          <div className="retry__image">
            <img src={retry} alt="Retry" />
          </div>
          <p>Try Again!</p>
        </div>
      </div>
      <div className="footer__others">
        <div className="footer__sound">
          <img src={sound} alt="Sound" />
        </div>
        <div className="footer__fullscreen">
          <img src={fullscreen} alt="Fullscreen" onClick={flip}/>
        </div>
        <div className="footer__fullscreenoff">
          <img src={fullscreen} alt="Fullscreen"/>
        </div>
      </div>
    </div>
  );
};

export default Footer;
