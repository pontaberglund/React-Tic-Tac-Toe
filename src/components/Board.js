import { useState } from "react"
import Square from "./Square"

export default function Board() {

    const [values, setValues] = useState(Array(9).fill(null));
    const [player, setPlayer] = useState('X');
    const [title, setTitle] = useState('Player X');

    function winner(winnerArray) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]

        for(let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if(winnerArray[a] && winnerArray[a] == winnerArray[b] && winnerArray[a] == winnerArray[c])
                return winnerArray[a];
        }
        var nullCounts = 0;
        for(let i = 0; i < winnerArray.length; i++) {
            if(winnerArray[i] == null)
                nullCounts++
        }
        if(nullCounts == 0)
            return 'draw'
        return null
    }

    function handleClick(i) {
        const newArray = values.slice()
        if(newArray[i] == null && (title == "Player X" || title == "Player O")) {
            if(player == 'X') {
                newArray[i] = 'X'
                let p = winner(newArray)
                console.log(p);
                if(p == 'X') {
                    setTitle('X wins!')
                } else if(p == 'O') {
                    setTitle('O wins!')
                } else if(p == 'draw')
                    setTitle("It's a draw!")
                else {
                    setTitle('Player O')
                    setPlayer('O')
                }
                
            } else {
                newArray[i] = 'O';
                let p = winner(newArray)
                console.log(p);
                if(p == 'X') {
                    setTitle('X wins!')
                } else if(p == 'O') {
                    setTitle('O wins!')
                } else if (p == 'draw')
                    setTitle("It's a draw!")
                else {
                    setTitle('Player X')
                    setPlayer('X')
                }
            }
            setValues(newArray)
        }
    }

    return (
        <div className="board">
            <h1 className = "title">{title}</h1>
            <div className="row">
                <Square value = {values[0]} setFunction = {() => handleClick(0)}/>
                <Square value = {values[1]} setFunction = {() => handleClick(1)}/>
                <Square value = {values[2]} setFunction = {() => handleClick(2)}/>
            </div>
            <div className="row">
                <Square value = {values[3]} setFunction = {() => handleClick(3)}/>
                <Square value = {values[4]} setFunction = {() => handleClick(4)}/>
                <Square value = {values[5]} setFunction = {() => handleClick(5)}/>
            </div>
            <div className="row">
                <Square value = {values[6]} setFunction = {() => handleClick(6)}/>
                <Square value = {values[7]} setFunction = {() => handleClick(7)}/>
                <Square value = {values[8]} setFunction = {() => handleClick(8)}/>
            </div>
        </div>
    )
}