import React, { Component } from 'react'

import Button from './../Button/Button'
import DisplayHOC from './../DisplayHOC/DisplayHOC'

import './buttonPanel.css'

const buttonPanel = (props) => {
    const buttons = [
        'AC', 'backspace', '/', '7', '8', '9', '*', 
        '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='
    ]

    return (
        <div className="buttonPanel">
            {
                buttons.map(button => {
                    return <Button 
                        numberOfTiles={button === '0' || button === 'backspace' ? 2 : 1}
                        value={button}
                        clickHandler={props.clickHandler}
                    />
                })   
            }
        </div>
    )
}

export default DisplayHOC(buttonPanel)