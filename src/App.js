// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom';
import Jobs from './components/Jobs';
import Bookmarks from './components/Bookmarks';
import JobDetails from './components/JobDetails';
import './App.css';

const App = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  const handleJobSelect = (job) => {
    setSelectedJob(job);
  };

  const handleCloseDetails = () => {
    setSelectedJob(null);
  };

  return (
    
    <Router>
      <div className="app">
        <nav className="bottom-nav">
          <Link to="/jobs">Jobs</Link>
          <Link to="/bookmarks">Bookmarks</Link>
        </nav>
        <Routes>
          <Route path="/jobs" element={<Jobs onJobSelect={handleJobSelect} />} />
          <Route path="/bookmarks" element={<Bookmarks onJobSelect={handleJobSelect} />} />
          <Route path="/job-details" element={<JobDetails job={selectedJob} onClose={handleCloseDetails} />} />
          <Route path="/" element={<Jobs onJobSelect={handleJobSelect} />} />
        </Routes>
      </div>
    </Router>
    
  );
};

export default App;

