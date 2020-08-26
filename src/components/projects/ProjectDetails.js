import React from "react";

const ProjectDetails = (props) => {
  const id = props.match.params.id;
  return (
    <div className='container section project-details'>
      <div className='card z-depth-0 '>
        <div className='card-content gery-text-darken-3'>
          <span className='cart-title'>Project title- {id}</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
            eaque dicta quos maiores architecto ullam pariatur possimus saepe
            delectus natus veniam iste placeat debitis deleniti eligendi magnam
            maxime. Consequatur, numquam!
          </p>
        </div>

        <div className='card-action grey ligthen-4 black-text'>
          <div>Posted by Rohit Bhandari</div>
          <div>26 august, 2am</div>
        </div>
      </div>
    </div>
  );
};
export default ProjectDetails;
