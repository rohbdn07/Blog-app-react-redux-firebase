import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { connect } from "react-redux";

const Navbar = () => {
  return (
    <div className='navbar-fixed'>
      <nav className='nav-wrapper blue  draken-3'>
        <div className='container'>
          <Link to='/' className='brand-logo left'>
            BlogPost
          </Link>
          <SignedInLinks />
          <SignedOutLinks />
        </div>
      </nav>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {};
};
export default connect(mapStateToProps)(Navbar);
