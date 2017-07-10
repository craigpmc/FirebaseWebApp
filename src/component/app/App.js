import React from 'react';
import logo from '../../assets/logo.png';
import firebase from 'firebase';
require('es6-promise').polyfill();
require('isomorphic-fetch');

export default class App extends React.Component {

    state = {
      average: null
    };

    componentWillMount() {
        document.title = "Home Page";
        this.fetchData()
    }

    fetchData = () => {
        const url = 'https://ergast.com/api/f1/current/last/drivers.json';

        fetch(url).then((response) => {
            return response.json();
        }).then((data) => {
            const array = data.MRData.DriverTable.Drivers;
            this.pushOnDatabase(array);
        });
    };

    pushOnDatabase = (array) => {
        firebase.database().ref('lastrace/').set(array);
    };

    readOnDataBase = () => {
        firebase.database().ref('lastrace').on('value', this.calcAverage);
    };

    calcAverage = (data) => {
        const array = data.val();
        let average = 0;

        array.map((pilot) => {
            const date = new Date(pilot.dateOfBirth);
            const today = new Date();

            const timeDiff = Math.abs(today.getTime() - date.getTime());
            const age = Math.ceil(timeDiff / (1000 * 3600 * 24)) / 365;
            average += age;
        });

        this.setState({ average: average / array.length })
    };

  render() {
    const { average } = this.state;

    return (
      <div className="text-center">
          <div className="content d-flex flex-column align-items-center justify-content-center">
              <h2 className="mb-4 pb-2" style={{ borderBottom: '2px solid white' }}>Welcome !</h2>
              <img src={logo} width="150" height="150" className="mb-4"/>
              <p>Details: onclick button, display drivers ages of the last run.</p>
              <button className="btn btn-secondary" onClick={this.readOnDataBase}>
                  See details
              </button>
                {average !== null ?
                <span className="mt-3 p-2" style={{ border: '2px solid white' }}>{average}</span>
                : null}
          </div>
      </div>
    );
  }
}
