import React, {Component} from "react";
import Container from 'react-bootstrap/Container';
import axios from "axios";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


class orders extends Component {

    constructor(props) {
        super(props);

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
        axios.get("http://localhost:8090/api/customer").then((res) => {
            // if (res.data.success) {
            this.setState({
                customer: res.data,
            });

            console.log(res.data);
        });
    }

    onDelete = (id) => {

        if (window.confirm("Are you sure you wish to delete this user?")) {
            axios.delete(`http://localhost:8090/api/customer/delete/${id}`).then((res) => {
                alert("Deleted Successfully");
                this.retrieveCustomers();

            });
        }
    };

    filterData(customer, searchKey) {
        const result = customer.filter(
            (customer) =>
                customer.firstName.toLowerCase().includes(searchKey) ||
                customer.lastName.toLowerCase().includes(searchKey) ||
                customer.email.toLowerCase().includes(searchKey) ||
                customer.phone.toLowerCase().includes(searchKey) ||
                customer.age.toLowerCase().includes(searchKey)
        );
        this.setState({items: result});
    }

    handleSearchArea = (e) => {
        const searchKey = e.currentTarget.value;

        axios.get("http://localhost:8090/api/customer").then((res) => {
            if (res.data.success) {
                this.filterData(res.data.existingItems, searchKey);
            }
        });
    };

    render() {

        return (

            <div className="container">
                <div className="card login-card">
                    <div className="container">
                        <br/>
                        <div className="row">
                            <div className="col-lg-9 mt-2 mb-2">

                                <h3><b>Order Details Dashboard</b></h3>
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
                        <table className="table table-hover" style={{marginTop: "40px"}}>
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
                                            style={{textDecoration: "none"}}>
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
                                            href={`/customer/delete/${customer._id}`}
                                            onClick={() => this.onDelete(customer._id)}>
                                            <i className="far fa-trash-alt"></i>&nbsp;Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                        <br/>
                        <button className="btn btn-success"><a href="customer/add"
                                                               style={{textDecoration: 'none', color: 'white'}}>Add New
                            Order</a></button>
                        <button className="btn btn-secondary" style={{marginLeft: "10px"}}><a href="/report" style={{
                            textDecoration: 'none',
                            color: 'white'
                        }}>Generate Order Report</a></button>
                        <button className="btn btn-dark" style={{marginLeft: "10px"}}><a href="/purchaseOrder" style={{
                            textDecoration: 'none',
                            color: 'white'
                        }}>Generate Purchase Order Report</a></button>
                    </div>

                </div>
            </div>


        )
    }

}


export default orders;