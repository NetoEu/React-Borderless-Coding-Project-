import { useEffect, useState } from "react";
import React from 'react';
import { Link } from 'react-router-dom';

import { useContext } from "react";

import { MyhookContext } from "../context/myfirsthook";

const Game = () => {

    const {player1, player2, Result, score, selectedOptionForMachine, setPlayer1, setPlayer2, playerWin, setPlayerWin, setScore} = useContext(MyhookContext);

    useEffect(() => {
        console.log(player1)
        console.log(selectedOptionForMachine)
        console.log(playerWin)
    })

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