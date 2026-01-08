import { useState, useCallback } from 'react';

// Task 3: useCallback for Memoizing Functions
//     The useCallback hook is used to memoize functions and prevent unnecessary re-creations during re-renders. This is especially useful when passing functions as props to child components.
//     Example:
//     In the Counter component, the increment function is memoized to prevent re-rendering of the CounterButton component unnecessarily.
import { useState, useCallback } from 'react';

export const Counter = () => {
    const [count, setCount] = useState(0);

    // Memoize the increment function to prevent unnecessary re-renders
    const increment = useCallback(() => {
        setCount(prev => prev + 1);
    }, []);

    const decrement = useCallback(() => {
        setCount(prev => prev - 1);
    }, []);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
};
export const CounterApp = () => {
    console.log(`${label} button rendered`);
    return (
        <div style={{ padding: '20px' }}>
            <h1>Counter App</h1>
            <div style={{ marginBottom: '20px' }}>
                <h2>Counter 1</h2>
                <Counter />
            </div>
            <div style={{ marginBottom: '20px' }}>
                <h2>Counter 2</h2>
                <Counter />
            </div>
            <div>
                <h2>Counter 3</h2>
                <Counter />
            </div>
        </div>
    );
};