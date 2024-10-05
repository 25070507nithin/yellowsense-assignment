import React, { useState, useEffect } from 'react';
import JobCard from '../JobCard';
import './index.css';

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://testapi.getlokalapp.com/common/jobs?page=${page}`);
        const data = await response.json();
        setJobs((prevJobs) => [...prevJobs, ...data.results]);
        setHasMore(data.results.length > 0);
      } catch (err) {
        setError('Failed to fetch jobs');
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, [page]);

  const handleRightSwipe = (job) => {
    let bookmarks = JSON.parse(localStorage.getItem('bookmarkedJobs')) || [];
    if (!bookmarks.some((b) => b.id === job.id)) {
      bookmarks.push(job);
      localStorage.setItem('bookmarkedJobs', JSON.stringify(bookmarks));
    }
  };

  const handleLeftSwipe = (job) => {
    setJobs((prevJobs) => prevJobs.filter((j) => j.id !== job.id));
  };

  const handleScroll = (event) => {
    const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;
    if (scrollHeight - scrollTop <= clientHeight + 50 && hasMore && !loading) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <div className="jobs" onScroll={handleScroll}>
      {jobs.map((job) => (
        <JobCard
          key={job.id}
          job={job}
          onRightSwipe={handleRightSwipe}
          onLeftSwipe={handleLeftSwipe}
        />
      ))}
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!hasMore && <p className="no-jobs">No more jobs available</p>}
    </div>
  );
};

export default Jobs;
