import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useDrop } from "react-dnd";
import "./LevelOne.scss";
import "./LevelOneLandscape.scss";

import Header from "../../components/common/Header";
import Fruit from "../../components/level1/Fruit";
import Footer from "../../components/common/Footer";
import NextLevelCard from "../../components/common/NextLevelCard";

import stall from "../../images/Lvl1/Yoda_Stall.png";
import basket from "../../images/Lvl1/Basket.png";
import Banana from "../../images/Lvl1/Yoda_Fruit-Banana.png";
import Blueberry from "../../images/Lvl1/Yoda_Fruit-Blueberry.png";
import Cherry from "../../images/Lvl1/Yoda_Fruit-Cherry.png";
import Coconut from "../../images/Lvl1/Yoda_Fruit-Coconut.png";
import Pineapple from "../../images/Lvl1/Yoda_Fruit-Pineapple.png";
import Watermelon from "../../images/Lvl1/Yoda_Fruit-Watermelon.png";
import background from "../../images/Lvl1/Yoda_Background.png";

import guage0 from "../../images/Yoda_Gauge-0.png";
import guage25 from "../../images/Yoda_Gauge-25.png";
import guage50 from "../../images/Yoda_Gauge-50.png";
import guage75 from "../../images/Yoda_Gauge-75.png";
import guage100 from "../../images/Yoda_Gauge-100.png";
import ReactDOM from "react-dom";

const fruits = [
  {
    id: 1,
    fruit: "Blueberry",
    image: `${Blueberry}`,
    cal: "5",
    price: 2,
    left: "30%",
    top: "15%",
  },
  {
    id: 2,
    fruit: "Banana",
    image: `${Banana}`,
    cal: "7",
    price: 7,
    left: "10%",
    top: "25%",
  },
  {
    id: 3,
    fruit: "Coconut",
    image: `${Coconut}`,
    cal: "8",
    price: 10,
    left: "35%",
    top: "55%",
  },
  {
    id: 4,
    fruit: "Watermelon",
    image: `${Watermelon}`,
    cal: "4",
    price: 8,
    left: "50%",
    top: "55%",
  },
  {
    id: 5,
    fruit: "Cherry",
    image: `${Cherry}`,
    cal: "2",
    price: 3,
    left: "25%",
    top: "55%",
  },
  {
    id: 6,
    fruit: "Pineapple",
    image: `${Pineapple}`,
    cal: "12",
    price: 5,
    left: "60%",
    top: "55%",
  },
];

const LevelOne = () => {
  const [landscape, setLandscape] = useState(false);
  const [fruitList, setFruitsList] = useState(fruits);

  const [counter, setCounter] = useState(0);
  const [cash, setCash] = useState(25);
  const [calories, setCalories] = useState(0);

  const [{ isOver }, drop] = useDrop(() => {
    return {
      accept: "card",
      drop: (item) => {
        return addFruitToBasket(item);
      },
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    };
  }, [cash]);

  const addFruitToBasket = ({ id }) => {
    var draggedFruit = fruitList.find((v) => v.id === id);
    if (!draggedFruit) return;
    if (cash < draggedFruit.price) {
      return;
    }

    // setInBasket((inBasket) => {
    //   return [...inBasket, { ...draggedFruit }];
    // });

    setFruitsList((fruitList) => {
      return fruitList.filter((fruit) => id !== fruit.id);
    });

    setCash((prev) => {
      return parseInt(prev) - parseInt(draggedFruit.price);
    });

    setCounter((counter) => {
      return parseInt(counter) + 1;
    });

    setCalories((calories) => {
      return parseInt(calories) + parseInt(draggedFruit.cal);
    });
  };

  const resetGame = () => {
    // setInBasket([]);

    setCash(25);

    setCounter(0);

    setCalories(0);

    setFruitsList(fruits);
  };

  const landscapeHandler = () => {
    if (!landscape) {
      setLandscape(true);
    } else {
      setLandscape(false);
    }
  };

  let tmp;
  for (let i = fruitList.length - 1; i >= 0; i--) {
    tmp = fruitList[i].price;
    for (let j = 0; j < fruitList.length; j++) {
      const selected = fruitList[j].price;
      if (tmp > selected) {
        tmp = selected;
      }
    }
  }

  return (
    <>
      <Helmet>
        <title>Yoda Game - Level One</title>
        <meta name="description" content="The Yoda Game Level 1" />
      </Helmet>
      <div className={!landscape ? "landscape-deactive" : "landscape-active"}>
        {cash < tmp &&
          ReactDOM.createPortal(
            <NextLevelCard
              rotate={!landscape ? "" : "-90deg"}
              guagefill={
                calories >= 32
                  ? guage100
                  : calories >= 24
                  ? guage75
                  : calories >= 16
                  ? guage50
                  : calories >= 8
                  ? guage25
                  : guage0
              }
              level="Level 1"
              backimg={background}
              retryclicked={resetGame}
              path= "/level2"
            />,
            document.getElementById("overlay")
          )}
        <div className="level-one__container">
          <Header
            amount={cash}
            guage={
              calories >= 32
                ? guage100
                : calories >= 24
                ? guage75
                : calories >= 16
                ? guage50
                : calories >= 8
                ? guage25
                : guage0
            }
          />
          <div className="level-one__stall">
            <img src={stall} alt="stall" />
          </div>
          <div className="level-one__basket" ref={drop}>
            <img src={basket} alt={isOver ? "basket" : ""} className="basket" />
            <p
              className="basket__counter"
              style={{ opacity: counter === 0 ? "0" : "1" }}
            >
              {counter}
            </p>
            {/* {inBasket?.map(({ fruit, image, id, left, top }) => {
              return (
                <BasketFruit
                  id={id}
                  key={id}
                  alt={fruit}
                  image={image}
                  left={left}
                  top={top}
                />
              );
            })} */}
          </div>
          {fruitList?.map(({ fruit, image, cal, price, id }, index) => {
            return (
              <Fruit
                index={index}
                id={id}
                key={id}
                alt={fruit}
                classs={fruit}
                image={image}
                cal={cal}
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

export default LevelOne;
