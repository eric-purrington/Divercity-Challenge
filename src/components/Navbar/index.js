import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function Navbar() {

    return (
        <nav className="navbar">

            <div className="navbarLeft">
                <h2><Link to="/">Divercity Jobs</Link></h2>
                <p>Find your's today</p>
            </div>

            <ul className="navbarRight">
                <li><Link to="/">Jobs</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
            </ul>

        </nav>
    )
}