import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Helmet } from "react-helmet";
import { useDrop } from "react-dnd";
import "./LevelTwo.scss";
import "./LevelTwoLandscape.scss";

import Header from "../../components/Header";
import Tile from "../../components/Tile";
import Footer from "../../components/Footer";
import BasketFruit from "../../components/BasketFruit";
import NextLevelCard from "../../components/NextLevelCard";

import stall from "../../images/Lvl1/Yoda_Stall.png";
import basket from "../../images/Lvl2/Map.png";
import Pavement from "../../images/Lvl2/Yoda_Icon-Pavement.png";
import Pavement2 from "../../images/Lvl2/Yoda_Icon-Pavement2.png";
import Bridge from "../../images/Lvl2/Yoda_Icon-Bridge.png";
import Bridge2 from "../../images/Lvl2/Yoda_Icon-Bridge2.png";
import Equipment from "../../images/Lvl2/Yoda_Icon-Equipment.png";
import Fleet from "../../images/Lvl2/Yoda_Icon-Fleet.png";
import background from "../../images/Lvl2/Yoda_Background.png";

import guage0 from "../../images/Yoda_Gauge-0.png";
import guage25 from "../../images/Yoda_Gauge-25.png";
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
  const [landscape, setLandscape] = useState(false);
  const [tileList, setTilesList] = useState(tiles);

  const [onBridge, setOnBridge] = useState([]);
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

    setOnBridge((onBridge) => {
      return [...onBridge, { ...draggedTile }];
    });

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
    setOnBridge([]);

    setCash(25000);

    setCounter(0);

    setPercentage(0);

    setTilesList(tiles);
  };

  const landscapeHandler = () => {
    if (!landscape) {
      setLandscape(true);
    } else {
      setLandscape(false);
    }
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
              rotate={!landscape ? "" : "90deg"}
              guagefill={
                percentage >= 32
                  ? guage100
                  : percentage >= 24
                  ? guage75
                  : percentage >= 16
                  ? guage50
                  : percentage >= 8
                  ? guage25
                  : guage0
              }
              level="Level 1"
              backimg={background}
              retryclicked={resetGame}
            />,
            document.getElementById("overlay")
          )}
        <div className="level-one__container">
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
                      percentage >= 32
                        ? guage100
                        : percentage >= 24
                        ? guage75
                        : percentage >= 16
                        ? guage50
                        : percentage >= 8
                        ? guage25
                        : guage0
                    }
                    alt="guage"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="level-one__basket" ref={drop}>
            <img src={basket} alt={isOver ? "basket" : ""} className="basket" />
            <p
              className="basket__counter"
              style={{ opacity: counter === 0 ? "0" : "1" }}
            >
              {counter}
            </p>
            {onBridge?.map(({ tile, image, id, left, top }) => {
              return (
                <BasketFruit
                  id={id}
                  key={id}
                  alt={tile}
                  image={image}
                  left={left}
                  top={top}
                />
              );
            })}
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
          <Footer reset={resetGame} flip={landscapeHandler} />
        </div>
      </div>
    </>
  );
};

export default LevelTwo;
