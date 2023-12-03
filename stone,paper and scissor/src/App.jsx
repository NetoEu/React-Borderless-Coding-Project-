import { useState } from 'react';
import './App.css';

function App() {

  const [playerWin, setPlayerWin] = useState(null);
  const [player1, setPlayer1] = useState(null);
  const [player2, setPlayer2] = useState(null);
  const [score, setScore] = useState(null);

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
      setPlayerWin('draw');
    }
  } 
  
  return (
    <>
    <div>
      Player 1
    </div>
     <div className='App'>
      <div className='div1'>
        <div className='div2'>
          <button className="a1" onClick={() => Result(setPlayer1('scissor') && setPlayer2(selectedOptionForMachine))}><img src="https://cdn.pixabay.com/photo/2014/03/25/15/26/rock-paper-scissors-296853_1280.png" alt="" width='50px'/></button>
          <button className="a1" onClick={() => setPlayer1('rock')}><img src="https://cdn.pixabay.com/photo/2014/03/25/15/26/rock-paper-scissors-296854_1280.png" alt="" width='50px'/></button>
          <button className="a1" onClick={() => setPlayer1('paper')}><img src="https://storage.needpix.com/rsynced_images/rock-paper-scissors-296855_1280.png" alt="" width='50px'/></button>
        </div>
      </div>
      </div>
      <div>
      SCORE PLAYER 1: {score}
    </div>

    <div className='arena'>
      Resultado: {Result}
    </div>

    <div>
      SCORE PLAYER 2: {score}
    </div>
    <div>
      <div className='div1b'>
        <div className='div2b'>
          <button className="a1b"><img src="https://cdn.pixabay.com/photo/2014/03/25/15/26/rock-paper-scissors-296853_1280.png" alt="" width='50px'/></button>
          <button className="a1b"><img src="https://cdn.pixabay.com/photo/2014/03/25/15/26/rock-paper-scissors-296854_1280.png" alt="" width='50px'/></button>
          <button className="a1b"><img src="https://storage.needpix.com/rsynced_images/rock-paper-scissors-296855_1280.png" alt="" width='50px'/></button>
        </div>
      </div>
    </div>
    <div>
      Player 2
    </div>
    </>
  )
}

export default App
