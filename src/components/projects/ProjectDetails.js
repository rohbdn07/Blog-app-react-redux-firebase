import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

const ProjectDetails = (props) => {
  const { project } = props;
  if (project) {
    // console.log(props);
    return (
      <div className='container section project-details'>
        <div className='card z-depth-0 '>
          <div className='card-content gery-text-darken-3'>
            <span className='cart-title'> {project.title}</span>
            <p>{project.content}</p>
          </div>

          <div className='card-action grey ligthen-4 black-text'>
            <div>
              Posted by {project.authorFirstName} {project.authorLastname}
            </div>
            <div>26 august, 2am</div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className='container center'>
        <p> Loading page...</p>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;
  return {
    project: project,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "projects" }])
)(ProjectDetails);
