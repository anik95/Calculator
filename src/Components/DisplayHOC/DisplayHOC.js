import React, { Component } from 'react'
import { isFloat } from './../../Helpers/isFloat'
import './displayHOC.css'

const displayHOC = (WrappedButtonPannel) => {
    return class ComputedComponent extends Component {
        state = {
            operation: '',
            total: 0
        }

        clickHandler = (input) => {
            //clear everething for AC
            if (input === 'AC') {
                this.setState({
                    operation: '',
                    total: 0
                })
                return;
            }
            //clear last input for backspace
            if (input === 'backspace') {
                this.setState(previousState => {
                    return {
                        operation: previousState.operation.slice(0, previousState.operation.length -1)
                    }
                })
                return;
            }
            //handle operators
            if (['+', '-', '/', '*', '.', '='].includes(input)) {
                //ignore if first input is an operator
                if (this.state.operation === '') {
                    return
                }
                //if same operator is used twice dont allow multiple inputs
                if (this.state.operation[this.state.operation.length -1] === input) {
                    return
                }   
                //if different operators are used keep the last one  
                if (['+', '-', '/', '*', '.'].includes(this.state.operation[this.state.operation.length -1])) {
                    this.setState(previousState => {
                        return {
                            operation: previousState.operation.slice(0, previousState.operation.length -1)
                        }
                    })
                }
            }
            //update state property => operatios
            this.setState(previousState => {
                return {operation: `${previousState.operation}${input !== '=' ? input : ''}`}
            })
            //compute 
            if (input === '=') {
                if (['+', '-', '/', '*', '.'].includes(this.state.operation[this.state.operation.length -1])) {
                         this.setState(previousState => {
                        return {
                            operation: previousState.operation.slice(0, previousState.operation.length -1)
                        }
                    })
                }
                let result = eval(this.state.operation)
                this.setState(previousState => {
                    return {
                        operation: '',
                        total: isFloat(result) ? result.toFixed(2) : result
                    }
                })
            }

        }

        render () {
            return (
                <div>
                    <div className="display">
                        <div className="operation">
                            {this.state.operation}
                        </div>                        
                        <div className="total">
                            {this.state.total}
                        </div>
                    </div>
                    <WrappedButtonPannel clickHandler={this.clickHandler}/>
                </div>
            )   
        }
    }
}

export default displayHOC




