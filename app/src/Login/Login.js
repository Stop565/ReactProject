import React from 'react'
import { useEffect, useState, useContext } from "react";
import "./login.css"
import { Link } from 'react-router-dom';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');

    return (
        <div>
            <div className='email'>
                <input type="email" className='inpur__email'
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Введіть Email" ></input>
            </div>
            <div className='password'>
                <input type="password" className='inpur__password'
                    onChange={(e) => setPass(e.target.value)}
                    placeholder="Введіть пароль"></input>
            </div>
            <div className='btn'  ><button>Ввійти</button>
                <Link to="/register"> <div className='btn-1'  >Ще немає аккаунта</div></Link>
            </div>
        </div>
    )
}

export default Login;
