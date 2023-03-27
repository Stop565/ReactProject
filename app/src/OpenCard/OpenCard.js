import React from 'react'
import './opencard.css'
import { useParams } from 'react-router-dom';
import { fetchOneel } from '../func'
import { useEffect, useState } from "react";


const OpenCard = () => {
    const [infoOne, setInfoone] = useState({ info: [] })
    const { id } = useParams();
    useEffect(() => {
        fetchOneel(id).then(data => setInfoone(data))
    }, [])

    console.log(infoOne);
    return (
        <div className='containerOpenCard'  >
            <div className='opencard'>
                <img src={infoOne.images}></img>
                <p>{infoOne.title}</p>
                <p>{infoOne.id}</p>

            </div>

        </div>
    );
};



export default OpenCard;