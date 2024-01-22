import React from "react";
import { useState } from "react";

const Modal = (setIsOpen) => {



    return (
        <>
            <div className="darkBG" onClick={() => setIsOpen(false)}>
                <div className="centered">
                    <div className="modal_style">

                    </div>
                </div>
            </div>
        </>
    )
}