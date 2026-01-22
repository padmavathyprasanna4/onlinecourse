import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OfferedCourses from './pages/OfferedCourses';
import VideoLessons from './pages/VideoLessons';

import Quizzes from './pages/Quizzes';
import './App.css';  // Global styling

function App() {
  return (
    <Router>
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<OfferedCourses />} />
          <Route path="/video-lessons" element={<VideoLessons />} />
         
          <Route path="/quizzes" element={<Quizzes />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
