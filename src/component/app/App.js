import React from 'react';
import logo from '../../assets/logo.png';

export default class App extends React.Component {

    componentWillMount() {
        document.title = "Home Page"
    }

  render() {

    return (
      <div className="text-center">
          <div className="content d-flex flex-column align-items-center justify-content-center">
              <h2 className="mb-4 pb-2" style={{ borderBottom: '2px solid white' }}>Welcome !</h2>
              <img src={logo} width="150" height="150" className="mb-4"/>
              <p>Details: onclick button, display drivers ages of the last run.</p>
              <button className="btn btn-secondary">See details</button>
          </div>
      </div>
    );
  }
}
