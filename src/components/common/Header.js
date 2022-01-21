import React from "react";
import "./Header.scss";

import tagline from "../../images/Tagline.png";
import money from "../../images/Yoda_Budget.png";

const Header = ({ amount, guage }) => {
  return (
    <div className="header-area">
      <div className="header__empty"></div>
      <div className="header__tagline">
        <img src={tagline} alt="tagline" />
      </div>
      <div className="header__dynamic-area">
        <div className="dynamic-area__money">
          <span className="money__image">
            <img src={money} alt="money" />
          </span>
          <span className="money__amount">
            $<p className="amount__figure">{amount}</p>
          </span>
        </div>
        <div className="dynamic-area__bar">
          <div className="bar__guage">
            <img src={guage} alt="guage" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
