import React from 'react';
import { useSwipeable } from 'react-swipeable';
import './index.css';

const JobCard = ({ job, onClick, onRightSwipe, onLeftSwipe }) => {
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => onLeftSwipe(job),
    onSwipedRight: () => onRightSwipe(job),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  return (
    <div {...swipeHandlers} className="job-card" onClick={onClick}>
      <h3>{job.title}</h3>
      <p><strong>Location:</strong> {job.job_location_slug}</p>
      <p><strong>Salary:</strong> {job.salary_max}</p>
      <p><strong>Phone:</strong> {job.whatsapp_no}</p>
    </div>
  );
};

export default JobCard;
