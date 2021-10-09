import React from 'react'
import './Fruit.scss'

const Fruit = ({image,cal,price,classs,alt}) => {
    return (
        <div className= {`level-one__fruit ${classs}`}>
            <img src={image} alt={alt}/>
            <div className="fruit__calories">
                <span className="calories__number">{cal}</span>
                <span className="calories__text">cal</span>
            </div>
            <div className="fruit__price">
                <span className="price__symbol">$</span>
                <span className="price__number">{price}</span>
            </div>
        </div>
    )
}

export default Fruit
