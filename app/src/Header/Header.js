import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'


const Header = () => {
    return (
        <div>
            <div className='header'>
                <ul>
                    <li><Link>Кошик</Link></li>
                    <li><Link>Контакти</Link></li>
                    <li><Link to='/example'>Щось</Link></li>

                    <li><Link to='/login'>Зареєструватися</Link></li>
                </ul>
            </div>
        </div>
    );
};



export default Header;
