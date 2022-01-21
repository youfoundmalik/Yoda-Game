import React, { useState, useMemo } from "react";
import "./InputDetails.scss";
import { Link, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "react-country-dropdown/dist/index.css";
import countryList from "react-select-country-list";
import Select from "react-select";
import { scoresActions } from "../../store/scores";

import AA from "../../images/AgileAssests.png";

const InputDetails = () => {
  const dispatch = useDispatch();
  const playerscore = useSelector((state) => state.scores.playerScore);
  const [subscribe, setSubscribe] = useState(false);
  const [country, setCountry] = useState("");
  const [countryName, setCountryName] = useState("");
  const options = useMemo(() => countryList().getData(), []);
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [showScore, setShowScore] = useState(false);

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

  //// action after form submit
  const submitFormHandler = async (e) => {
    e.preventDefault();

    /// compile player data
    const playerDetails = {
      id: Math.random(),
      player: `${fName} ${lName}`,
      email: email,
      country: countryName,
      signUp: subscribe,
      score: playerscore,
    };
    /// send data to local storage
    dispatch(scoresActions.getPlayerScore([playerDetails]));

    /// send data to database
    fetch("https://yodagame-test-default-rtdb.firebaseio.com/highscores.json", {
      method: "POST",
      body: JSON.stringify(playerDetails),
      headers: {
        "Content-Type": "application/json",
      },
    });

    setShowScore(true);
  };

  return (
    <div className="overlay">
      <div className="details_container">
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
                required
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
            <Link className="link" to="#">
              Terms and Conditions
            </Link>
            . We do not share your information. See our{" "}
            <Link className="link" to="#">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
        <div className="rightside">
          <div className="image">
            <img src={AA} alt="AgileAssests" />
          </div>
        </div>
      </div>
      {showScore && <Redirect to="/scoreboard" />}
    </div>
  );
};

export default InputDetails;
