import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
// import shoppingcart from 'assets/shopping_cart_black_24dp.svg';


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
    {/* <Row xs={1} md={2} className="g-3">
        
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
    </Row> */}

    <br>
    </br>

    <div class="container-fluid">

    <div class="row visible">
        <div class="col-12 pb-5" style={{backgroundColor: '#00A65A'}}>
            <h3 class="mbr-section-title mbr-fonts-style align-center mb-0 display-1"><strong>Our Features</strong></h3>
            
        </div>
    </div>
    <div class="row justify-content-around" style={{height: '25rem', backgroundColor: '#00A65A'}}>
        <div class="col-12 pb-5">
            <h4>Hi, I'm Alice!</h4>
            <h4>Welcome to the Admin Dashboard</h4>
            
        </div>
    </div>
    
    <br></br>
    <div class="row justify-content-around">
        <div class="card col-12 col-md-6 col-lg-3" style={{width: '400px', height: '300px', backgroundColor: '#00A65A'}}>
            <div class="card-wrapper card1">
                <div class="card-box align-left">
                    <div class="iconfont-wrapper">
                        <span class="mbr-iconfont mobi-mbri-cash mobi-mbri"></span>
                    </div>
                    <p class="card-text mbr-fonts-style display-4">35</p>
                    <h2 class="card-title mbr-fonts-style display-5 d-flex justify-content-left text-center">Products</h2>
                    <img src="assets/shopping_cart_black_24dp.svg" class="rounded float-right" alt="..." style={{width: '176px',height: '137px'}}></img>
                    {/* <h6 class="link mbr-fonts-style display-4"><a href="#" class="text-info">Read more</a></h6> */}
                </div>
            </div>
        </div>
        
        <div class="card col-12 col-md-6 col-lg-3" style={{width: '400px', height: '300px', backgroundColor: '#E14581'}}>
            <div class="card-wrapper card2">
                <div class="card-box align-left">
                    <div class="iconfont-wrapper">
                        <span class="mbr-iconfont mobi-mbri-change-style mobi-mbri"></span>
                    </div>
                    <p class="card-text mbr-fonts-style display-4">10</p>
                    <h2 class="card-title mbr-fonts-style display-5">Orders</h2>
                    <img src="..." class="rounded float-right" alt="..." style={{width: '176px',height: '137px'}}></img>
                    {/* <h6 class="link mbr-fonts-style display-4"><a href="#" class="text-info">Read more</a></h6> */}
                </div>
            </div>
        </div>
        
        <div class="card col-12 col-md-6 col-lg-3" style={{width: '400px', height: '300px', backgroundColor: '#EF9915'}}>
            <div class="card-wrapper card3">
                <div class="card-box align-left">
                    <div class="iconfont-wrapper">
                        <span class="mbr-iconfont mobi-mbri-photo mobi-mbri"></span>
                    </div>
                    <p class="card-text mbr-fonts-style display-4">5</p>
                    <h2 class="card-title mbr-fonts-style display-5">Customers</h2>
                    <img src="..." class="rounded float-right" alt="..." style={{width: '176px',height: '137px'}}></img>
                    {/* <h6 class="link mbr-fonts-style display-4"><a href="#" class="text-info">Read more</a></h6> */}
                </div>
            </div>
        </div>
        </div>
        <br></br>
        <div class="row justify-content-around">
        <div class="card col-12 col-md-6 col-lg-3" style={{width: '400px', height: '300px', backgroundColor: '#3D9970'}}>
            <div class="card-wrapper card4">
                <div class="card-box align-left">
                    <div class="iconfont-wrapper">
                        <span class="mbr-iconfont mobi-mbri-rocket mobi-mbri"></span>
                    </div>
                    <p class="card-text mbr-fonts-style display-4">3</p>
                    <h2 class="card-title mbr-fonts-style display-5">Users</h2>
                    <img src="..." class="rounded float-right" alt="..." style={{width: '176px',height: '137px'}}></img>
                    {/* <h6 class="link mbr-fonts-style display-4"><a href="#" class="text-info">Read more</a></h6> */}
                </div>
            </div>
        </div>
        
        <div class="card col-12 col-md-6 col-lg-3" style={{width: '400px', height: '300px', backgroundColor: '#3C8DBC'}}>
            <div class="card-wrapper card5">
                <div class="card-box align-left">
                    <div class="iconfont-wrapper">
                        <span class="mbr-iconfont mobi-mbri-sites mobi-mbri"></span>
                    </div>
                    <p class="card-text mbr-fonts-style display-4">16</p>
                    <h2 class="card-title mbr-fonts-style display-5">Item Sold</h2>
                    <img src="..." class="rounded float-right" alt="..." style={{width: '176px',height: '137px'}}></img>
                    {/* <h6 class="link mbr-fonts-style display-4"><a href="#" class="text-info">Read more</a></h6> */}
                </div>
            </div>
        </div>
    </div>
</div>

    </div>



    );
};

export default adminpanal;