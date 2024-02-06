import './App.css'
import React from 'react'
import Square from './Square/Square'
import { useState } from 'react';

function App ({xIsNext, squares, onPlay}) {
 
  function handleClick(i){
    //comprobar si un jugador ha ganado
    if (calculateWinner(squares) || squares[i]) {//Verifica si el cuadrado ya tiene una X o una O. Si el cuadrado ya está lleno, genera un return en la función handleClick, antes de que intente actualizar el estado del tablero.
      return;
    }
    const nextSquares = squares.slice();//slice crea una coìa del  la matriz (array) square en lugar  de modificarlo
    if (xIsNext) {
      nextSquares[i]= "X";
    }else{
      nextSquares[i] = "O";
    }
    onPlay(nextSquares)
  }
  //mostrará el ganador si el juego termina y si el juego está en curso, se mostrará el turno del siguiente jugador:
  const winner = calculateWinner(squares);//? TypeError: undefined is not an object (evaluating 'squares[a]')
  let status;
  if(winner){
    status = "GANADOR!!! " + winner;
  }else{
    status = "Siguiente Jugador " + (xIsNext ? "X": "O");
  }

  return (
    <>
    {/*Board necesita pasar la prop value a cada uno de los componentes Square que representa:*/}
    <div className='board-row'>
      {/*se le pasa prop al componente Square*/}
      {/* onSquareClick a una función en el componente Board que llamarás handleClick. */}  
      <Square value={squares[0]} onSquareClick={()=>handleClick(0)}/>
      <Square value={squares[1]} onSquareClick={()=>handleClick(1)}/>
      <Square value={squares[2]} onSquareClick={()=>handleClick(2)}/>
    </div>

    <div className='board-row'>
      <Square value={squares[3]} onSquareClick={()=>handleClick(3)}/>
      <Square value={squares[4]} onSquareClick={()=>handleClick(4)}/>
      <Square value={squares[5]} onSquareClick={()=>handleClick(5)}/>
    </div>

    <div className='board-row'>
      <Square value={squares[6]} onSquareClick={()=>handleClick(6)}/>
      <Square value={squares[7]} onSquareClick={()=>handleClick(7)}/>
      <Square value={squares[8]} onSquareClick={()=>handleClick(8)}/>
    </div>
    <div className='status'>{status}</div>

    
    </>
    
  )
}
// toma una matriz de 9 cuadrados, busca un ganador y devuelve 'X', 'O' o null según corresponda
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      //? TypeError: undefined is not an object (evaluating 'squares[a]')
      return squares[a];
    }
  }
  return null;
}

export default App