import React from 'react';
import { Link } from 'react-router-dom';

export default class Login extends React.Component {

    componentWillMount() {
        document.title = "Login Page"
    }

    render() {

        return (
            <div className="card d-inline-block" style={{ marginTop: '20vh' }}>
                <div className="card-header">
                    LOG IN
                </div>
                <div className="card-block">
                    <div>
                        <div className="form-group mr-5 ml-5">
                            <label>Email address</label>
                            <input type="email" className="form-control" style={{ width: '20vw' }}/>
                        </div>
                        <div className="form-group mr-5 ml-5">
                            <label>Password</label>
                            <input type="password" className="form-control" style={{ width: '20vw' }}/>
                        </div>
                        <Link to="/home" className="btn btn-secondary">Log in</Link>
                    </div>
                </div>
            </div>
        )
    }
}
