import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './header.css'
import './footer.css'

import { CustomContext } from '../Context';
import { useEffect, useState, useContext } from "react";


const HeaderFooter = () => {
    const { user, setUser } = useContext(CustomContext);
    const [isAuth, setisauth] = useState(user);

    const logOut = () => {
        localStorage.removeItem("userAuth");
        localStorage.removeItem("token");
        setUser(false);
        //setisauth(false);
    }

    console.log(user);
    return (
        <>
            <div className='allheader'>
                <div className='container'>
                    <div className='header'>
                        <ul className='header__list'>
                            <Link to='/'><li className='header__li'>Home</li></Link>
                            <Link to='/basket'><li className='header__li'>Кошик</li></Link>
                            {user ? <li className='header__li' onClick={() => logOut()}>Log out</li>
                                : <Link to='/login'><li className='header__li'>Login</li></Link>
                            }
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
