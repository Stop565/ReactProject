import React from 'react';
import { Link } from 'react-router-dom';
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
                        <div className='basketcard' key={el.id}>
                            <span><Link to={`/${el.id}`}><img src={el.images[0]}></img></Link></span>
                            <p>{el.price} грн.</p>
                            <div className='removebasket'>
                                <Link to={`/${el.id}`}  ><span>{el.title}</span></Link >
                                <p >
                                    <button onClick={() => {
                                        removeItemBasket(el);
                                        setBas(JSON.parse(localStorage.getItem("basket")))
                                    }}>
                                        Видалити з кошика
                                    </button>
                                </p>
                            </div>
                        </div >

                    )
                })}
            </div>
        </div>
    );
};



export default Basket;