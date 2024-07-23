import React, { useEffect, useState } from 'react';
import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import MobilePage from './Pages/MobilePage';
import MobileSinglesPage from './singles/MobileSinglesPage';
import LoginSignup from './Pages/LoginSignup';
import Blank from './Pages/Blank';
import { auth } from './Firebase';
import BooksPage from './Pages/BooksPage';
import ComputersPage from './Pages/ComputersPage';
import ComputerSinglesPage from './singles/ComputerSinglesPage';

const App = () => {

  // const [presentUser, setPresentUser] = useState(null);
  // const navigate = useNavigate();
  // useEffect(() => {
  //   auth.onAuthStateChanged(user => {
  //     if (user) {
  //       setPresentUser({
  //         uid: user.uid,
  //         email: user.email
  //       });
  //       navigate('/'); // Redirect to landing page if user is logged in
  //     } else {
  //       setPresentUser(null);
  //       navigate('/loginSignUp'); // Redirect to blank page if no user is logged in
  //     }
  //   });
  // }, [navigate]);

  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/mobilepage' element={<MobilePage />} />
        <Route path='/bookspage' element={<BooksPage />} />
        <Route path='/computerspage' element={<ComputersPage />} />
        <Route path='/loginSignUp' element={<Blank />} />
        <Route path='/:id' element={<MobileSinglesPage />}/>
        <Route path='/:computerID' element={<ComputerSinglesPage />}/>
        <Route path='/blank' element={<Blank />} />
      </Routes>
    </>
  )
}

export default App;
