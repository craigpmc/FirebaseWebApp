import React from 'react';
import Login from './authentication/Login';
import App from './app/App';
import Details from './content/Details';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import logo from '../assets/logo.png';

const Routes = () => (
    <Router>
        <div className="app-container text-center">
            <nav className="navbar navbar-inverse bg-inverse">
                <Link className="navbar-brand" to="/home">
                    <img src={logo} width="30" height="30" className="d-inline-block align-top mr-3" />
                    FirebaseWebApp
                </Link>
            </nav>

            <Route path="/login" component={Login}/>
            <Route path="/home" component={App}/>
            <Route path="/details" component={Details}/>

            <footer className="navbar-inverse bg-inverse p-4 font-italic">
                Developped by Stefanescu Valentin
            </footer>
        </div>
    </Router>
);

export  default  Routes
