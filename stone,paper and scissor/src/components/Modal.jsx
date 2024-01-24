import React from "react";
import { useState } from "react";
import { RiCloseLine } from "react-icons/ri";

import { useContext } from "react";

import { MyhookContext } from "../context/myfirsthook";

const Modal = ({setIsOpen}) => {

    return (
        <>
            <div className="darkBG" onClick={() => setIsOpen(false)} />
                <div className="centered">
                    <div className="modal">
                        <div className="modal_header">
                            <h5>Rules</h5>
                            </div>
                            <button className="closeButton" onClick={() => setIsOpen(false)}>
                                <RiCloseLine style={{ marginBottom: "-3px" }} />
                            </button>
                            <div className="modalContent">
                                <p>Rules</p>
                            </div>

                    </div>
                </div>
        </>
    )
}

export default Modal;