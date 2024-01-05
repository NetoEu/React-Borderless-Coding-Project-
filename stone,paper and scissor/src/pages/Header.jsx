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
            <div className='App'>
                <div className='div1'>
                    <div className="playerWin_style">
                        O Resultado é: {playerWin}
                    </div>
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
                </div>
            </div>
        </nav>    
    </>
    )
};

export default Header;