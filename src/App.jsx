import React from "react";
import "./App.css";
import { useState } from "react";

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
  //onSquareClick => función del componente, al componente Square, y Square llamará a esa función cuando se haga clic en un cuadrado. Comienza con la función que llamará el componente Square cuando se haga clic en él
}
const App = ( xIsNext, squares, onPlay ) => {
//Cada vez que un jugador se mueve, xIsNext (un valor booleano) se invertirá para determinar qué jugador es el siguiente y se guardará el estado del juego. Actualiza la función handleClick de Board para cambiar el valor de xIsNext:
  //const[xIsNext, setXIsNext] = useState(true);
  //const[squares, setSquares] = useState(Array(9).fill(null))



  //handkleclick actualiza la matriz squares que contiene el estado de tu tablero,crea una copia de la matriz squares (nextSquares) con el método JavaScript slice() Array. Luego, handleClick actualiza la matriz nextSquares para agregar X al primer cuadrado (índice [0]).
  function handleClick(i){
  // squares[i] Verifica si el cuadrado ya tiene una X o una O. Si el cuadrado ya está lleno, genera un return en la función handleClick, antes de que intente actualizar el estado del tablero.
    if (calculateWinner(squares) || squares[i]) {// calculateWinner(squares)) para comprobar si un jugador ha ganado
      return;
    }
// handleClick, llama a .slice() para crear una copia de la matriz squares en lugar de modificar la matriz existente. Para explicar por qué, necesitamos discutir la inmutabilidad y por qué es importante aprender la inmutabilidad.
  const nextSquares = squares.slice();
//Cada vez que un jugador se mueve, xIsNext (un valor booleano) se invertirá para determinar qué jugador es el siguiente y se guardará el estado del juego. Actualiza la función handleClick de Board para cambiar el valor de xIsNext:
    if (xIsNext) {
      nextSquares[i] = "X";
    }else{
      nextSquares[i] = "O"
    }
    onPlay(nextSquares);
// reemplaza las llamadas setSquares y setXIsNext en handleClick en el componente Board con una sola llamada a su nueva función onPlay para que el componente Game pueda actualizar el componente,cuando el usuario hace clic en un cuadrado:
    //setSquares(nextSquares);
    //setXIsNext(!xIsNext);
  }

 //El estado mostrará el ganador si el juego termina y si el juego está en curso, se mostrará el turno del siguiente jugador:
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "El ganador es:  " + winner;
    }else{
      status = "Siguiente jugador:  " + (xIsNext ? "X": "O");
    }

  return (
    <>

      <div className="board-row">
        <Square value={squares[0]}onSquareClick={()=>handleClick(0)}/>
        <Square value={squares[1]}onSquareClick={()=> handleClick(1)} />
        <Square value={squares[2]}onSquareClick={()=>handleClick(2)} />
      </div>
{/* handleClick(0) es una función de flecha, Cuando se hace clic en el cuadrado, se ejecutará el código después de la «flecha» =>, llamando a handleClick(). */}
      <div className="board-row">
        <Square value={squares[3]}onSquareClick={()=>handleClick(3)} />
        <Square value={squares[4]}onSquareClick={()=>handleClick(4)} />
        <Square value={squares[5]}onSquareClick={()=>handleClick(5)} />
      </div>

      <div className="board-row">
        <Square value={squares[6]}onSquareClick={()=>handleClick(6)} />
        <Square value={squares[7]}onSquareClick={()=>handleClick(7)} />
        <Square value={squares[8]}onSquareClick={()=>handleClick(8)} />
      </div>
      <div className="status">{status}</div>
    </>
  );
};
export default function Game(){

  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
//Array(9).fill(null) crea una matriz con nueve elementos y establece cada uno de ellos en null. La llamada useState() a su alrededor declara una variable de estado squares que inicialmente se establece en esa matriz. Cada entrada en la matriz corresponde al valor de un cuadrado.//
  const currentSquares = history[history.length - 1];
  function handlePlay(nextSquares){
//[...history, nextSquares] crea una nueva matriz que contiene todos los elementos en history, seguido de nextSquares. (Puedes leer la sintaxis extendida ...history como «enumerar todos los elementos en history».)
    setHistory([...history, nextSquares]);
    setXIsNext(!xIsNext);
  }
  return(
    <div className="game">
      <div className="game-board">
        <App xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}/>
      </div>
      <div className="game-info">
        <ol>{/*TODO*/}</ol>
      </div>
    </div>
  )
}

// calculateWinner que toma una matriz de 9 cuadrados, busca un ganador y devuelve 'X', 'O' o null según corresponda
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
      return squares[a];
    }
  }
  return null;
}



/*
Al hacer clic en el cuadrado se ejecuta la función que el button recibe como prop onClick del Square. El componente Square recibe esa función como una prop onSquareClick del Board. El componente Board define esa función directamente en el JSX. Llama a handleClick con un argumento de 0.
handleClick usa el argumento (0) para actualizar el primer elemento de la matriz squares de null a X.
El estado squares del componente Board se actualiza, por lo que Board y todos sus elementos secundarios se vuelven a renderizar. Esto hace que la prop value del componente Square con el índice 0 cambie de null a X.

*/

//const [value, setValue] = useState(null);
//value almacena el valor y setValue es una función que se puede usar para cambiar el valor. El null pasado a useState se usa como valor inicial para esta variable de estado, por lo que value aquí comienza igual a null.
