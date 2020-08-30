import React from "react";
import moment from "moment";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";

const ProjectDetails = (props) => {
  const { project, auth } = props;

  if (!auth.uid) return <Redirect to='/signin' />;
  if (project) {
    // console.log(props);
    return (
      <div className='container section project-details bg-color'>
        <div className='card z-depth-0 '>
          <div className='card-content gery-text-darken-3'>
            <span className='cart-title'> {project.title}</span>
            <p>{project.content}</p>
          </div>

          <div className='card-action grey ligthen-4 black-text'>
            <div>
              Posted by {project.authorFirstName} {project.authorLastName}
            </div>
            <div> {moment(project.createdAt.toDate()).calendar()}</div>
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
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "projects" }])
)(ProjectDetails);
