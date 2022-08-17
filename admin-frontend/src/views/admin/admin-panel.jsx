import React from 'react';
import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import bot from './bot.png';


const adminpanal = () => {
    return (
        <div className="container-fluid py-4 center">

            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Admin Panel</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="#pricing">Cart</Nav.Link>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                {/* <NavDropdown.Item href="#action/3.1">Logout</NavDropdown.Item> */}
                                <NavDropdown.Item href="#action/3.2">
                                    User Profile
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Settings</NavDropdown.Item>
                                <NavDropdown.Divider/>
                                <NavDropdown.Item href="#action/3.4">
                                    Logout
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">More deets</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Dank memes
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


            <br/>

            <br>
            </br>

            <div className="container-fluid">

                <div className="row visible">
                    <div className="col-12 pb-5" style={{backgroundColor: '#00A65A'}}>
                        <h3 className="mbr-section-title mbr-fonts-style align-center mb-0 display-1"><strong>Our
                            Features</strong></h3>

                    </div>
                </div>
                <div className="row justify-content-around" style={{height: '20rem', backgroundColor: '#00A65A'}}>
                    <div className="col-12 pb-5" style={{width: "300px", marginLeft: "750px"}}>
                        <h4>Hi, I'm Alice!</h4>
                        <h4>Welcome to the Admin Dashboard</h4>
                        <div className="logo">
                            <a href="/"><img src={bot} alt="Logo" height="330px"
                                             style={{marginTop: "-150px", width: "300px", marginLeft: "350px"}}/></a>
                        </div>

                    </div>

                </div>

                <br></br>
                <div className="row justify-content-around">
                    <div className="card col-12 col-md-6 col-lg-3"
                         style={{width: '400px', height: '300px', backgroundColor: '#00A65A'}}>
                        <div className="card-wrapper card1">
                            <div className="card-box align-left">
                                <div className="iconfont-wrapper">
                                    <span className="mbr-iconfont mobi-mbri-cash mobi-mbri"></span>
                                </div>
                                <a href="products" style={{textDecoration: "none"}}>
                                    <p className="card-text mbr-fonts-style display-4">35</p>
                                    <h2 className="card-title mbr-fonts-style display-5 d-flex justify-content-left text-center">Products</h2>
                                    <img src="assets/shopping_cart_black_24dp.svg" className="rounded float-right"
                                         alt="..."
                                         style={{width: '176px', height: '137px'}}></img>
                                    {/* <h6 className="link mbr-fonts-style display-4"><a href="#" className="text-info">Read more</a></h6> */}
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="card col-12 col-md-6 col-lg-3"
                         style={{width: '400px', height: '300px', backgroundColor: '#E14581'}}>
                        <div className="card-wrapper card2">
                            <div className="card-box align-left">
                                <div className="iconfont-wrapper">
                                    <span className="mbr-iconfont mobi-mbri-change-style mobi-mbri"></span>
                                </div>
                                <a href="orders" style={{textDecoration: "none"}}>
                                    <p className="card-text mbr-fonts-style display-4">10</p>
                                    <h2 className="card-title mbr-fonts-style display-5">Orders</h2>
                                    <img src="..." className="rounded float-right" alt="..."
                                         style={{width: '176px', height: '137px'}}></img>
                                    {/* <h6 className="link mbr-fonts-style display-4"><a href="#" className="text-info">Read more</a></h6> */}
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="card col-12 col-md-6 col-lg-3"
                         style={{width: '400px', height: '300px', backgroundColor: '#EF9915'}}>
                        <div className="card-wrapper card3">
                            <div className="card-box align-left">
                                <div className="iconfont-wrapper">
                                    <span className="mbr-iconfont mobi-mbri-photo mobi-mbri"></span>
                                </div>
                                <a href="customers" style={{textDecoration: "none"}}>
                                    <p className="card-text mbr-fonts-style display-4">5</p>
                                    <h2 className="card-title mbr-fonts-style display-5">Customers</h2>
                                    <img src="..." className="rounded float-right" alt="..."
                                         style={{width: '176px', height: '137px'}}></img>
                                    {/* <h6 className="link mbr-fonts-style display-4"><a href="#" className="text-info">Read more</a></h6> */}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <br></br>
                <div className="row justify-content-around">
                    <div className="card col-12 col-md-6 col-lg-3"
                         style={{width: '400px', height: '300px', backgroundColor: '#3D9970'}}>
                        <div className="card-wrapper card4">
                            <div className="card-box align-left">
                                <div className="iconfont-wrapper">
                                    <span className="mbr-iconfont mobi-mbri-rocket mobi-mbri"></span>
                                </div>
                                <a href="users" style={{textDecoration: "none"}}>
                                    <p className="card-text mbr-fonts-style display-4">3</p>
                                    <h2 className="card-title mbr-fonts-style display-5">Users</h2>
                                    <img src="..." className="rounded float-right" alt="..."
                                         style={{width: '176px', height: '137px'}}></img>
                                    {/* <h6 className="link mbr-fonts-style display-4"><a href="#" className="text-info">Read more</a></h6> */}
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="card col-12 col-md-6 col-lg-3"
                         style={{width: '400px', height: '300px', backgroundColor: '#3C8DBC'}}>
                        <div className="card-wrapper card5">
                            <div className="card-box align-left">
                                <div className="iconfont-wrapper">
                                    <span className="mbr-iconfont mobi-mbri-sites mobi-mbri"></span>
                                </div>
                                <a href="itemsold" style={{textDecoration: "none"}}>
                                    <p className="card-text mbr-fonts-style display-4">16</p>
                                    <h2 className="card-title mbr-fonts-style display-5">Item Sold</h2>
                                    <img src="..." className="rounded float-right" alt="..."
                                         style={{width: '176px', height: '137px'}}></img>
                                    {/* <h6 className="link mbr-fonts-style display-4"><a href="#" className="text-info">Read more</a></h6> */}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>


    );
};

export default adminpanal;