import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'


const Header = () => {
    return (
        <div className='allheader'>
            <div className='container'>
                <div className='header'>
                    <ul className='header__list'>
                        <Link to='/'><li className='header__li'>Home</li></Link>
                        <li className='header__li'>Контакти</li>
                        <Link to='/example'><li className='header__li'>Кошик</li></Link>

                    </ul>
                </div>
            </div>
        </div>
    );
};



export default Header;
