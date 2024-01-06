import { useEffect, useState } from "react";
import React from 'react';
import { Link } from 'react-router-dom';
import Header from "./Header";

import { useContext } from "react";

import { MyhookContext } from "../context/myfirsthook";

const Game = () => {

    const {Result, imgResult, imgResult2, playerWin, player1, score, player2, selectedOptionForMachine} = useContext(MyhookContext);

    useEffect(() => {
        console.log(score)
        console.log(player1)
        console.log(player2)
        console.log(playerWin)
    })


    return (
        <>
        <div className="Pai">
            <Header />
            <div className="PlayFilho_game">
                <div className= "playAgain_style">
                    <Link to="/">Play Again</Link>
                </div>
                <div>
                        O Resultado é: {playerWin}
                </div>
                <div className="imgResultPlayer1">
                    {imgResult(player1)}
                </div>
                <div className="imgResultPlayer2">
                    {imgResult2(selectedOptionForMachine)}
                </div>
            </div>
        </div>
        </>
    );
}

export default Game;