import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

//components
import Hero from './components/Hero';

//css files
import './App.css';
import './output.css';

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hero />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App