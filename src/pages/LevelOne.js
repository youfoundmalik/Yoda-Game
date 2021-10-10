import React, { useState } from 'react'
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
import { useDrop } from 'react-dnd'
import BasketFruit from '../components/BasketFruit'

import guage0 from '../images/Yoda_Gauge-0.png'
import guage25 from '../images/Yoda_Gauge-25.png'
import guage50 from '../images/Yoda_Gauge-50.png'
import guage100 from '../images/Yoda_Gauge-100.png'



const fruits = [
    {id: '1', fruit: 'Banana', image: `${Banana}`, cal: '7', price: '7', left: '10%', top: '25%'},
    {id: '2', fruit: 'Blueberry', image: `${Blueberry}`, cal: '5', price: '2', left: '30%', top: '15%'},
    {id: '3', fruit: 'Cherry', image: `${Cherry}`, cal: '2', price: '3', left: '25%', top: '55%'},
    {id: '4', fruit: 'Coconut', image: `${Coconut}`, cal: '8', price: '10', left: '35%', top: '55%'},
    {id: '5', fruit: 'Pineapple', image: `${Pineapple}`, cal: '12', price: '5', left: '60%', top: '55%'},
    {id: '6', fruit: 'Watermelon', image: `${Watermelon}`, cal: '4', price: '8', left: '50%', top: '55%'}
]

const LevelOne = () => {

    const [fruitList, setFruitsList] = useState(fruits)

    const [inBasket, setInBasket] = useState([]);
    const [counter, setCounter] = useState(0);
    const [cash, setCash] = useState(25);
    const [calories, setCalories] = useState(0)

    const [{isOver}, drop] = useDrop(()=>({
        accept: "card",
        drop: (item) => addFruitToBasket(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    }))

    const addFruitToBasket = (id) => {

        const draggedFruit = fruitList.filter((fruit) => id === fruit.id)

        setInBasket((inBasket)=>{
            return [...inBasket, {...draggedFruit[0]}]
        })

        setFruitsList((fruitList)=>{
            return fruitList.filter((fruit) => id !== fruit.id)
        })

        setCash((cash)=>{
            return parseInt(cash) - parseInt(draggedFruit[0].price)
        })

        setCounter((counter)=>{
            return parseInt(counter) + 1
        })
        
        setCalories((calories)=>{
            return parseInt(calories) + parseInt(draggedFruit[0].cal)
        })

    }

    const resetGame = () => {

        setInBasket([])

        setCash(25)

        setCounter(0)

        setCalories(0)

        setFruitsList(fruits)
    }

    return (
        <>
            <Helmet>
                <title>Level One</title>
            </Helmet>
            <div className="level-one__container">
                <Header
                    amount={cash}
                    guage={calories===0?guage0:guage100}
                />
                <div className="level-one__stall">
                    <img src={stall} alt="stall image"/>
                </div>
                <div className="level-one__basket" ref={drop}>
                    <img src={basket} alt="basket image" className="basket"/>
                    <p className="basket__counter" style={{opacity: counter === 0 ? '0' : '1'}}>{counter}</p>
                    {
                        inBasket?.map(({fruit,image,id,left,top})=>{
                            return(
                                <BasketFruit
                                    id={id}
                                    key={id}
                                    alt={fruit}
                                    image={image}
                                    left={left}
                                    top={top}
                                />
                            )
                        })
                    }
                </div>
                {
                    fruitList?.map(({fruit,image,cal,price,id})=>{
                        return(
                            <Fruit
                                id={id}
                                key={id}
                                alt={fruit}
                                classs={fruit}
                                image={image}
                                cal={cal}
                                price={price}
                            />
                        )
                    })
                }
                <Footer
                    reset={resetGame}
                />
            </div>
            
        </>
    )
}

export default LevelOne
