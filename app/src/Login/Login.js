import React from 'react'
import { useEffect, useState, useContext } from "react";
import "./login.css"
import { Link } from 'react-router-dom';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');

    return (
        <div className='containerLogin'>
            <div className='contant'>
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
                <div className='btn'  >
                    <button>Ввійти</button>
                </div>
                <div className='btn-1'  ><Link to="/register">У мене немає аккаунта</Link></div>
            </div>
        </div>
    )
}

export default Login;
