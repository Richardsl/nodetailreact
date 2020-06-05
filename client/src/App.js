import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  
  const [apiResponse, setApiResponse] = useState("")

  const callAPI = () => {
    fetch("http://localhost:3001/testAPI")
        .then(res => res.text())
        .then(res => setApiResponse(res))
        .catch(err=>err)
  }
  React.useEffect(() => {
    callAPI();
    return () => {
      
    }
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p className="App-intro">{apiResponse}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
