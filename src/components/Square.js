import { useState } from "react"

export default function Square(props) {
    return (
        <button className="square" onClick={props.setFunction}>
            {props.value}
        </button>
    )
}