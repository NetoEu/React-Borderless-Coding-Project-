import { useEffect, useState } from "react";
import React from 'react';
import { Link } from 'react-router-dom';
import Header from "./Header";
import Footer from "./Footer";
import Modal from "../components/Modal";

import { useContext } from "react";

import { MyhookContext } from "../context/myfirsthook";


const Play = () => {

    const {score, Result, setPlayer1, setPlayer2, selectedOptionForMachine, playerWin, player1, player2, isOpen} = useContext(MyhookContext);

    useEffect(() => {
        console.log(playerWin)
        console.log(score)
        console.log(player1)
        console.log(player2)
    })

    return (
        <>
        <div className="Pai">
            <Header />
            <div className="PlayFilho_play">
                <div className="B1Filho">
                    <Link className="a1" to="/games">
                    <button onClick={() => Result(setPlayer1('scissor'), setPlayer2(selectedOptionForMachine))}><img src="https://cdn.pixabay.com/photo/2014/03/25/15/26/rock-paper-scissors-296853_1280.png" width='40px'/></button>
                    </Link>
                </div>
                <div className="B2Filho">
                    <Link className="a2" to="/games">
                    <button onClick={() => Result(setPlayer1('rock'), setPlayer2(selectedOptionForMachine))}><img src="https://cdn.pixabay.com/photo/2014/03/25/15/26/rock-paper-scissors-296854_1280.png" width='40px'/></button>
                    </Link>
                </div>
                <div className="B3Filho">
                    <Link className="a3" to="/games">
                    <button onClick={() => Result(setPlayer1('paper'), setPlayer2(selectedOptionForMachine))}><img src="https://storage.needpix.com/rsynced_images/rock-paper-scissors-296855_1280.png" width='40px'/></button>
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
        </>
    )
}
export default Play;