import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/'></Route>
        <Route path='/home'></Route>
      </Routes>
    </div>
  );
}

export default App;
