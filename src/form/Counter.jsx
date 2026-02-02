import { useState } from "react";

export default function Counter() {
    let [counter, setCounter] = useState(0);

    return (
        <div>
            <button 
            onClick={() => {
                setCounter(c => c + 1)
                setCounter(c => c + 1)
                setCounter(c => c + 1)
                console.log(counter)
            }}
            >
                increment
            </button>

            <h1>Counter : {counter}</h1>
        </div>
    )
}