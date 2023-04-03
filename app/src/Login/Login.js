import React from 'react'
import { CustomContext } from '../Context';
import { useEffect, useState, useContext } from "react";
import "./login.css"
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../func';


const Login = () => {
    const { user, setUser } = useContext(CustomContext);

    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');


    const navigate = useNavigate();

    const auth = () => {
        if (email !== "" && password !== "") {
            loginUser(email, password);
            //setUser(true);
            navigate("/");
        }
    }
    return (
        <div className='section'>
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
                    <div className='btn' onClick={() => { auth() }}  >
                        <button>Ввійти</button>
                    </div>
                    <div className='btn-1'  ><Link to="/register">У мене немає аккаунта</Link></div>
                </div>
            </div>
        </div>
    )
}

export default Login;
