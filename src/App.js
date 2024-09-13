import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom';
import Jobs from './components/Jobs';
import Bookmarks from './components/Bookmarks';
import JobDetails from './components/JobDetails';
import './App.css';

const App = () => {
  
  return (  
    <Router>
      <div>
        <Routes>
          <Route path="/jobs" element={<Jobs  />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
          <Route path="/job-details" element={<JobDetails   />} />
          <Route path="/" element={<Jobs />} />
        </Routes>
        <nav className="bottom-nav">
            <Link to="/jobs" className='nav-link'>Jobs</Link>
            <Link to="/bookmarks" className='nav-link'>Bookmarks</Link>
        </nav>
      </div>
    </Router>
    
  );
};

export default App;

