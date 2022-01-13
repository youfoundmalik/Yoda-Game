import "./LevelThree.scss";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Helmet } from "react-helmet";
import { useDrop } from "react-dnd";
import { useDispatch } from "react-redux";

import InputDetails from "../../components/details/InputDetails";
import { scoresActions } from "../../store/scores";

import Footer from "../../components/common/Footer";
import {
  Bridge1Tile,
  Bridge2Tile,
  Road1Tile,
  Road2Tile,
  Road3Tile,
} from "../../components/level3/Tiles";

import map1 from "../../images/Lvl3/Bridge1.png";
import map1Y from "../../images/Lvl3/Bridge1-Yellow.png";
import map1G from "../../images/Lvl3/Bridge1-Green.png";

import map2 from "../../images/Lvl3/Bridge2.png";
import map2Y from "../../images/Lvl3/Bridge2-Yellow.png";
import map2G from "../../images/Lvl3/Bridge2-Green.png";

import map3 from "../../images/Lvl3/Road1.png";
import map3Y from "../../images/Lvl3/Road1-Yellow.png";
import map3G from "../../images/Lvl3/Road1-Green.png";

import map4 from "../../images/Lvl3/Road2.png";
import map4Y from "../../images/Lvl3/Road2-Yellow.png";
import map4G from "../../images/Lvl3/Road2-Green.png";

import map5 from "../../images/Lvl3/Road3.png";
import map5Y from "../../images/Lvl3/Road3-Yellow.png";
import map5G from "../../images/Lvl3/Road3-Green.png";

import bridge1G from "../../images/Lvl3/icons/Bridge-Green.png";
import bridge1Y from "../../images/Lvl3/icons/Bridge-Yellow.png";
import bridge2G from "../../images/Lvl3/icons/Bridge-Green2.png";
import bridge2Y from "../../images/Lvl3/icons/Bridge-Yellow2.png";
import Road1G from "../../images/Lvl3/icons/Pavement-Green.png";
import Road1Y from "../../images/Lvl3/icons/Pavement-Yellow.png";
import Road2G from "../../images/Lvl3/icons/Pavement-Green2.png";
import Road2Y from "../../images/Lvl3/icons/Pavement-Yellow2.png";

import guage0 from "../../images/Yoda_Gauge-0.png";
import guage25 from "../../images/Yoda_Gauge-25.png";
import guage50 from "../../images/Yoda_Gauge-50.png";
import guage75 from "../../images/Yoda_Gauge-75.png";
import guage100 from "../../images/Yoda_Gauge-100.png";
import money from "../../images/Yoda_Budget.png";


const bridge1 = [
  {
    id: 1,
    tile: "yellow_tile",
    image: `${bridge1Y}`,
    percent: "14",
    price: 23000,
  },
  {
    id: 2,
    tile: "green_tile",
    image: `${bridge1G}`,
    percent: "32",
    price: 50000,
  },
];
const bridge2 = [
  {
    id: 1,
    tile: "yellow_tile",
    image: `${bridge2Y}`,
    percent: "19",
    price: 27000,
  },
  {
    id: 2,
    tile: "green_tile",
    image: `${bridge2G}`,
    percent: "22",
    price: 55000,
  },
];
const road1 = [
  {
    id: 1,
    tile: "yellow_tile",
    image: `${Road1Y}`,
    percent: "9",
    price: 13000,
  },
  {
    id: 2,
    tile: "green_tile",
    image: `${Road1G}`,
    percent: "15",
    price: 45000,
  },
];
const road2 = [
  {
    id: 1,
    tile: "yellow_tile",
    image: `${Road1Y}`,
    percent: "12",
    price: 17000,
  },
  {
    id: 2,
    tile: "green_tile",
    image: `${Road2G}`,
    percent: "17",
    price: 39000,
  },
];
const road3 = [
  {
    id: 1,
    tile: "yellow_tile",
    image: `${Road2Y}`,
    percent: "11",
    price: 5000,
  },
  {
    id: 2,
    tile: "green_tile",
    image: `${Road1G}`,
    percent: "14",
    price: 41000,
  },
];

const LevelThree = () => {
  const dispatch = useDispatch()
  const [landscape, setLandscape] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const [bridgeOne, setBridgeOne] = useState(bridge1);
  const [inBridge1, setInBridge1] = useState([]);

  const [bridgeTwo, setBridgeTwo] = useState(bridge2);
  const [inBridge2, setInBridge2] = useState([]);

  const [roadOne, setRoadOne] = useState(road1);
  const [inRoad1, setInRoad1] = useState([]);

  const [roadTwo, setRoadTwo] = useState(road2);
  const [inRoad2, setInRoad2] = useState([]);

  const [roadThree, setRoadThree] = useState(road3);
  const [inRoad3, setInRoad3] = useState([]);

  const [cash, setCash] = useState(125000);
  const [percentage, setPercentage] = useState(0);

  //// drag and drop action .... drop area specification
  const [{ isOver1 }, drop1] = useDrop(() => {
    return {
      accept: "Bridge1",
      drop: (item) => {
        return addTileToBridge1(item);
      },
      collect: (monitor) => ({
        isOver1: !!monitor.isOver(),
      }),
    };
  }, [cash]);
  const [{ isOver2 }, drop2] = useDrop(() => {
    return {
      accept: "Bridge2",
      drop: (item) => {
        return addTileToBridge2(item);
      },
      collect: (monitor) => ({
        isOver2: !!monitor.isOver(),
      }),
    };
  }, [cash]);
  const [{ isOver3 }, drop3] = useDrop(() => {
    return {
      accept: "Road1",
      drop: (item) => {
        return addTileToRoad1(item);
      },
      collect: (monitor) => ({
        isOver3: !!monitor.isOver(),
      }),
    };
  }, [cash]);
  const [{ isOver4 }, drop4] = useDrop(() => {
    return {
      accept: "Road2",
      drop: (item) => {
        return addTileToRoad2(item);
      },
      collect: (monitor) => ({
        isOver4: !!monitor.isOver(),
      }),
    };
  }, [cash]);
  const [{ isOver5 }, drop5] = useDrop(() => {
    return {
      accept: "Road3",
      drop: (item) => {
        return addTileToRoad3(item);
      },
      collect: (monitor) => ({
        isOver5: !!monitor.isOver(),
      }),
    };
  }, [cash]);

  ///// added tile checker
  const addTileToBridge1 = ({ id }) => {
    var draggedTile = bridge1.find((v) => v.id === id);
    if (!draggedTile) return;
    if (cash < draggedTile.price) {
      return;
    }

    if (bridgeOne.length >= 2) {
      setInBridge1((inBridge) => {
        return [...inBridge, { ...draggedTile }];
      });
      setBridgeOne((bridge1) => {
        return bridge1.filter((tile) => id !== tile.id);
      });

      setCash((prev) => {
        return parseInt(prev) - parseInt(draggedTile.price);
      });

      setPercentage((percentage) => {
        return parseInt(percentage) + parseInt(draggedTile.percent);
      });

      dispatch(scoresActions.calculateScore(draggedTile.percent))
    }
  };
  const addTileToBridge2 = ({ id }) => {
    var draggedTile = bridge2.find((v) => v.id === id);
    if (!draggedTile) return;
    if (cash < draggedTile.price) {
      return;
    }

    if (bridgeTwo.length >= 2) {
      setInBridge2((inBridge) => {
        return [...inBridge, { ...draggedTile }];
      });
      setBridgeTwo((bridge2) => {
        return bridge2.filter((tile) => id !== tile.id);
      });

      setCash((prev) => {
        return parseInt(prev) - parseInt(draggedTile.price);
      });

      setPercentage((percentage) => {
        return parseInt(percentage) + parseInt(draggedTile.percent);
      });

      dispatch(scoresActions.calculateScore(draggedTile.percent))
    }
  };
  const addTileToRoad1 = ({ id }) => {
    var draggedTile = road1.find((v) => v.id === id);
    if (!draggedTile) return;
    if (cash < draggedTile.price) {
      return;
    }

    if (roadOne.length >= 2) {
      setInRoad1((inRoad) => {
        return [...inRoad, { ...draggedTile }];
      });
      setRoadOne((road1) => {
        return road1.filter((tile) => id !== tile.id);
      });

      setCash((prev) => {
        return parseInt(prev) - parseInt(draggedTile.price);
      });

      setPercentage((percentage) => {
        return parseInt(percentage) + parseInt(draggedTile.percent);
      });

      dispatch(scoresActions.calculateScore(draggedTile.percent))
    }
  };
  const addTileToRoad2 = ({ id }) => {
    var draggedTile = road2.find((v) => v.id === id);
    if (!draggedTile) return;
    if (cash < draggedTile.price) {
      return;
    }

    if (roadTwo.length >= 2) {
      setInRoad2((inRoad) => {
        return [...inRoad, { ...draggedTile }];
      });
      setRoadTwo((road2) => {
        return road2.filter((tile) => id !== tile.id);
      });

      setCash((prev) => {
        return parseInt(prev) - parseInt(draggedTile.price);
      });

      setPercentage((percentage) => {
        return parseInt(percentage) + parseInt(draggedTile.percent);
      });

      dispatch(scoresActions.calculateScore(draggedTile.percent))
    }
  };
  const addTileToRoad3 = ({ id }) => {
    var draggedTile = road3.find((v) => v.id === id);
    if (!draggedTile) return;
    if (cash < draggedTile.price) {
      return;
    }

    if (roadThree.length >= 2) {
      setInRoad3((inRoad) => {
        return [...inRoad, { ...draggedTile }];
      });
      setRoadThree((road3) => {
        return road3.filter((tile) => id !== tile.id);
      });

      setCash((prev) => {
        return parseInt(prev) - parseInt(draggedTile.price);
      });

      setPercentage((percentage) => {
        return parseInt(percentage) + parseInt(draggedTile.percent);
      });

      dispatch(scoresActions.calculateScore(draggedTile.percent))
    }
  };

  /// Game over check
  useEffect(() => {
    if (
      bridgeOne.length < 2 &&
      bridgeTwo.length < 2 &&
      roadOne.length < 2 &&
      roadTwo.length < 2 &&
      roadThree.length < 2
    ) {
      setGameOver(true);
    }
  }, [bridgeOne, bridgeTwo, roadOne, roadTwo, roadThree]);

  const resetGame = () => {
    dispatch(scoresActions.resetGame())
    setCash(125000);
    setPercentage(0);
    setGameOver(false);

    setBridgeOne(bridge1);
    setInBridge1([]);

    setBridgeTwo(bridge2);
    setInBridge2([]);

    setRoadOne(road1);
    setInRoad1([]);

    setRoadTwo(road2);
    setInRoad2([]);

    setRoadThree(road3);
    setInRoad3([]);
  };

  const landscapeHandler = () => {
    if (!landscape) {
      setLandscape(true);
    } else {
      setLandscape(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Yoda Game - Level Two</title>
        <meta name="description" content="The Yoda Game Level 2" />
      </Helmet>
      <div className={!landscape ? "landscape-deactive" : "landscape-active"}>
        {gameOver &&
          ReactDOM.createPortal(
            <InputDetails rotate={!landscape ? "" : "-90deg"} />,
            document.getElementById("overlay")
          )}
        <div className="level-three__container">
          <div className="header-area">
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
                    percentage >= 80
                      ? guage100
                      : percentage >= 75
                      ? guage75
                      : percentage >= 50
                      ? guage50
                      : percentage >= 25
                      ? guage25
                      : guage0
                  }
                  alt="guage"
                />
              </div>
            </div>
          </div>
          <div className="level-three__map bridge1" ref={drop1}>
            <div className="map_items">
              <img
                src={
                  inBridge1[0]?.id === 1
                    ? map1Y
                    : inBridge1[0]?.id === 2
                    ? map1G
                    : map1
                }
                alt={isOver1 ? "map" : ""}
                className="map"
              />
              {bridgeOne?.map(({ tile, image, percent, price, id }, index) => {
                return (
                  <Bridge1Tile
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
            </div>
          </div>
          <div className="level-three__map bridge2" ref={drop2}>
            <div className="map_items">
              <img
                src={
                  inBridge2[0]?.id === 1
                    ? map2Y
                    : inBridge2[0]?.id === 2
                    ? map2G
                    : map2
                }
                alt={isOver2 ? "map" : ""}
                className="map"
              />
              {bridgeTwo?.map(({ tile, image, percent, price, id }, index) => {
                return (
                  <Bridge2Tile
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
            </div>
          </div>
          <div className="level-three__map road1" ref={drop3}>
            <div className="map_items">
              <img
                src={
                  inRoad1[0]?.id === 1
                    ? map3Y
                    : inRoad1[0]?.id === 2
                    ? map3G
                    : map3
                }
                alt={isOver3 ? "map" : ""}
                className="map"
              />
              {roadOne?.map(({ tile, image, percent, price, id }, index) => {
                return (
                  <Road1Tile
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
            </div>
          </div>
          <div className="level-three__map road2" ref={drop4}>
            <div className="map_items">
              <img
                src={
                  inRoad2[0]?.id === 1
                    ? map4Y
                    : inRoad2[0]?.id === 2
                    ? map4G
                    : map4
                }
                alt={isOver4 ? "map" : ""}
                className="map"
              />
              {roadTwo?.map(({ tile, image, percent, price, id }, index) => {
                return (
                  <Road2Tile
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
            </div>
          </div>
          <div className="level-three__map road3" ref={drop5}>
            <div className="map_items">
              <img
                src={
                  inRoad3[0]?.id === 1
                    ? map5Y
                    : inRoad3[0]?.id === 2
                    ? map5G
                    : map5
                }
                alt={isOver5 ? "map" : ""}
                className="map"
              />
              {roadThree?.map(({ tile, image, percent, price, id }, index) => {
                return (
                  <Road3Tile
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
            </div>
          </div>
          <Footer reset={resetGame} flip={landscapeHandler} />
        </div>
      </div>
    </>
  );
};

export default LevelThree;
