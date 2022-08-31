import React from 'react';
<<<<<<< HEAD
import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

=======
>>>>>>> 1a91d0b6f549a1a455b867f016f0582b7d1f9907

const itemsold = () => {


<<<<<<< HEAD
        
  return (
    
          <div class="container" >
            <br></br>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
      <Container>
        <Navbar.Brand href="#home">Admin Panel</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/admin">Admin Panel</Nav.Link>
            <NavDropdown title="Dashboard Items" id="collasible-nav-dropdown">
              {/* <NavDropdown.Item href="#action/3.1">Logout</NavDropdown.Item> */}
              <NavDropdown.Item href="customers">
                Customers
              </NavDropdown.Item>
              <NavDropdown.Item href="itemsold">
                Item Sold
              </NavDropdown.Item>
              <NavDropdown.Item href="orders">
                Orders
              </NavDropdown.Item>
              <NavDropdown.Item href="products">
                Products
              </NavDropdown.Item>
              <NavDropdown.Item href="users">
                Users
              </NavDropdown.Item>

              <NavDropdown.Divider />
              <NavDropdown.Item href="admin">
                Admin Panel
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

            <br></br>
            <div class="card login-card">
              HI Item Sold
            </div>
          </div>
    

  )
=======
    return (
        <div className={"body-div admin-panel-main con-mid"}>
            <div className={"admin-card-container"}>
                <div className="container">
                    <div className="card login-card">
                        HI Item Sold
                    </div>
                </div>
            </div>
        </div>


    )
>>>>>>> 1a91d0b6f549a1a455b867f016f0582b7d1f9907
}

export default itemsold;