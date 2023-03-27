import React from 'react'
import Card from '../Card/Card';
import './home.css'
import { useState } from "react";


const Home = ({ info, category }) => {

    const [valCat, setValcat] = useState(false);

    let changeCat = (el) => {
        if (el.name === valCat) return setValcat(false);
        else return setValcat(el.name)
    }

    return (
        <div className='containerHome'>
            <div className='categorys'>
                {
                    category.map((el) => {
                        return (
                            <div className={valCat === el.name ? 'category active' : 'category'}
                                key={el.id}
                                onClick={() => changeCat(el)}
                            >{el.name}</div>
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