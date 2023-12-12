import { createContext, useState } from "react";

export const myHook = createContext()

export const myHookProvider = ({children}) => {

    const [playerWin, setPlayerWin] = useState(null);
    const [player1, setPlayer1] = useState(null);
    const [player2, setPlayer2] = useState(null);
    const [score, setScore] = useState(0);
    const [score2, setScore2] = useState(null);

    const Result = () => {
        if (player1 === 'rock' && player2 === 'scissor') {
        setPlayerWin('Player 1 win');
        setScore(score + 1);
        } else if (player1 === 'rock' && player2 === 'paper') {
        setPlayerWin('Player 2 Win');
        setScore2(score2 + 1)
        } else if (player1 === 'scissor' && player2 === 'paper') {
        setPlayerWin('Player 1 win')
        setScore(score + 1)
        } else if (player1 === 'paper' && player2 === 'scissor') {
        setPlayerWin('Player 2 Win')
        setScore2(score2 + 1)
        } else if (player1 === 'paper' && player2 === 'rock') {
        setPlayerWin('Player 1 win')
        setScore(score + 1)
        } else if (player1 === 'scissor' && player2 === 'rock') {
        setPlayerWin('Player 2 Win')
        setScore2(score2 + 1)
        }
        else {
        setPlayerWin('draw');
        }
    } 

    return (
        <myHookProvider.Provider>
            {children}
        </myHookProvider.Provider>
    )
}