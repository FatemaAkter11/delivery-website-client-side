import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';


const Login = () => {
    const { signInUsingGoogle } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';


    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }

    return (
        <div>
            <div className="mx-5 my-5">
                <h2 className="mb-3">Please Login Using Google</h2>

                <button className="btn btn-warning mx-1" onClick={handleGoogleLogin}><i className="fab fa-google"></i> Google Sign In</button>
                <br />
                <br />

            </div>
        </div>
    );
};

export default Login;











/*
<h2>Please Login</h2>
            <button onClick={signInUsingGoogle}>Google Sign In</button>
            <br />
            <button onClick={signInUsingGithub}>GitHub Sign In</button>
            <br />
            <Link to="/register">New User?</Link>

*/