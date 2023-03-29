import React from 'react'
import './opencard.css'
import { useParams } from 'react-router-dom';
import { fetchOneel, addLocalStorage } from '../func'
import { useEffect, useState } from "react";


const OpenCard = () => {
    const [infoOne, setInfoone] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        fetchOneel(id).then(data => setInfoone(data))
    }, [])


    return (
        <div className='containerOpenCard'  >
            <div className='opencard'>
                <img src={infoOne.images}></img>
                <span>
                    <h1>{infoOne.title}</h1>
                    <p >{infoOne.price} грн.</p>
                    <h2 className='addbasket'>
                        <button onClick={() => addLocalStorage(infoOne)}>В кошик</button>
                    </h2>
                </span>
            </div>
            <div className='description'>{infoOne.description}</div>

        </div >
    );
};



export default OpenCard;