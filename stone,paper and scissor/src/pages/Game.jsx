import { useState } from "react";
import React from 'react';

import { useContext } from "react";

import { MyhookContext } from "../context/myfirsthook";

const Game = () => {

    const {msg, toggleMsg} = useContext(MyhookContext);

    return (
        <>
            {msg}
        </>
    );
}

export default Game;