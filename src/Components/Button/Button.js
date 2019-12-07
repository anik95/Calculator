import React from 'react'
import './button.css'

function button(props) {
    return (
        <div className={`button-tile ${props.numberOfTiles === 2 && 'two-tiles'}`}>
            <span>{props.value}</span>
        </div>
    )
}

export default button