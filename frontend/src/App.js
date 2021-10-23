import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import './App.css';
import Google from './GoogleMaps/Google';

function App() {
  return (
    <div className="App">
        <div>Hello World</div>
        <Google />
      <Navbar />
    </div>
  );
}

export default App;