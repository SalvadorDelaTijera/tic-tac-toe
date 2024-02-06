import React from 'react'
import './Square.css'
import { useState } from 'react'

function Square({value, onSquareClick}) {

  //const[value, setValue] = useState(null)// null valor inicial
  // value alacena el valor y setValue es una funcion que se puede usae para cmabiar el valor, 

//function handleClick(){ //Al llamar a esta función set desde un controlador onClick, le estás diciendo a React que vuelva a renderizar ese Square cada vez que se hagas clic en <button>.
  //setValue("X")
//}

/*$Square para recibir la prop value del componente Board */

/*onSquareclick e suan funcion en App , la cual Square llamara cuanod se haga click en un cuadrado  y se agrega a los props de Square*/

  return (
  
    <button className="square" onClick={onSquareClick}>{value}</button>
  )
}

export default Square