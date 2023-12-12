import { useState } from "react";
import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';

const Game = () => {

    const [playerWin, setPlayerWin] = useState(null);
    const [player1, setPlayer1] = useState(null);
    const [player2, setPlayer2] = useState(null);
    // const [score, setScore] = useState(null);
    const [score2, setScore2] = useState(null);

    const options = ['rock', 'paper', 'scissor'];

    const selectedOptionForMachine = options[Math.floor(Math.random() * options.length)];

    return (
        <>
        <div>
        Player 1
        </div>
        <div className='App'>
            <div className='div1'>
                <div className='frontScore'>
                    <div className='player1Score'>
                        <p className='numberPlayer1Score'>
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
            
            </div>
        </div>
        <div>
        <nav>
                <li>
                    <Link to="/"> Jogar dnv! </Link>
                </li>
            </nav>
        </div>
        </>
    );
}

export default Game;