<<<<<<< HEAD
import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import axios from "axios";
import { withRouter } from 'react-router-dom';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


=======
import React, {Component} from "react";
import MUIDataTable from "mui-datatables";
import productsModule from "../../../apis/modules/products";

const data = [];
>>>>>>> 1a91d0b6f549a1a455b867f016f0582b7d1f9907

class products extends Component {

    constructor(props) {
        super(props);
<<<<<<< HEAD
    
        this.state = {
            searchKey: "",
            customer: [
                {
                    firstName: "",
                    lastName: "",
                    email: "",
                    phone: "",
                    age: "",
                    _id: "",
                },
            ],
    
    
        };
      }
      
      componentDidMount() {
        this.retrieveCustomers();
      }
    
      retrieveCustomers() {

        axios.get("http://localhost:8080/getallproducts").then((res) => {

          // if (res.data.success) {
            this.setState({
              customer: res.data,
            });
          
          console.log(res.data);
        });
      }
    
      onDelete = (id) => {
    
        if (window.confirm("Are you sure you wish to delete this user?")) {

          axios.delete(`http://localhost:8080/deleteproduct/${id}`).then((res) => {

            alert("Deleted Successfully");
            this.retrieveCustomers();
    
          });
        }
      };
    
      filterData(customer, searchKey) {
        const result = customer.filter(
          (customer) =>
            customer.brand.toLowerCase().includes(searchKey) ||
            customer.healthStat.toLowerCase().includes(searchKey) ||
            customer.ingreduents.toLowerCase().includes(searchKey) ||
            customer.item_type.toLowerCase().includes(searchKey) ||
            customer.nutrition.toLowerCase().includes(searchKey)

        );
        this.setState({ items: result });
      }
    
      handleSearchArea = (e) => {
        const searchKey = e.currentTarget.value;
    

        axios.get("http://localhost:8080/getallproducts").then((res) => {

          if (res.data.success) {
            this.filterData(res.data.existingItems, searchKey);
          }
        });
      };
       
      render() {

        return (
    
            <div class="container" >
              <br></br>
              <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{border:"25rem"}}>
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
                <div className="container">
          <br/>
            <div className="row">
              <div className="col-lg-9 mt-2 mb-2">
                
                <h3><b>Product Details Dashboard</b></h3>
              </div>
              <div className="col-lg-3 mt-2 mb-2">
                <input
                  className="form-control"
                  type="search"
                  placeholder="Search"
                  name="searchQuery"
                  onChange={this.handleSearchArea}></input>
              </div>
            </div>
            <table className="table table-hover" style={{ marginTop: "40px" }}>
              <thead>
                <tr>
                  <th>ID</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Age</th>
                  <th scope="col">Gender</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {this.state.customer.map((customer, index) => (
  
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>
                      <a
                        href={`localhost:8090/api/customer/${customer._id}`}
                        style={{ textDecoration: "none" }}>
                        {customer.name}
                      </a>
                    </td>
                    <td>{customer.email}</td>
                    <td>{customer.phone}</td>
                    <td>{customer.age}</td>
                    <td>{customer.gender}</td>
                    <td>
                      <a className="btn btn-warning" href={`/editCustomer/${customer._id}`}>
                        <i className="fas fa-edit"></i>&nbsp;Edit
                      </a>
                      &nbsp;
                      <button
                        className="btn btn-danger" type=""
                        href= {`/customer/delete/${customer._id}`}
                        onClick={() => this.onDelete(customer._id)}>
                        <i className="far fa-trash-alt"></i>&nbsp;Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
              <br/>
              <button className="btn btn-success"><a href="/add_product" style={{textDecoration:'none',color:'white'}}>Add New Product</a></button>  
              <button className="btn btn-secondary" style={{marginLeft:"10px" }}><a href="/report" style={{textDecoration:'none',color:'white'}}>Generate Product Report</a></button>
              <button className="btn btn-dark" style={{marginLeft:"10px" }}><a href="/purchaseOrder" style={{textDecoration:'none',color:'white'}}>Generate Product Purchase Report</a></button>
          </div>
                
              </div>
            </div>
      
  
    )
  }
        
      }
  
=======

        this.state = {
            searchKey: "",
            products: []
        };
    }

    componentDidMount() {
        this.retrieveProducts();
    }

    retrieveProducts() {
        productsModule.retrieveProducts().then((res) => {
            let product = res.data;

            for (let i = 0; i < product.length; i++) {
                data.push([(i + 1), /*product[i].id, */product[i].productName, product[i].brand, product[i].price, product[i].weightOrVoluem, product[i].nutrition,
                    <div>
                        <a className="btn btn-warning" href={`/editCustomer/${product[i].id}`}>
                            Edit
                        </a>
                        &nbsp;&nbsp;
                        <button
                            className="btn btn-danger" type=""
                            onClick={() => this.onDelete(product[i].id)}>
                            Delete
                        </button>
                    </div>
                ])
            }

            this.setState({
                products: res.data,
            });
        });
    }

    onDelete = (id) => {
        if (window.confirm("Are you sure you wish to delete this user?")) {
            productsModule.deleteProduct(id).then(() => {
                alert("Deleted Successfully");
                window.location.reload();
                this.retrieveProducts();

            });
        }
    };


    render() {

        const columns = ["Index", /*"Code",*/ "Product", "Brand", "Price", "Weight/Volume", "Nutrition", "Action"];
        const options = {
            filterType: 'checkbox',
        };

        console.log(data);

        return (
            <div className={"body-div admin-panel-main con-mid"}>
                <div className={"admin-card-container"}>
                    <div className="container">
                        <div style={{width: "100%", textAlign: "right"}}>
                            <h5 className={"admin-panel-heading"}>Products_</h5>
                        </div>
                        <br/>
                        <div className="card login-card">
                            <div className="container">
                                <MUIDataTable
                                    title={"Products List"}
                                    data={data}
                                    columns={columns}
                                    options={options}
                                />
                                <br/>
                                {/*<button className="btn btn-success"><a href="customer/add"*/}
                                {/*                                       style={{textDecoration: 'none', color: 'white'}}>Add*/}
                                {/*    New*/}
                                {/*    Product</a></button>*/}
                                {/*<button className="btn btn-secondary" style={{marginLeft: "10px"}}><a href="/report"*/}
                                {/*                                                                      style={{*/}
                                {/*                                                                          textDecoration: 'none',*/}
                                {/*                                                                          color: 'white'*/}
                                {/*                                                                      }}>Generate*/}
                                {/*    Product Report</a></button>*/}
                                {/*<button className="btn btn-dark" style={{marginLeft: "10px"}}><a href="/purchaseOrder"*/}
                                {/*                                                                 style={{*/}
                                {/*                                                                     textDecoration: 'none',*/}
                                {/*                                                                     color: 'white'*/}
                                {/*                                                                 }}>Generate Product*/}
                                {/*    Purchase Report</a></button>*/}
                                {/*<br/>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

>>>>>>> 1a91d0b6f549a1a455b867f016f0582b7d1f9907

export default products;