import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Landing from './Landing';
import Dashboard from './Dashboard';
import Plan from './Plan';
import Add from './Add';
import Quiz from './Quiz';
import Resources from './Resources';
import Profile from './Profile';
import About from './About';
import Contact from './Contact';
import Noti from './Noti';
import Login from './Login';
import Signup from './Signup';
import Pass from './Pass';
import Article from './Article';
import Start from './Start';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Landing />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Pass" element={<Pass />} />
          
          {/* Dashboard & App Routes */}
          <Route path="/Landing" element={<Landing />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Plan" element={<Plan />} />
          <Route path="/Add" element={<Add />} />
          <Route path="/Quiz" element={<Quiz />} />
          <Route path="/Start" element={<Start />} />
          <Route path="/Resources" element={<Resources />} />
          <Route path="/Article" element={<Article />} />
          
          {/* Profile & Info Routes */}
          <Route path="/Profile" element={<Profile />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Noti" element={<Noti />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;