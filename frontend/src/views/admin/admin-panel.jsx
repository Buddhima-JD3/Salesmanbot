import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


const adminpanal = () => {
    return (
    <div class="container-fluid py-4">
    {/* //   <div class="row">
    //     <div class="col-xl-12 col-sm-4 mb-xl-0 mb-12">
            
    //       <div class="card">
    //         <div class="card-header p-3 pt-2">

    //         Admin Panel
    //         <div class="horizontal light mt-5 mb-4 dark">

    //             Horixontal Bar

    //         </div>

            
             
    //          </div>
    //         </div>
    //     </div>
    //   </div> */}
    

    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
      <Container>
        <Navbar.Brand href="#home">Admin Panel</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
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
              <NavDropdown.Divider />
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



    {/* <Card border="danger" style={{ width: '18rem' }}>
        <Card.Header>Header</Card.Header>
        <Card.Body>
            <Card.Title>Danger Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
        </Card.Body>
    </Card> */}
<br/>
    <Row xs={1} md={2} className="g-3">
        
        <Col>
        <Card style={{ position: 'absolute', width: '300px', height: '300px', left: '150px', top: '5px' }}>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>35</Card.Title>
              <Card.Text>
                Products
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
        <Card style={{ position: 'absolute', width: '300px', height: '300px', right: '120px', top: '5px' }}>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>10</Card.Title>
              <Card.Text>
                Order
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
        <Card style={{ position: 'absolute', width: '300px', height: '300px', left: '5px', top: '5px' }}>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>5</Card.Title>
              <Card.Text>
                Customers
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        </Row>

<br/>

    <Row xs={1} md={2} className="g-4">
        <Col>
        <Card style={{ position: 'absolute', width: '300px', height: '300px', left: '365px', top: '350px' }}>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>3</Card.Title>
              <Card.Text>
                Users
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
        <Card style={{ position: 'absolute', width: '300px', height: '300px', right: '385px', top: '350px' }}>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>16</Card.Title>
              <Card.Text>
                Items Sold
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
    </Row>

    </div>



    );
};

export default adminpanal;