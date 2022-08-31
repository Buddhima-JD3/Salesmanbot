<<<<<<< HEAD
import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import axios from "axios";
import { withRouter } from 'react-router-dom';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const users = () => {


        
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
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div class="card login-card">
              HI Users
            </div>
          </div>
    

  )
}

export default users;
=======
import React, {Component} from "react";
import MUIDataTable from "mui-datatables";
import usersModule from "../../../apis/modules/users";

const data = [];

class Users extends Component {

    constructor(props) {
        super(props);

        this.state = {
            searchKey: "",
            users: []
        };
    }

    componentDidMount() {
        this.retrieveUsers();
    }

    retrieveUsers() {

        usersModule.retrieveUsers().then((res) => {

            let user = res.data;

            for (let i = 0; i < user.length; i++) {
                data.push([(i + 1), /*user[i].id, */user[i].fName, user[i].lName, user[i].DOB, user[i].contactNum, user[i].email, user[i].home_address,
                    <div>
                        <button
                            className="btn btn-danger" type=""
                            onClick={() => this.onDelete(user[i].id)}>
                            Delete
                        </button>
                    </div>
                ])
            }

            this.setState({
                users: res.data,
            });

        });


    }

    onDelete = (id) => {
        if (window.confirm("Are you sure you wish to delete this user?")) {
            usersModule.deleteUser(id).then((res) => {
                alert("Deleted Successfully");
                window.location.reload();
                this.retrieveUsers();

            });
        }
    };


    render() {

        const columns = ["Index", /*"ID",*/ "First Name", "Last Name", "DOB", "Contact Number", "Email", "Address", "Action"];
        const options = {
            filterType: 'checkbox',
        };

        return (
            <div className={"body-div admin-panel-main con-mid"}>
                <div className={"admin-card-container"}>
                    <div className="container">
                        <div style={{width: "100%", textAlign: "right"}}>
                            <h5 className={"admin-panel-heading"}>Users_</h5>
                        </div>
                        <br/>
                        <div className="card login-card">
                            <div className="container">
                                <MUIDataTable
                                    title={"Users List"}
                                    data={data}
                                    columns={columns}
                                    options={options}
                                />
                                <br/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}


export default Users;
>>>>>>> 1a91d0b6f549a1a455b867f016f0582b7d1f9907
