import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import './App.css';
import Google from './GoogleMaps/Google';
import LoginPage from './components/LoginPage/LoginPage';

function App() {
  return (
    <div className="App">
        {/* <div>Hello World</div> */}
        {/* <Google />
      <Navbar /> */}
      <LoginPage/>
    </div>
  );
}

export default App;