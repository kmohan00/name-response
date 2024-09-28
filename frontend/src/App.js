import React, { useState} from 'react';

function App() {
    const [name, setName] = useState('');
    const [response, setResponse] = useState('');

    const handleEnter = async (e) => {
        e.preventDefault();
        console.log('Entered name: ' + name);
        console.log(`${process.env.REACT_APP_BACKEND_URL}/api/response`);
        const output = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/response`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({name}),
        });
        const value = await output.json();
        setResponse(value.message);
        console.log('Returned message: ' + value.message);
    };

    return (
        <div className="App">
            <h1>Enter Your Name:</h1>
            <form onSubmit={handleEnter}>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Your name goes here'></input>
                <button type="enter">Enter</button>
            </form>
            <h2>{response}</h2>
            {/* {response && <h2>{response}</h2>} */}
        </div>
    );
}

export default App;