import React from 'react'
import './basket.css'
import BasketCard from '../BasketCard/BasketCard';
import { useEffect, useState } from "react";


const Basket = () => {
    const [bas, setBas] = useState([])

    useEffect(() => {
        setBas(JSON.parse(localStorage.getItem("basket")))
    }, []);

    return (
        <div className='containerBs'>
            <div className='basket'>
                {bas.map((el) => { return <BasketCard el={el} key={el.id}></BasketCard> })}
            </div>
        </div>
    );
};



export default Basket;