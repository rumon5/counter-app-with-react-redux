import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount((count) => count +1)
    }

    return (
        <div>
            <h2>Count : {count}</h2>
            <button onClick={handleIncrement}>Increment</button>
        </div>
    );
};

export default Counter;