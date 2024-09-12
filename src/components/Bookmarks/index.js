// src/components/Bookmarks.js
import React, { useState, useEffect } from 'react';
import JobCard from '../JobCard';


const Bookmarks = ({ onJobSelect }) => {
  const [bookmarkedJobs, setBookmarkedJobs] = useState([]);

  useEffect(() => {
    const loadBookmarks = () => {
      const storedBookmarks = JSON.parse(localStorage.getItem('bookmarkedJobs')) || [];
      setBookmarkedJobs(storedBookmarks);
    };

    loadBookmarks();
  }, []);

  return (
    <div className="bookmarks">
      {bookmarkedJobs.length > 0 ? (
        bookmarkedJobs.map(job => (
          <JobCard
            key={job.id}
            job={job}
            onClick={() => onJobSelect(job)}
          />
        ))
      ) : (
        <p>No jobs bookmarked yet</p>
      )}
    </div>
  );
};

export default Bookmarks;
