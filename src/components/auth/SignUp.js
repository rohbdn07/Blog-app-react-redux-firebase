import React, { Component } from "react";
import { connect } from "react-redux";
import { signUp } from "../../store/actions/authActions";
import { Redirect } from "react-router-dom";

class SignUp extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.props); //this.props represent the inital state(written above)
    console.log(this.state);
  };
  render() {
    const { authError, auth } = this.props;
    if (auth.uid) return <Redirect to='/' />;
    return (
      <div>
        <div className='container '>
          <form onSubmit={this.handleSubmit} className='white'>
            <h5 className='grey-text text-darken-3'>Sign Up</h5>
            <div className='input-field'>
              <label htmlFor='first name'>First Name</label>
              <input type='text' id='firstName' onChange={this.handleChange} />
            </div>
            <div className='input-field'>
              <label htmlFor='last name'>Last Name</label>
              <input type='text' id='lastName' onChange={this.handleChange} />
            </div>
            <div className='input-field'>
              <label htmlFor='email'>Email</label>
              <input type='email' id='email' onChange={this.handleChange} />
            </div>
            <div className='input-field'>
              <label htmlFor='password'> Password</label>
              <input
                type='password'
                id='password'
                onChange={this.handleChange}
              />
            </div>
            <div className='input-field'>
              <button className='btn pink lighten-1 z-depth-0'>Sign Up</button>
              <div className='red-text center'>
                {authError ? <p>{authError}</p> : null}
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError,
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
