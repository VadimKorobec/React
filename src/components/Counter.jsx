import React, { useState } from "react";

export const Counter = () => {
    const [count, setCounter] = useState(0)
    
    const increment = () => {
        setCounter(count +1)
    }

    const decrement = () => {
        setCounter(count - 1)
        
    }
    return <div>
        <h1>{ count}</h1>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
    </div>
}