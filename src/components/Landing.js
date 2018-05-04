import React from 'react';
import { withRouter } from 'react-router';
import './Landing.css';

class Landing extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (window.localStorage.accessToken) {
      this.props.history.push('/notes');
    }
  }

  render() {
    return (
      <div className="landingContainer">
        <h1 className="landingHeader">Lambda<br />Notes</h1>
        <div className="landingButtonContainer">
          <button className="landingButton" onClick={() => { this.props.history.push('/signup') }}>Signup</button>
          <button className="landingButton" onClick={() => { this.props.history.push('/login') }}>Login</button>
          </div>
        </div>
      );
    }
}

export default withRouter(Landing);
