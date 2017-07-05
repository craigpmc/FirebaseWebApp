import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './component/app/App';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyA-oX24CIWpvrnT8VZsVLVJmkgIDE0BYDM",
    authDomain: "moto-1ac54.firebaseapp.com",
    databaseURL: "https://moto-1ac54.firebaseio.com",
    projectId: "moto-1ac54",
    storageBucket: "",
    messagingSenderId: "558159409374",
};
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
