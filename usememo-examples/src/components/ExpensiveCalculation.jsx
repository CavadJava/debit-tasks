import React from 'react';
import { useMemo } from "react";

const expensiveCalculation = () => {
    console.log("Expensive calculation started");

    const [count, setCount] = React.useState(0);
    const [todos, setTodos] = React.useState([]);

    const calculationExpensive = (count) => {
        console.log("Calculating...");
        for (let i = 0; i < 10000; i++) {
            count += 1;
        }
        return count;
    };

    const calculation = useMemo(() => calculationExpensive(count), [count]);

    return (
        <>
            <div>
                {
                    todos.map((todo, index) => (
                        <p key={index}>{todo}</p>
                    ))
                }
                <button onClick = {() => setTodos([...todos, "New Todo"])}>Add Todo</button>
            </div>
            <div>
                {count}
                <div>Expensive Calculation: {calculation}</div>
                <button onClick = {() => setCount((c)=>c + 1)}>+</button>
                {calculation}
            </div>
        </>
    )
}
export default expensiveCalculation;

