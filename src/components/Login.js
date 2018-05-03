import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { login } from '../actions';
import axios from 'axios';
import './Landing.css';

class Login extends React.Component {
 constructor(props) {
   super(props);
   this.state = {
     username: '',
     password: '',
   };
   this.handleChange = this.handleChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
 }

 handleChange(event) {
   const { name, value } = event.target;
   this.setState({ [name]: value });
 }

 handleSubmit(event) {
   event.preventDefault();
   const { username, password } = this.state;
   axios.post('https://radiant-reef-10640.herokuapp.com/api/user/login', { username, password })
    .then(res => {
      const { username, email } = res.data.user;
      window.localStorage.accessToken = res.data.token;
      this.props.login(username, email);
      this.props.history.push('/notes');
    })
    .catch(err => {
      console.error(err);
    });
 }

 render() {
   return (
     <div className="landingContainer">
      <h1 className="landingHeader">Lambda<br />Notes</h1>
      <div className="landingFormContainer">
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <legend>Login</legend>
            <p>Username:</p>
            <input onChange={this.handleChange} type="text" name="username" />
            <br /><p>Password:</p>
            <input onChange={this.handleChange} type="password" name="password" />
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

export default connect(mapStateToProps, { login })(withRouter(Login));
