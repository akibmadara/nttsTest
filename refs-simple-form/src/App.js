import React, { useEffect, useRef } from 'react';
import './App.css';

function App() {

  const enterEmailRef = useRef(null);
  const enterPasswordRef = useRef(null);
  const submitRef = useRef(null);

  useEffect(() => {
    enterEmailRef.current.focus();
  }, [])

  const emailKeyDown = (e) => {
    if (e.key === "Enter") {
      enterPasswordRef.current.focus();
    }

  }
  const passKeyDown = (e) => {
    if (e.key === "Enter") {
      submitRef.current.focus();
    }

  }
  const submitKeyDown = () => {
    alert("Submitted")
  }

  return (
    <div className="App">
      <input type="text" onKeyDown={emailKeyDown} ref={enterEmailRef} placeholder="Enter Email"></input>
      <input type="password" onKeyDown={passKeyDown} ref={enterPasswordRef} placeholder="Enter Password"></input>
      <button onKeyDown={submitKeyDown} ref={submitRef}>Submit</button>
    </div>
  );
}

export default App;
