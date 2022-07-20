import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrementCounter, incrementCounter, resetCounter } from '../services/actions/counterAction';

const Counter = () => {
    const count = useSelector((state) => state.count);
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(incrementCounter())
    }

    const handleDecrement = () => {
        dispatch(decrementCounter())
    }
    const handleReset = () => {
        dispatch(resetCounter())
    }

    return (
        <div>
            <h2 className='text-2xl my-5 '>Count : {count}</h2>
            <button className='btn btn-active mr-2' onClick={handleIncrement}>Increment</button>
            <button className='btn btn-active mr-2' onClick={handleReset}>Reset</button>
            <button className='btn btn-active mr-2' onClick={handleDecrement}>Decrement</button>
        </div>
    );
};

export default Counter;