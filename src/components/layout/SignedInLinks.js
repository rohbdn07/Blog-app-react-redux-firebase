import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";

const SignedInLinks = (props) => {
  return (
    <ul className='nav-wrapper right'>
      <li>
        <NavLink to='/create'>New Project</NavLink>
      </li>
      <li>
        <a onClick={props.signOut} to='/'>
          LogOut
        </a>
      </li>
      <li>
        <NavLink to='/' className='btn btn-floating pink lighten-1'>
          RB
        </NavLink>
      </li>
    </ul>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};
export default connect(null, mapDispatchToProps)(SignedInLinks);
