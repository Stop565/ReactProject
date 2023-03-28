import React from 'react'
import './card.css'
import { Link } from 'react-router-dom';


const Card = ({ el }) => {



    return (
        <Link to={`/${el.id}`}  >
            <div className='card'  >
                <img src={el.images[0]}></img>
                <p>{el.title}</p>
            </div >
        </Link>
    );
};



export default Card;