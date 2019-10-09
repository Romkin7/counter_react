import React, { Component } from "react";
import Circle from "../components/Circle";

class Counter extends Component{
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            backgroundColor: "grey"
        };
    };

    resetCounter = () => {
        this.setState({counter: 0, backgroundColor: "grey"});
    }

    clickHandler = (operator) => {
        if(operator === "+"){
            this.setState({
                counter: this.state.counter + 1,
                backgroundColor: (this.state.counter + 1) % 10 == 0? "orange" : (this.state.counter + 1) %2 === 0 ? "violet" : "red"
            });
        } else {
            this.setState({
                counter: this.state.counter > 0 ? this.state.counter - 1 : 0,
                backgroundColor: (this.state.counter - 1) <= 0 ? "grey" : (this.state.counter - 1) % 10 == 0? "orange" : (this.state.counter - 1) %2 === 0 ? "violet" : "red"
            });
        }
    };

    render() {
        const { counter, backgroundColor } = this.state;
        return (
            <main>
                <Circle counter={counter} backgroundColor={backgroundColor}></Circle>
                <aside>
                    <button className="add" type="submit" onClick={() => this.clickHandler("+")}>+1</button>
                    <button className="substract" type="submit" onClick={() => this.clickHandler("-")}>-1</button>
                    <button className="reset" type="reset" onClick={this.resetCounter}>Reset</button>
                </aside>
            </main>
        );
    }
}

export default Counter;