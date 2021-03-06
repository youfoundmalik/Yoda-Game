import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Helmet } from "react-helmet";
import { useDrop } from "react-dnd";
import { useSelector } from "react-redux";
import "./LevelTwo.scss";
import "./LevelTwoLandscape.scss";

import Tile from "../../components/level2/Tile";
import Footer from "../../components/common/Footer";
import NextLevelCard from "../../components/common/NextLevelCard";

import map from "../../images/Lvl2/Map.png";
import Pavement from "../../images/Lvl2/Yoda_Icon-Pavement.png";
import Pavement2 from "../../images/Lvl2/Yoda_Icon-Pavement2.png";
import Bridge from "../../images/Lvl2/Yoda_Icon-Bridge.png";
import Bridge2 from "../../images/Lvl2/Yoda_Icon-Bridge2.png";
import Equipment from "../../images/Lvl2/Yoda_Icon-Equipment.png";
import Fleet from "../../images/Lvl2/Yoda_Icon-Fleet.png";
import background from "../../images/Lvl2/Yoda_Background.png";

import guage50 from "../../images/Yoda_Gauge-50.png";
import guage75 from "../../images/Yoda_Gauge-75.png";
import guage100 from "../../images/Yoda_Gauge-100.png";
import money from "../../images/Yoda_Budget.png";

const tiles = [
  {
    id: 1,
    tile: "Pavement",
    image: `${Pavement}`,
    percent: "12",
    price: 3000,
    left: "30%",
    top: "15%",
  },
  {
    id: 2,
    tile: "Pavement2",
    image: `${Pavement2}`,
    percent: "14",
    price: 7000,
    left: "10%",
    top: "25%",
  },
  {
    id: 3,
    tile: "Bridge",
    image: `${Bridge}`,
    percent: "23",
    price: 15000,
    left: "35%",
    top: "55%",
  },
  {
    id: 4,
    tile: "Bridge2",
    image: `${Bridge2}`,
    percent: "35",
    price: 20000,
    left: "50%",
    top: "55%",
  },
  {
    id: 5,
    tile: "Equipment",
    image: `${Equipment}`,
    percent: "2",
    price: 500,
    left: "25%",
    top: "55%",
  },
  {
    id: 6,
    tile: "Fleet",
    image: `${Fleet}`,
    percent: "5",
    price: 2000,
    left: "60%",
    top: "55%",
  },
];

const LevelTwo = () => {
  const landscape = useSelector((state) => state.footerBtn.landscape);
  const [tileList, setTilesList] = useState(tiles);

  const [counter, setCounter] = useState(0);
  const [cash, setCash] = useState(25000);
  const [percentage, setPercentage] = useState(0);

  const [{ isOver }, drop] = useDrop(() => {
    return {
      accept: "tile",
      drop: (item) => {
        return addTileToBridge(item);
      },
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    };
  }, [cash]);

  const addTileToBridge = ({ id }) => {
    var draggedTile = tileList.find((v) => v.id === id);
    if (!draggedTile) return;
    if (cash < draggedTile.price) {
      return;
    }

    setTilesList((tileList) => {
      return tileList.filter((tile) => id !== tile.id);
    });

    setCash((prev) => {
      return parseInt(prev) - parseInt(draggedTile.price);
    });

    setCounter((counter) => {
      return parseInt(counter) + 1;
    });

    setPercentage((percentage) => {
      return parseInt(percentage) + parseInt(draggedTile.percent);
    });
  };

  const resetGame = () => {
    setCash(25000);

    setCounter(0);

    setPercentage(0);

    setTilesList(tiles);
  };

  let tmp;
  for (let i = tileList.length - 1; i >= 0; i--) {
    tmp = tileList[i].price;
    for (let j = 0; j < tileList.length; j++) {
      const selected = tileList[j].price;
      if (tmp > selected) {
        tmp = selected;
      }
    }
  }

  return (
    <>
      <Helmet>
        <title>Yoda Game - Level Two</title>
        <meta name="description" content="The Yoda Game Level 2" />
      </Helmet>
      <div className={!landscape ? "landscape-deactive" : "landscape-active"}>
        {cash < tmp &&
          ReactDOM.createPortal(
            <NextLevelCard
              rotate={!landscape ? "" : "-90deg"}
              guagefill={
                percentage >= 49
                  ? guage100
                  : percentage >= 25
                  ? guage75
                  : guage50
              }
              level="Level 2"
              backimg={background}
              retryclicked={resetGame}
              path="/level3"
            />,
            document.getElementById("overlay")
          )}
        <div className="level-two__container">
          <div className="header-area">
            <div className="header__empty"></div>
            <div className="header__dynamic-area">
              <div className="dynamic-area__money">
                <span className="money__image">
                  <img src={money} alt="money" />
                </span>
                <span className="money__amount">
                  $<p className="amount__figure">{cash}</p>
                </span>
              </div>
              <div className="dynamic-area__bar">
                <div className="bar__guage">
                  <img
                    src={
                      percentage >= 49
                        ? guage100
                        : percentage >= 25
                        ? guage75
                        : guage50
                    }
                    alt="guage"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="level-two__map" ref={drop}>
            <img src={map} alt={isOver ? "map" : ""} className="map" />
            <p
              className="map__counter"
              style={{ opacity: counter === 0 ? "0" : "1" }}
            >
              {counter}
            </p>
          </div>
          {tileList?.map(({ tile, image, percent, price, id }, index) => {
            return (
              <Tile
                index={index}
                id={id}
                key={id}
                alt={tile}
                classs={tile}
                image={image}
                percent={percent}
                price={price}
              />
            );
          })}
          <Footer reset={resetGame} />
        </div>
      </div>
    </>
  );
};

export default LevelTwo;
