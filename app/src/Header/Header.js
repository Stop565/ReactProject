import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'


const Header = () => {
    return (
        <div className='allheader'>
            <div className='container'>
                <div className='header'>
                    <ul className='header__list'>
                        <li className='header__li'><Link to='/'>Home</Link></li>
                        <li className='header__li'><Link>Контакти</Link></li>
                        <li className='header__li'><Link to='/example'>Щось</Link></li>
                        <li className='header__li'><Link to='/login'>Зареєструватися</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};



export default Header;
