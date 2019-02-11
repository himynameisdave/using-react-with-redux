import React, { useState } from 'react';
import useConsole from './hooks/use-console.js';


const App = () => {
    const [count, updateCount] = useState(1);

    const onButtonClick = () => {
        updateCount(count + 1);
    };

    useConsole(count);

    return (
        <div style={{ textAlign: 'center', margin: '2rem auto' }}>
            {count}
            <button onClick={onButtonClick}>
                Add 1
            </button>
        </div>
    );
}

export default App;
