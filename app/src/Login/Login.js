import React from 'react'
import axios from 'axios';
import { CustomContext } from '../Context';
import { useEffect, useState, useContext } from "react";
import "./login.css"

const Login = () => {
    const { user, setUser } = useContext(CustomContext);

    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('https://api.escuelajs.co/api/v1/users').then(({ data }) => {
            setUsers(data)
        })
    }, []);

    console.log(users);

    return (
        <div className='containerLogin'>

            <div className='email'>
                <input type="email" className='inpur__email'></input>
                <p>Введіть Email</p>
            </div>
            <div className='password'>
                <input type="password" className='inpur__password'></input>
                <p>Введіть пароль</p>
            </div>
            <div className='btn'><button>Ввійти</button></div>

        </div>
    );
};



export default Login;
