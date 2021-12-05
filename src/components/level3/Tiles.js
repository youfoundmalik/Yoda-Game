import React from "react";
import { useDrag } from "react-dnd";
import "./style.scss";

export const Bridge1Tile = ({ image, percent, price, classs, alt, id, index }) => {
  const [{ isDragging }, drag] = useDrag({
    type: "Bridge1",
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

export const Bridge2Tile = ({ image, percent, price, classs, alt, id, index }) => {
  const [{ isDragging }, drag] = useDrag({
    type: "Bridge2",
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

export const Road1Tile = ({ image, percent, price, classs, alt, id, index }) => {
  const [{ isDragging }, drag] = useDrag({
    type: "Road1",
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

export const Road2Tile = ({ image, percent, price, classs, alt, id, index }) => {
  const [{ isDragging }, drag] = useDrag({
    type: "Road2",
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

export const Road3Tile = ({ image, percent, price, classs, alt, id, index }) => {
  const [{ isDragging }, drag] = useDrag({
    type: "Road3",
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