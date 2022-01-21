import React from "react";
import { useDrag } from "react-dnd";
import "./Tile.scss";

const Tile = ({ image, percent, price, classs, alt, id, index }) => {
  const [{ isDragging }, drag] = useDrag({
    type: "tile",
    item: { id, index },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });
  return (
    <div
      id={id}
      className={`level-two__tile ${classs}`}
      style={{ opacity: isDragging ? "0" : "" }}
      ref={drag}
    >
      <div className="level-two__tile_img"><img src={image} alt={alt} /></div>
      <div className="level-two__tile_text">
        <div className="tile__percentage">
          <span className="percentage__number">{percent}</span>
          <span className="percentage__text">%</span>
        </div>
        <div className="tile__price">
          <span className="price__symbol">$</span>
          <span className="price__number">{price}</span>
        </div>
      </div>
    </div>
  );
};

export default Tile;
