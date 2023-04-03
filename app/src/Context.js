import { createContext, useState, useEffect } from "react";
import axios from "axios";


export const CustomContext = createContext();

export const Context = (props) => {
    const [user, setUser] = useState(false);
    const [resuser, setResuser] = useState([]);


    const token = JSON.parse(localStorage.getItem("token")) || "";

    axios({
        method: "get",
        url: "https://api.escuelajs.co/api/v1/auth/profile",
        headers: {
            Authorization: `Bearer ${token.access_token}`,
        },
    }).then((response) => {
        console.log(response)
        console.log("Запит на авторизацію");
        if (response.status === 200) {
            localStorage.setItem("userAuth", JSON.stringify(response.data));
            setUser(true);
        } else setUser(false)

    }).catch(function (error) {
        console.log("401");
    });

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