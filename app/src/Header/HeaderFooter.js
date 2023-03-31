import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './header.css'
import './footer.css'

const HeaderFooter = () => {
    return (
        <>
            <div className='allheader'>
                <div className='container'>
                    <div className='header'>
                        <ul className='header__list'>
                            <Link to='/'><li className='header__li'>Home</li></Link>
                            <Link to='/basket'><li className='header__li'>Кошик</li></Link>
                            <Link to='/login'><li className='header__li'>Login</li></Link>
                        </ul>
                    </div>
                </div>
            </div>

            <main ><Outlet /></main>

            <div className='footer'>
                <div className='footer__text'>Footer</div>
            </div>

        </>
    );
};



export default HeaderFooter;
