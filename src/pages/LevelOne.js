import React from 'react'
import { Helmet } from 'react-helmet'
import Header from '../components/Header'
import './LevelOne.scss'

import stall from '../images/Lvl1/Yoda_Stall.png'
import basket from '../images/Lvl1/Basket.png'
import Fruit from '../components/Fruit'

import Banana from '../images/Lvl1/Yoda_Fruit-Banana.png'
import Blueberry from '../images/Lvl1/Yoda_Fruit-Blueberry.png'
import Cherry from '../images/Lvl1/Yoda_Fruit-Cherry.png'
import Coconut from '../images/Lvl1/Yoda_Fruit-Coconut.png'
import Pineapple from '../images/Lvl1/Yoda_Fruit-Pineapple.png'
import Watermelon from '../images/Lvl1/Yoda_Fruit-Watermelon.png'
import Footer from '../components/Footer'


const LevelOne = () => {

    const fruits = [
        {fruit: 'Banana', image: `${Banana}`, cal: '7', price: '7'},
        {fruit: 'Blueberry', image: `${Blueberry}`, cal: '5', price: '2'},
        {fruit: 'Cherry', image: `${Cherry}`, cal: '2', price: '3'},
        {fruit: 'Coconut', image: `${Coconut}`, cal: '8', price: '10'},
        {fruit: 'Pineapple', image: `${Pineapple}`, cal: '12', price: '5'},
        {fruit: 'Watermelon', image: `${Watermelon}`, cal: '4', price: '8'}
    ]

    return (
        <>
            <Helmet>
                <title>Level One</title>
            </Helmet>
            <div className="level-one__container">
                <Header
                    amount='25'
                />
                <div className="level-one__stall">
                    <img src={stall} alt="stall image"/>
                </div>
                <div className="level-one__basket">
                    <img src={basket} alt="basket image"/>
                </div>
                {
                    fruits.map(({fruit,image,cal,price})=>{
                        return(
                            <Fruit
                                key={fruit}
                                alt={fruit}
                                classs={fruit}
                                image={image}
                                cal={cal}
                                price={price}
                            />
                        )
                    })
                }
                <Footer/>
            </div>
            
        </>
    )
}

export default LevelOne
