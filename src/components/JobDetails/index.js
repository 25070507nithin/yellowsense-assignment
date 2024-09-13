import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const JobDetails = () => {
  const location = useLocation(); 
  const navigate = useNavigate(); 
  const job = location.state?.job; 

  if (!job) {
    return <p>No job details available</p>; 
  }

  return (
    <div >
      <button  onClick={() => navigate(-1)}>Back</button>
      <h2>{job.title}</h2>
      <p><strong>Company:</strong> {job.company}</p>
      <p><strong>Location:</strong> {job.location}</p>
      <p><strong>Salary:</strong> {job.salary}</p>
      <p><strong>Description:</strong> {job.description}</p>
      <p><strong>Requirements:</strong> {job.requirements}</p>
      <a href={`tel:${job.phone}`}>Call HR</a>
    </div>
  );
};

export default JobDetails;
