import React from "react";
import moment from "moment";

const ProjectSummary = ({ project }) => {
  return (
    <div className='card z-depth-0 project-summary bg-color'>
      <div className='card-content gery-text-darken-3'>
        <span className='cart-title'>{project.title}</span>
        <p>
          Posted by {project.authorFirstName}
          {project.authorLastName}
        </p>
        <p className='grey-text'>
          {moment(project.createdAt.toDate()).calendar()}
        </p>
      </div>
    </div>
  );
};
export default ProjectSummary;
