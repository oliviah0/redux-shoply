import React from 'react';
import './App.css';
import Routes from "./components/Routes";
import NavBar from "./components/NavBar";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes />
    </div>
  );
}

export default App;
