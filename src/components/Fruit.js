import React from "react";
import { useDrag } from "react-dnd";
import "./Fruit.scss";

const Fruit = ({ image, cal, price, classs, alt, id, index }) => {
  const [{ isDragging }, drag] = useDrag({
    type: "card",
    item: { id, index },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });
  return (
    <div
      id={id}
      className={`level-one__fruit ${classs}`}
      style={{ opacity: isDragging ? ".3" : "" }}
      ref={drag}
    >
      <img src={image} alt={alt} />
      <div className="fruit__calories">
        <span className="calories__number">{cal}</span>
        <span className="calories__text">cal</span>
      </div>
      <div className="fruit__price">
        <span className="price__symbol">$</span>
        <span className="price__number">{price}</span>
      </div>
    </div>
  );
};

export default Fruit;
