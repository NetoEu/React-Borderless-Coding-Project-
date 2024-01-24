import React, { useContext, useState } from "react";

import { MyhookContext } from "../context/myfirsthook";

import Modal from "../components/Modal";

const Footer = () => {

    const { isOpen, setIsOpen } = useContext(MyhookContext);

    return(
        <>
            <div className="footer_1">
                <button className="button_footer" onClick={() => setIsOpen(true)}>
                    <h3>Rules</h3>
                </button>
            </div>
            {isOpen && <Modal setIsOpen={setIsOpen} />}
        </>
    )
}

export default Footer;