import React from 'react';
// import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light fixed-top shadow-lg">
            <div className="container">
                <a className="navbar-brand mx-auto d-lg-none" href="/">
                    Medic Care
                    <strong className="d-block">Health Specialist</strong>
                </a>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">

                        <a className="navbar-brand d-none d-lg-block" href="/">
                            Medic Care
                            <strong className="d-block">Health Specialist</strong>
                        </a>

                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="/about">About</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="/timeline">Timeline</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="/reviews">Testimonials</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="/booking">Booking</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="/contact">Contact</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="/login">Login</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="/register">Register</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="/logout">Logout</a>
                        </li>

                    </ul>
                </div>

            </div>
        </nav>

    )
}