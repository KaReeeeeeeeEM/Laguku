import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

//components
import Hero from './components/Home';
import Error404 from './components/Error404';

//pages
import SignIn from './auth/SignIn';
import SignUp from './auth/SignUp';
import Choices from './options/Choices';
import Dashboard from './options/Dashboard';
import SongUploads from './views/SongUploads';
import AlbumUploads from './views/AlbumUploads';

//testing comoonent
import Test from './components/Test';

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
          <Route path="/options" element={<Choices />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/uploads/songs" element={<SongUploads />} />
          <Route path="/uploads/albums" element={<AlbumUploads />} />
          <Route path="/test" element={<Test />} />
          <Route path='*' element={<Error404 />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App