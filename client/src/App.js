import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

//components
import Hero from './components/Hero';
import Error404 from './components/Error404';

//css files
import './App.css';
import './output.css';

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path='*' element={<Error404 />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App