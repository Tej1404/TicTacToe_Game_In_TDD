import './TicTacToe.css'
import { useState } from 'react';
function Square({value, onSquareClick}){
    // const [value, setValue] = useState(null);

    // function handleClick() {
    //     setValue('X');
    // }
    return (<button data-testid="button1" id="btn" className="square" onClick={onSquareClick}>{value}</button>);
}

export default Square;