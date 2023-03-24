import React from 'react'
import Card from '../Card/Card';
import './home.css'
import { useState } from "react";


const Home = ({ info, category }) => {

    const [valCat, setValcat] = useState(false);

    return (
        <div className='containerHome'>
            <div className='categorys'>
                {
                    category.map((el) => {
                        return (
                            <div className='category' key={el.id} onClick={() => setValcat(el.name)} >{el.name}</div>
                        )
                    })
                }
            </div>
            <div className='cards'>
                {
                    info.map((el) => {
                        if (valCat === el.category.name) return <Card key={el.id} el={el} />
                        else if (valCat === false) return <Card key={el.id} el={el} />
                    })
                }
            </div>
        </div>
    );
};



export default Home;