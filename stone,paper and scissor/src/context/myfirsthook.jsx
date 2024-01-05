import { createContext, useState, useEffect } from "react";

export const MyhookContext = createContext();

export const MyhookProvider = ({ children }) => {

    const [player1, setPlayer1] = useState(null);
    const [player2, setPlayer2] = useState(null);
    const [playerWin, setPlayerWin] = useState(null);
    const [score, setScore] = useState(0);

    const options = ['rock', 'paper', 'scissor'];

    const selectedOptionForMachine = options[Math.floor(Math.random() * options.length)];

    const Result = () => {
        if (player1 === 'rock' && player2 === 'scissor') {
        setPlayerWin('Player 1 win');
        setScore(score + 1);
        } else if (player1 === 'rock' && player2 === 'paper') {
        setPlayerWin('Player 2 Win');
        } else if (player1 === 'scissor' && player2 === 'paper') {
        setPlayerWin('Player 1 win')
        setScore(score + 1)
        } else if (player1 === 'paper' && player2 === 'scissor') {
        setPlayerWin('Player 2 Win')
        } else if (player1 === 'paper' && player2 === 'rock') {
        setPlayerWin('Player 1 win')
        setScore(score + 1)
        } else if (player1 === 'scissor' && player2 === 'rock') {
        setPlayerWin('Player 2 Win')
        }
        else {
        setPlayerWin('Draw')
        }
    };

    const imgResult = () => {
        if (player1 === 'scissor') {
           return <img src="https://cdn.pixabay.com/photo/2014/03/25/15/26/rock-paper-scissors-296853_1280.png" width='75px'/>
        } else if (player1 === 'paper') {
            return <img src="https://storage.needpix.com/rsynced_images/rock-paper-scissors-296855_1280.png" width='75px'/>
        } else if (player1 === 'rock') {
            return <img src="https://cdn.pixabay.com/photo/2014/03/25/15/26/rock-paper-scissors-296854_1280.png" width='75px'/>
        }
    };

    const imgResult2 = () => {
        if (player2 === 'scissor') {
           return <img src="https://cdn.pixabay.com/photo/2014/03/25/15/26/rock-paper-scissors-296853_1280.png" width='75px'/>
        } else if (player2 === 'paper') {
            return <img src="https://storage.needpix.com/rsynced_images/rock-paper-scissors-296855_1280.png" width='75px'/>
        } else if (player2 === 'rock') {
            return <img src="https://cdn.pixabay.com/photo/2014/03/25/15/26/rock-paper-scissors-296854_1280.png" width='75px'/>
        }
    };

    return (
        <MyhookContext.Provider value = {{Result, setPlayer1, imgResult, imgResult2, setPlayer2, player1, selectedOptionForMachine, player2, setScore, playerWin, score, setPlayerWin}}>
            {children}
        </MyhookContext.Provider>
    )
};