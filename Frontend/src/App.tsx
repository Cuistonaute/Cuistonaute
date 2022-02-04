import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './styles/main.scss';

import Home  from './container/Home';



const App = () => {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        < Route path='/' element={<Home />} />
      </Routes> 
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
