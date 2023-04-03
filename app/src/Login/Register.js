import React from 'react'
import axios from 'axios';
import { CustomContext } from '../Context';
import { useEffect, useState, useContext } from "react";
import "./login.css"
import { createUser } from '../func';
import { Link } from 'react-router-dom';




const Register = () => {
    const { user, setUser } = useContext(CustomContext);
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
    const [name, setName] = useState('');

    const registerUser = () => {
        if (name !== "" && email !== "" && password !== "") {
            createUser(name, email, password);
            console.log("ggg")
        }

    }


    return (
        <div className='section'>
            <div className='containerLogin'>
                <div className='contant'>
                    <div className='name'>
                        <input className='input__name'
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Введіть ім'я"
                        ></input>
                    </div>
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
                    <div className='btn' onClick={() => registerUser()} >
                        <button>Зареєструватися</button>
                    </div>
                    <div className='btn-1'  ><Link to="/login">У мене вже є аккаунт</Link></div>
                </div>
            </div>
        </div>
    );
};



export default Register;
