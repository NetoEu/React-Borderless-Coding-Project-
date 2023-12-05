import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [playerWin, setPlayerWin] = useState(null);
  const [player1, setPlayer1] = useState(null);
  const [player2, setPlayer2] = useState(null);
  const [score, setScore] = useState(null);
  const [score2, setScore2] = useState(null);

  const options = ['rock', 'paper', 'scissor'];

  const selectedOptionForMachine = options[Math.floor(Math.random() * options.length)];


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
    
  useEffect(() => {
    console.log('Player 1', player1);
    console.log('Player 2', player2);
  })
  
  return (
    <>
    <div>
      Player 1
    </div>
     <div className='App'>
      <div className='div1'>
        <div className='frontScore'>
          É isso ai
        </div>
          <button className="a1" onClick={() => Result(setPlayer1('scissor'), setPlayer2(selectedOptionForMachine))}><img src="https://cdn.pixabay.com/photo/2014/03/25/15/26/rock-paper-scissors-296853_1280.png" alt="" width='50px'/></button>
          <button className="a2" onClick={() => Result(setPlayer1('rock'), setPlayer2(selectedOptionForMachine))}><img src="https://cdn.pixabay.com/photo/2014/03/25/15/26/rock-paper-scissors-296854_1280.png" alt="" width='50px'/></button>
          <button className="a3" onClick={() => Result(setPlayer1('paper'), setPlayer2(selectedOptionForMachine))}><img src="https://storage.needpix.com/rsynced_images/rock-paper-scissors-296855_1280.png" alt="" width='50px'/></button>
        </div>
        </div>
      <div className='bpai'>
        <div className='b1'>

        </div>
        <div className='b2'>

        </div>
        <div className='b3'>
        </div>
      </div>
      <div>
      </div>
      <div>
      SCORE PLAYER 1: {score}
    </div>

    <div className='arena'>
      RESULTADO: {playerWin}
    </div>

    <div>
    </div>
    SCORE PLAYER 2: {score2}
    </>
  )
}

export default App
