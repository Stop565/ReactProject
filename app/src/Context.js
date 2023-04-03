import { createContext, useState, useEffect } from "react";
import axios from "axios";


export const CustomContext = createContext();

export const Context = (props) => {
    const [user, setUser] = useState(false);
    const [resuser, setResuser] = useState([]);

    console.log(user);

    const value = {
        user,
        setUser
    }

    return (<CustomContext.Provider value={value}>
        {props.children}
    </CustomContext.Provider>
    )
}