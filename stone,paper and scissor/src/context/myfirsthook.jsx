import { createContext, useState } from "react";

export const MyhookContext = createContext();

export const MyhookProvider = ({ children }) => {

    const [player1, setPlayer1] = useState(null);
    const [player2, setPlayer2] = useState(null);
    const [playerWin, setPlayerWin] = useState(null);
    const [score, setScore] = useState(0);
    const [score2, setScore2] = useState(null);

    const options = ['rock', 'paper', 'scissor'];

    const selectedOptionForMachine = options[Math.floor(Math.random() * options.length)];

    const Player1scissor = () => {
        setPlayer1('scissor')
    };
    const Player1rock = () => {
        setPlayer1('rock')
    };
    const Player1paper = () => {
        setPlayer1('paper')
    };

    const Player2random = () => {
        setPlayer2(selectedOptionForMachine)
    };

    const Result = () => {
        if (player1 === 'rock' && selectedOptionForMachine === 'scissor') {
        setPlayerWin('Player 1 win');
        setScore(score + 1);
        } else if (player1 === 'rock' && selectedOptionForMachine === 'paper') {
        setPlayerWin('Player 2 Win');
        } else if (player1 === 'scissor' && selectedOptionForMachine === 'paper') {
        setPlayerWin('Player 1 win')
        setScore(score + 1)
        } else if (player1 === 'paper' && selectedOptionForMachine === 'scissor') {
        setPlayerWin('Player 2 Win')
        } else if (player1 === 'paper' && selectedOptionForMachine === 'rock') {
        setPlayerWin('Player 1 win')
        setScore(score + 1)
        } else if (player1 === 'scissor' && selectedOptionForMachine === 'rock') {
        setPlayerWin('Player 2 Win')
        }
        else {
        setPlayerWin('draw');
        }
    };

    return (
        <MyhookContext.Provider value = {{Result,player1, selectedOptionForMachine, player2, setScore, score2, setScore2, playerWin, score, Player1scissor, Player1rock, Player1paper, Player2random, setPlayerWin}}>
            {children}
        </MyhookContext.Provider>
    )
};