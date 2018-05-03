import React from 'react';
import { withRouter } from 'react-router';
import './Landing.css';

const Landing = ({ history }) => (
  <div className="landingContainer">
    <h1 className="landingHeader">Lambda<br />Notes</h1>
    <div className="landingButtonContainer">
      <button className="landingButton" onClick={() => { history.push('/signup') }}>Signup</button>
      <button className="landingButton" onClick={() => { history.push('/login') }}>Login</button>
    </div>
  </div>
);

export default withRouter(Landing);
