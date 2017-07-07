import React from 'react';
import logo from '../../assets/logo.png';

export default class App extends React.Component {

    componentWillMount() {
        document.title = "Home Page"
    }

    onRecoverData = () => {
        return fetch('https://ergast.com/api/f1/current/last/drivers.json', {
            method: 'GET'
        }).then(res => {
            console.log(res);
            window.location.replace("/details");
        }).catch(err => {
            console.error('error', err);
            throw err
        })
    };

    // getPilotsAgesAverage = () => {
    //     // map on array of DOB pilots
    //     const date = new Date('1995/03/17');
    //     const today = new Date();
    //     const diff = Math.abs(today.getTime() - date.getTime());
    //     const average = Math.ceil(diff / (1000 * 3600 * 24)) / 365;
    //     return average / index
    // };

  render() {

    return (
      <div className="text-center">
          <div className="content d-flex flex-column align-items-center justify-content-center">
              <h2 className="mb-4 pb-2" style={{ borderBottom: '2px solid white' }}>Welcome !</h2>
              <img src={logo} width="150" height="150" className="mb-4"/>
              <p>Details: onclick button, display drivers ages of the last run.</p>
              <button className="btn btn-secondary" onClick={this.onRecoverData}>
                  See details
              </button>
          </div>
      </div>
    );
  }
}
