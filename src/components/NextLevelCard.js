import React from "react";
import "./NextLevel.scss";

import nextlevel from "../images/Yoda_Next-Level.png";
import retry from "../images/sysIcon/Dark_Retry.png";
import { Link } from "react-router-dom";

const NextLevelCard = ({ level, guagefill, backimg, retryclicked, rotate, path }) => {
  return (
    <div className="overlay">
      <div
        className="card-container__"
        style={{
          backgroundImage: `url(${backimg})`,
          transform: `rotate(${rotate})`,
        }}
      >
        <div className="congrats">
          <h1>Congratulations</h1>
          <img src={guagefill} alt="score" />
        </div>
        <div className="next">
          <p>You have completed {level}</p>
          <Link to={path}><img src={nextlevel} alt="next" /></Link>
        </div>
        <div className="retry" onClick={retryclicked}>
          <img src={retry} alt="retry" />
          <p>Replay</p>
        </div>
      </div>
    </div>
  );
};

export default NextLevelCard;
