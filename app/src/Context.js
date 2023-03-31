import { createContext, useState, useEffect } from "react";
import axios from "axios";


export const CustomContext = createContext();

export const Context = (props) => {
    const [user, setUser] = useState([]);
    const [resuser, setResuser] = useState([]);

    useEffect(() => {
        axios.get('https://api.escuelajs.co/api/v1/users').then(({ data }) => {
            console.log(data);
        })
    }, []);



    const value = {
        user,
        setUser
    }

    return (<CustomContext.Provider value={value}>
        {props.children}
    </CustomContext.Provider>
    )
}