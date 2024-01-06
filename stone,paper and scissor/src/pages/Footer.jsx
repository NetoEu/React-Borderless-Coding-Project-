import React, { useContext } from "react";
import { MyhookContext } from "../context/myfirsthook";

const Footer = () => {

    const { rules } = useContext(MyhookContext);

    return(
        <>
            <div className="footer_1">
                <button className="button_footer">
                    <h3>Rules</h3>
                </button>
            </div>
        </>
    )
}

export default Footer;