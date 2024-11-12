import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ProtectedElement from './Auth_files/ProtectedElement';
import { AuthProvider } from  './Auth_files/AuthProvider';

import Home from './Home';
import Navbar from './NavBar';
import Login from './Login';
import SignUp from './SignUp';
import AboutUs from './Aboutus';
import Demo from './Demo';

function App() {
  return (
      <AuthProvider>
        <Router>
          <Routes>

          <Route path="/home" element={<Home />}/>
                <Route path="/demo" element={<Demo />}/>
                <Route path="/navbar" element={<Navbar />}/>
                <Route path="/aboutus" element={<AboutUs />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/" element={<Demo />}/>
                <Route path="/signup" element={<SignUp />}/>
                    
            </Routes>
      </Router>
    </AuthProvider>
      );

};

export default App;