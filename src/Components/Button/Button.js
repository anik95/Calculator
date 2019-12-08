import React from 'react'
import MdBackspace from 'react-icons/lib/md/backspace'

import './button.css'

function button(props) {
    return (
        <div 
            className={
                `button-tile 
                ${props.numberOfTiles === 2 && 'two-tiles'}
                ${['+', '-', '/', '*', '='].includes(props.value) && 'operator'}`
            }
            onClick={() => props.clickHandler(props.value)}
        >
            <span>{props.value === 'backspace' ? <MdBackspace /> : props.value}</span>
        </div>
    )
}

export default button