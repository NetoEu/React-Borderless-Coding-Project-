import React from "react";
import { useState } from "react";
import { RiCloseLine } from "react-icons/ri";

import { useContext } from "react";

import { MyhookContext } from "../context/myfirsthook";

const Modal = ({setIsOpen}) => {

    return (
        <>
            <div className="darkBG" onClick={() => setIsOpen(false)} />
                <div className="centered">
                    <div className="modal">
                        <div className="modal_header">
                            <h3>Rules</h3>
                            </div>
                            <button className="closeButton" onClick={() => setIsOpen(false)}>
                                <RiCloseLine style={{ marginBottom: "-3px" }} />
                            </button>
                            <div className="modalContent">
                                <p>Para iniciar o jogo, você escolhe uma opção dentre pedra, papel ou tesoura.</p>
                                <p>O computador escolherá uma opção aleatóriamente e o resultado aparecerá no centro da tela.</p>
                                <p>Para jogar novamente, basta clicar no botão que aparecerá na tela, acima da indicação do ganhador.</p>
                            </div>

                    </div>
                </div>
        </>
    )
}

export default Modal;