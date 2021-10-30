import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css';

const Header = () => {
    const { user, logout } = useAuth();
    return (
        <header>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav items ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active m-2 p-2" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active m-2 p-2" aria-current="page" to="/services">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link m-2 p-2" to="/myOrder">My Orders</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link m-2 p-2" to="/manageOrder">Manage Order</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link m-2 p-2" to="/addService">Add Service</Link>
                            </li>
                            <li className="nav-item ps-2">
                                <Link className="nav-link learn-btn px-4 text-black mt-2" to="/login">Login</Link>
                            </li>
                            {user?.email && <button className="btn btn-warning px-4 text-black mt-2 mx-2" onClick={logout}>log out</button>}
                            <span className="px-2">{user.displayName} </span>

                        </ul>

                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;