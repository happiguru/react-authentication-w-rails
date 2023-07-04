import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import Registration from './components/auth/Registration';
import LoginForm from './components/auth/LoginForm';

const App = () => (

  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/register" element={<Registration />} />
      <Route path="/login" element={<LoginForm />} />
    </Routes>
  </BrowserRouter>
);

export default App;
