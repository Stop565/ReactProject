import React from 'react'
import Card from '../Card/Card';
import './home.css'



const Home = ({ info, category }) => {

    return (
        <div className='container'>
            <div className='cards'>
                {
                    info.map((el) => <Card key={el.id} el={el} />)
                }
            </div>
            <div>
                {
                    category.map((el) => <p key={el.id}>{el.name}</p>)
                }
            </div>

        </div>
    );
};



export default Home;