import './TicTacToe.css';
// import './Square.js';
import Square from './Square.js';
import { useState } from 'react';

const TicTacToe= ()=>{
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    function handleClick(i) {

        if(squares[i] || calculateWinner(squares)){
            return;
        }
        const nextSquares = squares.slice();
        if (xIsNext) {
            nextSquares[i] = "X";
          } else {
            nextSquares[i] = "O";
          }
        setSquares(nextSquares);
        setXIsNext(!xIsNext);
    }
    const player=xIsNext?"X":"O";
    const won= calculateWinner(squares)
    const winner = won? "Winner :"+won : "";
    return (<>
        <h1>TicTacToe Game</h1>
        <div className='status'>
            <p>Next Player : {player}</p>
        </div>
        <div className="board-row">
            <button data-testid="btn1" id="btn0" className='square' onClick={()=>handleClick(0)}>{squares[0]}</button>
            <button className='square' id="btn1" onClick={()=>handleClick(1)}>{squares[1]}</button>
            <button className='square' id="btn2" onClick={()=>handleClick(2)}>{squares[2]}</button>
        </div>
        <div className="board-row">
            <button className='square' id="btn3" onClick={()=>handleClick(3)}>{squares[3]}</button>
            <button className='square' id="btn4" onClick={()=>handleClick(4)}>{squares[4]}</button>
            <button className='square' id="btn5" onClick={()=>handleClick(5)}>{squares[5]}</button>
        </div>
        <div className="board-row">
            <button className='square' id="btn6" onClick={()=>handleClick(6)}>{squares[6]}</button>
            <button className='square' id="btn7" onClick={()=>handleClick(7)}>{squares[7]}</button>
            <button className='square' id="btn8" onClick={()=>handleClick(8)}>{squares[8]}</button>
        </div>
        <h4>{winner}</h4>

    </>);
}

export default TicTacToe;

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