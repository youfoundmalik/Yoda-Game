import React from "react";
import "./Scoresheet.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { scoresActions } from "../../store/scores";

import retry from "../../images/sysIcon/Dark_Retry.png";
import sound from "../../images/sysIcon/Dark_SoundOff.png";
import fullscreen from "../../images/sysIcon/Dark_Fullscreen.png";

const Slice = ({ id, rank, player, country, score }) => {
  return (
    <div className="body_slice table" id={id}>
      <p className="details rightborder">{rank}</p>
      <p className="details rightborder">{player}</p>
      <p className="details rightborder">{country}</p>
      <p className="details">{score}</p>
    </div>
  );
};

const Scoresheet = () => {
  const dispatch = useDispatch();
  const currentPlayer = useSelector((state) => state.scores.currentPlayer);
  const isLoading = useSelector((state) => state.api.isLoading);
  const error = useSelector((state) => state.api.error);
  const scores = useSelector((state) => state.scores.topPlayers);

  const addedscore = [];

  if (currentPlayer.length === 0) {
    addedscore.push(...scores);
  } else {
    addedscore.push(...scores, { ...currentPlayer[0] });
  }
  const highscores = addedscore
    .sort((a, b) => {
      return b.score - a.score;
    })
    .slice(0, 15);

  const resetHandler = () => {
    dispatch(scoresActions.resetGame());
  };
  return (
    <div className="scoresheet_container">
      <div className="scoresheet_overlay"></div>
      <div className="scoresheet_content">
        <div className="scoresheet_table">
          <div className="table_head table">
            <p className="title rightborder">rank</p>
            <p className="title  rightborder">player</p>
            <p className="title  rightborder">country</p>
            <p className="title">score</p>
          </div>
          <div
            className={
              currentPlayer.length >= 1 ? "table_body1" : "table_body2"
            }
          >
            {currentPlayer.length >= 1 && (
              <Slice
                id={currentPlayer[0]?.id}
                rank="="
                player={window.screen.width > 450 ? currentPlayer[0]?.player?.slice(0, 24) : currentPlayer[0]?.player?.slice(0, 18)}
                country={currentPlayer[0]?.country?.slice(0, 15)}
                score={currentPlayer[0]?.score}
              />
            )}
            {isLoading && <p>Loading Scoreboard</p>}
            {!isLoading && error && <p>{error}</p>}
            {!isLoading && !error && highscores.length < 1 && (
              <p>Scoreboard is empty</p>
            )}
            {!isLoading &&
              !error &&
              highscores.length >= 1 &&
              highscores?.map(({ id, player, country, score }, index) => {
                return (
                  <Slice
                    key={id}
                    id={id}
                    rank={index + 1}
                    player={window.screen.width > 450 ? player.slice(0, 24) : player.slice(0, 12)+'...'}
                    country={country.slice(0, 15)}
                    score={score}
                  />
                );
              })}
          </div>
        </div>
      </div>
      <div className="footer-area">
        <div className="footer__retry-area">
          <div className="footer__retry">
            <Link to="/level3" onClick={resetHandler}>
              <div className="retry__image">
                <img src={retry} alt="Retry" />
              </div>
              <p>Try Again!</p>
            </Link>
          </div>
        </div>
        <div className="footer__others">
          <div className="footer__sound">
            <img src={sound} alt="Sound" />
          </div>
          <div className="footer__fullscreen">
            <img src={fullscreen} alt="Fullscreen" />
          </div>
          <div className="footer__fullscreenoff">
            <img src={fullscreen} alt="Fullscreen" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scoresheet;
