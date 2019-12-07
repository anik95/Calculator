import React, { Fragment } from 'react'
import './displayHOC.css'

const displayHOC = (WrappedButtonPannel) => {
    console.log('inside display hoc')
    return (
        <div>
            <div className="display">
                result
            </div>
            <WrappedButtonPannel />
        </div>
    )   
}

export default displayHOC