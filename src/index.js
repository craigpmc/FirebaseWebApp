import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Routes from './component/Routes';
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

ReactDOM.render(<Routes />, document.getElementById('root'));
registerServiceWorker();
