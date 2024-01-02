import { useEffect, useState } from "react";
import React from 'react';
import { Link } from 'react-router-dom';

import { useContext } from "react";

import { MyhookContext } from "../context/myfirsthook";

const Game = () => {

    const {imgResult, playerWin, player1, score} = useContext(MyhookContext);

    return (
        <>
        <div>
            Result
        </div>
        <div className='App'>
            <div className='div1'>
                <div className='frontScore'>
                    <div className='player1Score'>
                        <p className='numberPlayer1Score'>
                            {score}
                        </p>
                    </div>
                    <div className='gameName'>
                        <p>
                        Pedra
                        </p>
                        <p>
                        Papel
                        </p>
                        <p>
                        Tesoura
                        </p>
                    </div>
                </div>
                <div>
                    <Link to="/">Play Again</Link>
                </div>
                <p>
                    O Resultado é: {playerWin}
                </p>
                <div className="imgResultPlayer1">
                    {imgResult(player1)}
                </div>
                <div className="imgResultPlayer2">
                    {imgResult(player1)}
                </div>
            </div>
        </div>
        </>
    );
}

export default Game;