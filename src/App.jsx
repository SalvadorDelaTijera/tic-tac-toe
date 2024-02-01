import React from 'react'
import "./App.css"
import Square from './Square/Square'
import { useState } from 'react'

const App = () => {
  const [xIsnext, setXIsNext] = useState(true);
  const [squares, setSquares]=useState(Array(9).fill(null))

  const handlerClick=(i)=>{
    if (calculateWinner(squares) || (squares[i])) {
      return;
    }
    const nextSquares=squares.slice();

    if (xIsnext){
      nextSquares[i]= 'X';
    }else{
      nextSquares[i]= "O"
    }
    setSquares(nextSquares); //setSqueres permite a react saber que el estado del ocmp ha cambiado
    setXIsNext(!xIsnext);
  }
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Ganador: " + winner;
  } else {
    status = "Siguiente jugador: " + (xIsnext ? "X" : "O");
  }

  return (
    <>
    <div className='board-row'>
      <Square value={squares[0]} onSquareClick={()=>handlerClick(0)}/>
      <Square value={squares[1]} onSquareClick={()=>handlerClick(1)}/>
      <Square value={squares[2]} onSquareClick={()=>handlerClick(2)} />
    </div>

    <div className='board-row'>
      <Square value={squares[3]} onSquareClick={()=>handlerClick(3)}/>
      <Square value={squares[4]} onSquareClick={()=>handlerClick(4)}/>
      <Square value={squares[5]} onSquareClick={()=>handlerClick(5)}/>
    </div>

    <div className='board-row'>
      <Square value={squares[6]} onSquareClick={()=>handlerClick(6)}/>
      <Square value={squares[7]} onSquareClick={()=>handlerClick(7)}/>
      <Square value={squares[8]} onSquareClick={()=>handlerClick(8)}/>
    </div>
    <div className='status'>{status}</div>
    </>

  );
}
  const calculateWinner = (squares) =>{
    const lines =[
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for(let i = 0; i <lines.length; i++){
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

export default App