import { useEffect, useState } from "react";
import React from 'react';
import { Link } from 'react-router-dom';

import { useContext } from "react";

import { MyhookContext } from "../context/myfirsthook";

const Game = () => {

    const {Result, player1, player2, score, selectedOptionForMachine, playerWin, setPlayerWin, setScore} = useContext(MyhookContext);

    useEffect(() => {
        console.log(player1)
        console.log(score)
        console.log(selectedOptionForMachine)
    });


    return (
        <>
            <div>
                <Link to="/">Play Again</Link>
            </div>
            <p>
                O Resultado é: {playerWin}
            </p>
            <div>
            </div>
            <div>
            </div>
        </>
    );
}

export default Game;