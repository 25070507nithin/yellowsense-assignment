import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import './index.css'; 

const JobCard = ({ job, onLeftSwipe, onRightSwipe }) => {
  const [swipeDirection, setSwipeDirection] = useState('');
  const [isSwiping, setIsSwiping] = useState(false);

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      setSwipeDirection('left');
      setIsSwiping(true);
      setTimeout(() => {
        onLeftSwipe(job);
        setSwipeDirection('');
        setIsSwiping(false);
      }, 300); 
    },
    onSwipedRight: () => {
      setSwipeDirection('right');
      setIsSwiping(true);
      setTimeout(() => {
        onRightSwipe(job);
        setSwipeDirection('');
        setIsSwiping(false);
      }, 300); 
    },
    preventDefaultTouchmoveEvent: true,
    trackMouse: true, 
  });

  return (
    <div
      {...handlers}
      className={`job-card ${isSwiping ? `swipe-${swipeDirection}` : ''}`}
    >
      <h3>{job.title}</h3>
      <p><strong>Location:</strong> {job.job_location_slug}</p>
      <p><strong>Salary:</strong> {job.salary_max}</p>
      <p><strong>Phone:</strong> {job.whatsapp_no}</p>
    </div>
  );
};

export default JobCard;
