import React, { useContext } from "react";
import { MyhookContext } from "../context/myfirsthook";

const Footer = () => {

    const { rules } = useContext(MyhookContext);

    return(
        <>
            <div>
                FOOTER AQUI
            </div>
        </>
    )
}

export default Footer;