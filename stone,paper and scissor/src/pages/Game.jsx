import { useEffect, useState } from "react";
import React from 'react';
import { Link } from 'react-router-dom';
import paper_img from "../images/paper_img.png";

import { useContext } from "react";

import { MyhookContext } from "../context/myfirsthook";

const Game = () => {

    const {imgResult, playerWin, player1} = useContext(MyhookContext);


    return (
        <>
            <div>
                <Link to="/">Play Again</Link>
            </div>
            <p>
                O Resultado é: {playerWin}
            </p>
            <br />
            <div>
                {imgResult(player1)}
            </div>
            <div>
            </div>
        </>
    );
}

export default Game;