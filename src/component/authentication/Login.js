import React from 'react';
import firebase, { auth } from 'firebase';

const config = {
    apiKey: "AIzaSyA-oX24CIWpvrnT8VZsVLVJmkgIDE0BYDM",
    authDomain: "moto-1ac54.firebaseapp.com",
    databaseURL: "https://moto-1ac54.firebaseio.com",
    projectId: "moto-1ac54",
    storageBucket: "",
    messagingSenderId: "558159409374",
};
firebase.initializeApp(config);

//auth.createUserWithEmailAndPassword(email, password);
//auth.onAuthStateChanged(firebaseUser => {});

export default class Login extends React.Component {

    componentWillMount() {
        document.title = "Login Page"
    }

    onLogIn = () => {
        window.location.replace("/home");
        // const email = this.inputEmail.value.trim();
        // const pass = this.inputPass.value;
        //
        // const promise = auth.signInWithEmailAndPassword(email, pass);
        // promise.catch(e => console.log(e.message))
    };

    render() {

        return (
            <div className="card d-inline-block" style={{ marginTop: '15vh' }}>
                <div className="card-header">
                    LOG IN
                </div>
                <div className="card-block">
                    <div>
                        <div className="form-group mr-5 ml-5">
                            <label>Email address</label>
                            <input
                                type="email"
                                className="form-control"
                                style={{ width: '20vw' }}
                                ref={(input) => {this.inputEmail = input}}
                            />
                        </div>
                        <div className="form-group mr-5 ml-5">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control"
                                style={{ width: '20vw' }}
                                ref={(input) => {this.inputPass = input}}
                            />
                        </div>
                        <button className="btn btn-secondary" onClick={this.onLogIn}>Log in</button>
                    </div>
                </div>
            </div>
        )
    }
}
