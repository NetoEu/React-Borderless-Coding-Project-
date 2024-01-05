import { useEffect, useState } from "react";
import React from 'react';
import { Link } from 'react-router-dom';

import { useContext } from "react";

import { MyhookContext } from "../context/myfirsthook";


const Play = () => {

    const {score, Result, setPlayer1, setPlayer2, selectedOptionForMachine, playerWin, player1, player2} = useContext(MyhookContext);

    useEffect(() => {
        console.log(playerWin)
        console.log(score)
        console.log(player1)
        console.log(player2)
    })

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
                <Link to="/games">
                    <button className="a1" onClick={() => Result(setPlayer1('scissor'), setPlayer2(selectedOptionForMachine))}><img src="https://cdn.pixabay.com/photo/2014/03/25/15/26/rock-paper-scissors-296853_1280.png" width='60px'/></button>
                    <button className="a2" onClick={() => Result(setPlayer1('rock'), setPlayer2(selectedOptionForMachine))}><img src="https://cdn.pixabay.com/photo/2014/03/25/15/26/rock-paper-scissors-296854_1280.png" width='60px'/></button>
                    <button className="a3" onClick={() => Result(setPlayer1('paper'), setPlayer2(selectedOptionForMachine))}><img src="https://storage.needpix.com/rsynced_images/rock-paper-scissors-296855_1280.png" width='60px'/></button>
                </Link>
            </div>
        </div>
        </>
    )
}
export default Play;