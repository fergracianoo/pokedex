import React from 'react';
import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import Pokemon from './pages/Pokemon';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/pokemon/:pokemon" element={<Pokemon/>}></Route>
      <Route
        path="*"
        element={<Home/>}
      />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
