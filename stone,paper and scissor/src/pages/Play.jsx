import { useEffect, useState } from "react";
import React from 'react';
import { Link } from 'react-router-dom';

import { useContext } from "react";

import { MyhookContext } from "../context/myfirsthook";


const Play = () => {

    const {score, Result, setPlayer1} = useContext(MyhookContext);

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
                    <button className="a1" onClick={() => Result(setPlayer1('scissor'))}><img src="https://cdn.pixabay.com/photo/2014/03/25/15/26/rock-paper-scissors-296853_1280.png" width='50px'/></button>
                    <button className="a2" onClick={() => Result(setPlayer1('rock'))}><img src="https://cdn.pixabay.com/photo/2014/03/25/15/26/rock-paper-scissors-296854_1280.png" width='50px'/></button>
                    <button className="a3" onClick={() => Result(setPlayer1('paper'))}><img src="https://storage.needpix.com/rsynced_images/rock-paper-scissors-296855_1280.png" width='50px'/></button>
                </Link>
            </div>
        </div>
        <div>
        </div>
        </>
    )
}
export default Play;