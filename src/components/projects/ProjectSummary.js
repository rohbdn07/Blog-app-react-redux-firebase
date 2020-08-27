import React from "react";

const ProjectSummary = ({ project }) => {
  return (
    <div className='card z-depth-0 project-summary'>
      <div className='card-content gery-text-darken-3'>
        <span className='cart-title'>{project.title}</span>
        <p>Posted by the Rohit Bhandari</p>
        <p className='grey-text'>26rd august , 2am</p>
      </div>
    </div>
  );
};
export default ProjectSummary;
