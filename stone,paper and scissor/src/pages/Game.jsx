import { useState } from "react";
import React from 'react';
import { Link } from 'react-router-dom';

import { useContext } from "react";

import { MyhookContext } from "../context/myfirsthook";

const Game = () => {

    const {msg, toggleMsg} = useContext(MyhookContext);

    return (
        <>
            <div>
                <Link to="/">Play Again</Link>
            </div>
            <p>
                {msg}
            </p>
            <div>
                {toggleMsg}
            </div>
            <div>
                <button onClick={toggleMsg}></button>
            </div>
        </>
    );
}

export default Game;