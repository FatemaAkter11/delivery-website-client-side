import React from 'react';
import useAuth from '../../hooks/useAuth';


const Login = () => {
    const {
        handleNameChange,
        handleEmailChange,
        handlePasswordChange,
        toggleLogin,
        handleRegistration,
        isLogin, error } = useAuth();

    return (
        <div>
            <div className="mx-5">

                <form onSubmit={handleRegistration}  >
                    <h2 className="text-primary">Please {isLogin ? 'Login' : 'Register'}</h2>
                    {!isLogin && <div className="row mb-3">
                        <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
                        <div className="col-sm-10">
                            <input onBlur={handleNameChange} type="text" className="form-control" id="inputName" placeholder="Your Name" />
                        </div>
                    </div>}
                    <div className="row mb-3">
                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" required />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                            <input onBlur={handlePasswordChange} type="password" className="form-control" id="inputPassword3" required />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-sm-10 offset-sm-2">
                            <div className="form-check">
                                <input onChange={toggleLogin} className="form-check-input" type="checkbox" id="gridCheck1" />
                                <label className="form-check-label" htmlFor="gridCheck1">
                                    Allready Registerd?
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-3 text-danger">{error}</div>
                    <button type="submit" className="btn btn-primary">
                        {isLogin ? 'Login' : 'Register'}
                    </button>

                </form>
                <br /><br />

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