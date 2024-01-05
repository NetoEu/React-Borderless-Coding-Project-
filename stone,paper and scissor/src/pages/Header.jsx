import React from 'react';
import { useContext } from "react";
import "../App.css"
import "../index.css"

import { MyhookContext } from "../context/myfirsthook";

const Header = () => {

    const {score, playerWin} = useContext(MyhookContext);

    return (
    <>
        <nav>
                    <div className='frontScore'>
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
                        <div className='player1Score'>
                            <p className='numberPlayer1Score'>
                                {score}
                            </p>
                    </div>
                </div>
        </nav>    
    </>
    )
};

export default Header;