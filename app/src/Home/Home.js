import React from 'react'
import Card from '../Card/Card';
import './home.css'



const Home = ({ info, category }) => {
    return (
        <div className='containerHome'>
            <div className='categorys'>
                {
                    category.map((el) => <p className='category' key={el.id}>{el.name}</p>)
                }
            </div>
            <div className='cards'>
                {
                    info.map((el) => <Card key={el.id} el={el} />)
                }
            </div>
        </div>
    );
};



export default Home;