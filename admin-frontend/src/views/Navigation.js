import React from "react";
import Home from "./Home"

import {BrowserRouter as Router, Navigate, Route} from "react-router-dom";
import "./nav.css";

function Navigation() {
    return (
        <div>
            <input className="menu-icon" type="checkbox" id="menu-icon" name="menu-icon"/>
            <label htmlFor="menu-icon"></label>
            <nav className="nav">
                <ul className="pt-5">
                    <li><a href="/">Chat</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Admin</a></li>
                    <li><a href="#">Sign up</a></li>
                </ul>
            </nav>

            <div className="section-center">
                <Router>
                    <Route>
                        <Navigate to={Home}/>;
                    </Route>
                    <Route path = "/" exact component = {Home}/>
                </Router>
            </div>

        </div>
    )
}

export default Navigation;