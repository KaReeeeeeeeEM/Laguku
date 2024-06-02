import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

//components
import Hero from './components/Home';
import Error404 from './components/Error404';

//pages
import SignIn from './auth/SignIn';
import SignUp from './auth/SignUp';

//css files
import './App.css';
import './output.css';

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/auth/signup" element={<SignUp />} />
          <Route path="/auth/signin" element={<SignIn />} />
          <Route path='*' element={<Error404 />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App