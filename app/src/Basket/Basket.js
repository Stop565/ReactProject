import React, { useState } from 'react'
import './basket.css'


const Basket = () => {
    const [bas, setBas] = useState([])


    //setBas(localStorage.getItem("basket"))
    //console.log(JSON.parse(localStorage.getItem("basket")));


    return (
        <div className='container'>
            <div className='basket'>
                Кошик
            </div>
        </div>
    );
};



export default Basket;