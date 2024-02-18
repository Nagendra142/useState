import React,{useState} from 'react';

export const App=()=>{
    const [count,setCount]=useState(0);
    function Increment(){
        setCount(count+1);
    }
    function Decrement(){
        setCount(count-1);
    }
    return (
        <>
        <button onClick={Increment}>+</button>
        <span>{count}</span>
        <button onClick={Decrement}>-</button>
        </>
    )
}