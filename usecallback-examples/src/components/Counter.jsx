import { useState, useCallback } from 'react';

// Task 3: useCallback for Memoizing Functions
//     The useCallback hook is used to memoize functions and prevent unnecessary re-creations during re-renders. This is especially useful when passing functions as props to child components.
//     Example:
//     In the Counter component, the increment function is memoized to prevent re-rendering of the CounterButton component unnecessarily.
export function Counter() {
    const [count, setCount] = useState(0);

    const increment = useCallback(() => {
        setCount(c => c + 1);
    }, [count]);

    const decrement = useCallback(() => {
        setCount(c => c - 1);
    }, [count]);
    return (
        <div>
            <p>Count: {count}</p>
            <CounterButton label="Increment" onClick={increment} />
            <CounterButton label="Decrement" onClick={decrement} />
        </div>
    );
}

function CounterButton({ label, onClick }) {
    console.log(`${label} button rendered`);
    return <button onClick={onClick}>{label}</button>;
}