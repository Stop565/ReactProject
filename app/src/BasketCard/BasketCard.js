import React from 'react'
import './basketcard.css'



const BasketCard = ({ el }) => {

    return (
        <div className='basketcard'>
            <img src={el.images[0]}></img>
            <p>{el.id}</p>
        </div>

    );
};



export default BasketCard;