// src/components/JobDetails.js
import React from 'react';


const JobDetails = ({ job, onClose }) => {
  if (!job) return null;

  return (
    <div className="job-details">
      <button className="back-button" onClick={onClose}>Back</button>
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
