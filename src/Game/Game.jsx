import React from 'react'

const Game = () => {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const currentSquares = history[history.length-1];
  const handlePlay=(nextSquares)=>{
    //crea una nueva matriz wque ocntiene todos los elemtnos en history seguido de nextSqaures
    setHistory([...history, nextSquares]);
    setXIsNext(!xIsNext);
  }
  return (
    <div className='game'>
      <div className='game-board'>
        <App xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}/>
      </div>
      <div className='game-info'>
        <ol></ol>
      </div>
    </div>
  )
}

export default Game