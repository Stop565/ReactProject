import React from 'react';
import './basket.css';
import './basketcard.css'
import { removeItemBasket } from '../func';

import { useEffect, useState } from "react";


const Basket = () => {
    const [bas, setBas] = useState([]);
    useEffect(() => {
        setBas(JSON.parse(localStorage.getItem("basket")))
    }, []);


    return (
        <div className='containerBs'>
            <div className='basket'>
                {bas.map((el) => {
                    return (
                        <div className='basketcard'>
                            <span><img src={el.images[0]}></img></span>
                            <p>{el.price} грн.</p>
                            <p className='removebasket'>
                                <h1>{el.title}</h1>
                                <h2 >
                                    <button onClick={() => {
                                        removeItemBasket(el);
                                        setBas(JSON.parse(localStorage.getItem("basket")))
                                    }}>
                                        Видалити з кошика
                                    </button>
                                </h2>
                            </p>
                        </div >

                    )
                })}
            </div>
        </div>
    );
};



export default Basket;