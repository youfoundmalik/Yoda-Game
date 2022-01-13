import React, { useState, useMemo } from "react";
import "./InputDetails.scss";
import "react-country-dropdown/dist/index.css";
import countryList from "react-select-country-list";
import Select from "react-select";

import AA from "../../images/AgileAssests.png";

const InputDetails = ({ rotate }) => {
  const [subscribe, setSubscribe] = useState(false);
  const [country, setCountry] = useState("");
  const [countryName, setCountryName] = useState("");
  const options = useMemo(() => countryList().getData(), []);
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");

  const countryHandler = (e) => {
    setCountry(e);
    setCountryName(e.label);
  };

  const fNameHandler = (e) => {
    setFName(e.target.value);
  };
  const lNameHandler = (e) => {
    setLName(e.target.value);
  };
  const emailmHandler = (e) => {
    setEmail(e.target.value);
  };
  const toggleHandler = () => {
    setSubscribe(!subscribe);
  };
  const submitFormHandler = (e) => {
    e.preventDefault();

    const playerDetails = {
      id: Math.random(),
      playerName: `${fName} ${lName}`,
      playerEmail: email,
      playerCountry: countryName,
      signUp: subscribe,
      playerScore: 12,
    };

    console.log(playerDetails);
  };

  return (
    <div className="overlay">
      <div
        className="details_container"
        style={{
          transform: `rotate(${rotate})`,
        }}
      >
        <div className="details">
          <div className="heading">
            <h1>Save your score</h1>
            <hr />
          </div>
          <form className="info" onSubmit={submitFormHandler}>
            <div className="input_Section">
              <label htmlFor="fname">first name</label>
              <input
                onChange={fNameHandler}
                id="fname"
                value={fName}
                type="text"
                required
              />
            </div>
            <div className="input_Section">
              <label htmlFor="lname">last name</label>
              <input
                onChange={lNameHandler}
                id="lname"
                value={lName}
                type="text"
              />
            </div>
            <div className="input_Section">
              <label htmlFor="email">email</label>
              <input
                onChange={emailmHandler}
                id="email"
                value={email}
                type="email"
              />
            </div>
            <div className="input_Section">
              <Select
                options={options}
                value={country}
                onChange={countryHandler}
              />
            </div>
            <div className="input_Section subscribe">
              <div
                className={`toggle ${subscribe ? "active" : "deactive"}`}
                onClick={toggleHandler}
              ></div>
              <span>Please keep me updated with news and events</span>
            </div>
            <button type="submit">Confirm</button>
          </form>
          <p className="terms">
            By confirming, you agree to our{" "}
            <a className="link" href="#">
              Terms and Conditions
            </a>
            . We do not share your information. See our{" "}
            <a className="link" href="#">
              Privacy Policy
            </a>
            .
          </p>
        </div>
        <div className="rightside">
          <div className="image">
            <img src={AA} alt="AgileAssests" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputDetails;
