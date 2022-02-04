import React from 'react';
import { Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './styles/main.scss';

import Home  from './container/Home';



const App = () => {
  return (
    <Routes>
    < Route path='/' element={<Home />} />
    </Routes> 
  );
}

export default App;
