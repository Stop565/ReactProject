import React from 'react'
import './card.css'


const Card = ({ el }) => {
    return (
        <div className='card'>
            <img src={el.images[0]}></img>
            <p>{el.title}</p>
        </div>
    );
};



export default Card;