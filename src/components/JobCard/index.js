import React, { useState } from 'react';
import "./index.css"

const JobCard = ({ job, onClick }) => {
  const [isBookmarked, setIsBookmarked] = useState(() => {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarkedJobs')) || [];
    return bookmarks.some(b => b.id === job.id);
  });

  const handleBookmark = () => {
    let bookmarks = JSON.parse(localStorage.getItem('bookmarkedJobs')) || [];
    if (isBookmarked) {
      bookmarks = bookmarks.filter(b => b.id !== job.id);
    } else {
      bookmarks.push(job);
    }
    localStorage.setItem('bookmarkedJobs', JSON.stringify(bookmarks));
    setIsBookmarked(!isBookmarked);
  };

  return (
    <div className="job-card" onClick={onClick}>
      <h3>{job.title}</h3>
      <p><strong>Location:</strong> {job.job_location_slug}</p>
      <p><strong>Salary:</strong> {job.salary_max}</p>
      <p><strong>Phone:</strong> {job.whatsapp_no}</p>
      <button className={`bookmark-btn ${isBookmarked ? 'bookmarked' : ''}`} onClick={e => {
        e.stopPropagation();
        handleBookmark();
      }}>
        {isBookmarked ? 'Unbookmark' : 'Bookmark'}
      </button>
    </div>
  );
};

export default JobCard;
