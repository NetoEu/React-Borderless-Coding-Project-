import { useState } from "react";
import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';

const Game = () => {
    return (
        <>
            <h1>
                Foi!
            </h1>
            <div>
                <Link to="/"> Play Again</Link>
            </div>
        </>
    );
}

export default Game;