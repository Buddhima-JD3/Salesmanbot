import React from 'react';
import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import bot from './bot.png';


const adminpanal = () => {
    return (
        <div className={"body-div admin-panel-main"}>
            <div className={"row admin-card-container con-mid"}>

                <div className={"col admin-card"}>
                    <a href="./products" style={{textDecoration: "none"}}>
                        <p className="card-text mbr-fonts-style display-4">35</p>
                        <h2 className="card-title mbr-fonts-style display-5 d-flex justify-content-left text-center">Products</h2>
                    </a>
                </div>

                <div className={"col admin-card"}>
                    <a href="./orders" style={{textDecoration: "none"}}>
                        <p className="card-text mbr-fonts-style display-4">10</p>
                        <h2 className="card-title mbr-fonts-style display-5">Orders</h2>
                    </a>
                </div>

                <div className={"col admin-card"}>
                    <a href="./customers" style={{textDecoration: "none"}}>
                        <p className="card-text mbr-fonts-style display-4">5</p>
                        <h2 className="card-title mbr-fonts-style display-5">Inventory</h2>
                    </a>
                </div>

            </div>

            <div className={"row"}>

                <div className={"col admin-card"}>
                    <a href="./users" style={{textDecoration: "none"}}>
                        <p className="card-text mbr-fonts-style display-4">3</p>
                        <h2 className="card-title mbr-fonts-style display-5">Users</h2>
                    </a>
                </div>

                <div className={"col admin-card"}>
                    <a href="./itemsold" style={{textDecoration: "none"}}>
                        <p className="card-text mbr-fonts-style display-4">16</p>
                        <h2 className="card-title mbr-fonts-style display-5">Item Sold</h2>
                    </a>
                </div>

            </div>
        </div>
    );
};

export default adminpanal;