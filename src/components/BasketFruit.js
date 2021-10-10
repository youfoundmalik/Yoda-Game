import React from 'react'
import './Fruit.scss'

const BasketFruit = ({image,alt,left,top}) => {
    return (
        <div className= "fruit-in-basket" style={{left: `${left}`, top: `${top}`}}>
            <img src={image} alt={alt}/>
        </div>
    )
}

export default BasketFruit
