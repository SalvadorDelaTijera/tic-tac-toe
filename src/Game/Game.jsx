import React, { useState } from 'react'
import App from '../App'

const Game = () => {
  const [xIsNext, setxIsNext] = useState(true);
  const [history, setHistory] = useState ([array(9).fill(null)])
  const currentSquares = history[history.length - 1];

const  handlePlay = (nextSqueres) =>{
    setHistory([...history,nextSqueres]);
    setxIsNext(!xIsNext);
  }
 
    return (
      <div className='game'>
        <div className='game-board'>
        <App xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}/>
        </div>
        <div className='game-info'>
        <ol>{moves}</ol>
        </div>
        </div>
      )
  
}

export default Game