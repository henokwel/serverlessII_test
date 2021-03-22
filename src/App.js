 import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [msg, setMsg] = useState("Loading")
  useEffect(() => {
    console.log(process.env);
    
    fetch("api/getMsg")
      .then((res) => res.json())
      .then(data => setMsg(data.msg))
  })
  return (
    <div className="App">
      <header className="App-header">
        <p>{msg}</p>
        <p>{process.env.REACT_APP_API_KEY}</p>

      </header>
    </div>
  );
}

export default App;
