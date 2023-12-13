import { createContext, useState } from "react";

export const MyhookContext = createContext();

export const MyhookProvider = ({ children }) => {

    const [msg, setMsg] = useState("Foi");

    const toggleMsg = () => {
        setMsg(msg === 'Vai!!!!!!' ? 'Foi' : 'Vai!!!!!!');
    };

    return (
        <MyhookContext.Provider value = {{msg, toggleMsg}}>
            {children}
        </MyhookContext.Provider>
    )
};