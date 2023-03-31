import { createContext, useState, useEffect } from "react";



export const CustomContext = createContext();

export const Context = (props) => {
    const [user, setUser] = useState([])


    const value = {
        user,
        setUser
    }





    return (<CustomContext.Provider value={value}>
        {props.children}
    </CustomContext.Provider>
    )


}