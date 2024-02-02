import React, { useState } from 'react'
import App from '../App'

const Game = () => {
  const [xIsnext, setXIsNext] = useState(true);
  const [history, setHistory] = useState ([array(9).fill(null)])
  const currentSquares = history[history.length - 1];

const  handlePlay = (nextSqueres)=>{
    setHistory([...History,nextSqueres]);
    setXIsNext(!xIsnext);
  }

  const jumpTo=(nextMove)=>{
  //TODO
  }

  const moves = history.map((squares, move)=>{
    let description;
    if (move > 0) {
      description = "Ir al movimiento # " + move;
    }else{
      description = "Ir al inicio del juego";
    }
    return(
      <li>
        <button onClick={() => jumpTo(move)}>{description} </button>
      </li>
    );
  });

  return (
    <div className='game'>
      <div className='game-board'>
        <App xIsnext={xIsnext} squares={currentSquares} onPlay={handlePlay}/>
      </div>
      <div className='game-info'>
        <ol>{moves}</ol>
      </div>
    </div>
  )
}

export default Game