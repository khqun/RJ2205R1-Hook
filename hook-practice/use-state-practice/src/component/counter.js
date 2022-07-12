import { useState } from 'react';
function Counter() {
    let [counter, setCounter] = useState(5);
    const handler = () => {
        setCounter(counter + 1)
    }
    return (
        <div>
            <h1>Count: {counter}</h1>
            <button onClick={handler}>Increase</button>
        </div>
    )
}
export default Counter