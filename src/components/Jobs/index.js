import React, { useState, useEffect } from 'react';
import JobCard from '../JobCard';
import './index.css';

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchJobs = async () => {
      const response = await fetch(`https://testapi.getlokalapp.com/common/jobs?page=${page}`);
      const data = await response.json();
      setJobs(prevJobs => [...prevJobs, ...data.results]);
    };
    fetchJobs();
  }, [page]);

  const handleLeftSwipe = (job) => {
    // Logic for dismissing the job
    setJobs(jobs.filter(j => j.id !== job.id)); // Removes the job from the list
    console.log('Job dismissed:', job.title);
  };

  const handleRightSwipe = (job) => {
    // Logic for bookmarking the job
    let bookmarks = JSON.parse(localStorage.getItem('bookmarkedJobs')) || [];
    if (!bookmarks.some(b => b.id === job.id)) {
      bookmarks.push(job);
      localStorage.setItem('bookmarkedJobs', JSON.stringify(bookmarks));
    }
    console.log('Job bookmarked:', job.title);
  };

  return (
    <div className="jobs-container">
      {jobs.map(job => (
        <JobCard
          key={job.id}
          job={job}
          onLeftSwipe={handleLeftSwipe}
          onRightSwipe={handleRightSwipe}
        />
      ))}
    </div>
  );
};

export default Jobs;
