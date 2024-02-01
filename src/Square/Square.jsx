import { useState } from 'react';
import "./Square.css"
import App from '../App';

 const Square =({value, onSquareClick})=> {
  return <button className="square" onClick={onSquareClick}>{value}</button>;
  }


  export default Square