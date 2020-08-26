import React from "react";
import { NavLink } from "react-router-dom";

const SignedInLinks = () => {
  return (
    <ul className='nav-wrapper right'>
      <li>
        <NavLink to='/'>New Project</NavLink>
      </li>
      <li>
        <NavLink to='/'>LogOut</NavLink>
      </li>
      <li>
        <NavLink to='/' className='btn btn-floating pink lighten-1'>
          RB
        </NavLink>
      </li>
    </ul>
  );
};
export default SignedInLinks;
