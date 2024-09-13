import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import JobCard from '../JobCard';
import "./index.css"

const Jobs = ({ onJobSelect }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://testapi.getlokalapp.com/common/jobs?page=${page}`);
        const data = await response.json();
        setJobs(prevJobs => [...prevJobs, ...data.results]);
        setHasMore(data.results.length > 0);
      } catch (err) {
        setError('Failed to fetch jobs');
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, [page]);
  
  const handleJobSelect = (job) => {
    
    navigate('/job-details', { state: { job } });
  };

  const handleScroll = (event) => {
    const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;
    if (scrollHeight - scrollTop <= clientHeight + 50 && hasMore && !loading) {
      setPage(prevPage => prevPage + 1);
    }
  };

  return (
    <div className="jobs" onScroll={handleScroll}>
      {jobs.map(job => (
        <JobCard
          key={job.id}
          job={job}
          onClick={() => handleJobSelect(job)} 
        />
      ))}
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!hasMore && <p className='no-jobs'>No more jobs available</p>}
    </div>
  );
};

export default Jobs;
