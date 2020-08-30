import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { connect } from "react-redux";

const Navbar = (props) => {
  // const { auth } = props;
  // console.log(auth);
  const links = props.auth.uid ? <SignedInLinks /> : <SignedOutLinks />;
  return (
    <div className='navbar-fixed'>
      <nav className='nav-wrapper blue  draken-3'>
        <div className='container'>
          <Link to='/' className='brand-logo left'>
            EventPost
          </Link>
          {links}
        </div>
      </nav>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};
export default connect(mapStateToProps)(Navbar);
