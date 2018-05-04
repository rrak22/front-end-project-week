import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import axios from 'axios';
import { login } from '../actions';
import './Landing.css';

class Signup extends React.Component {
 constructor(props) {
   super(props);
   this.state = {
     username: '',
     password: '',
     email: '',
   };

 }

 handleChange = (event) => {
   const { name, value } = event.target;
   this.setState({ [name]: value });
 };

 handleSubmit = (event) => {
   event.preventDefault();
   const { username, password, email } = this.state;
   const user = {
     username: username,
     password: password,
     email: email,
   }
   console.log(user);
   axios.post('https://radiant-reef-10640.herokuapp.com/api/user/register', user)
    .then(res => {
      window.localStorage.accessToken = res.data.token;
      this.props.login(username, email);
      this.props.history.push('/notes');
    })
    .catch(err => {
      console.error(err);
    });
 };

 render() {
   return (
     <div className="landingContainer">
      <h1 className="landingHeader">Lambda<br />Notes</h1>
      <div className="landingFormContainer">
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <legend>Registration</legend>
            <p>Username:</p>
            <input onChange={this.handleChange} type="text" name="username" />
            <br /><p>Password:</p>
            <input onChange={this.handleChange} type="password" name="password" />
            <br /><p>Email:</p>
            <input onChange={this.handleChange} type="email" name="email" />
            <br /><input type="submit" value="Submit" />
          </fieldset>
        </form>
      <div className="landingButtonContainer">
        <button className="landingButton" onClick={() => { this.props.history.push('/signup') }}>Signup</button>
        <button className="landingButton" onClick={() => { this.props.history.push('/login') }}>Login</button>
        </div>
      </div>
    </div>
  );
  }
}

const mapStateToProps = (state) => ({
  data: state,
});

export default connect(mapStateToProps, { login })(withRouter(Signup));
