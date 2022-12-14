import React from 'react';
import {Link} from "react-router-dom";


export const NavbarLayout = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light navbar-bg">
            <div className={"container"}>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false"
                        aria-label="Toggle navigation">
                    {/*<span className="navbar-toggler-icon"></span>*/}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16" fill="none"
                         className="css-1170n61">
                        <rect x="1" y="5" width="14" height="1.5" rx="1" fill="#737dff"></rect>
                        <rect x="1" y="9" width="14" height="1.5" rx="1" fill="#737dff"></rect>
                    </svg>
                </button>
                <Link to="/" className="navbar-brand">
                    Salesman Bot
                </Link>


            </div>
        </nav>

    );
};
