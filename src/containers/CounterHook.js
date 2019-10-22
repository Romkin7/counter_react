import React, { useState } from 'react';
import './CounterHook.css';

const CounterHook = () => {
    const [counter, setCounter] = useState(0);

    const addHandler = () => {
        setCounter(counter+1);
    }
    const removeHandler = () => {
        setCounter(counter > 0 ? counter-1 : 0)
    }
    const resetHandler = () => {
        setCounter(0);
    }

let test =
    counter === 0 ? "grey"
    : counter % 10 === 0 ? "orange"
    : counter % 2 === 0 ? "red"
    : "blue"

    return (
        <div>
            <div className={test + " displayCounter"}><p>{counter}</p></div>
            <div className="buttonContainer">
                <button className="buttons addOne" onClick={addHandler}><p>Add one</p></button>
                <button className="buttons removeOne" onClick={removeHandler}><p>Remove one</p></button>
                <button className="buttons reset" onClick={resetHandler}><p>Reset</p></button>
            </div>
        </div>
    );
}
export default CounterHook;
