import React, {Component} from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import usersModule from "../../../apis/modules/users";


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
            this.setState({
                users: res.data,
            });
        });


    }

    onDelete = (id) => {
        if (window.confirm("Are you sure you wish to delete this user?")) {
            usersModule.deleteUser(id).then((res) => {
                alert("Deleted Successfully");
                this.retrieveUsers();

            });
        }
    };


    render() {

        return (

            <div className="container">
                <div className="card login-card">
                    <div className="container">
                        <br/>
                        <div className="row">
                            <div className="col-lg-9 mt-2 mb-2">

                                <h3><b>User Details Dashboard</b></h3>
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
                                <th>Index</th>
                                {/*<th>User ID</th>*/}
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">DOB</th>
                                <th scope="col">Contact Number</th>
                                <th scope="col">Email</th>
                                <th scope="col">Address</th>
                                <th scope="col">Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.state.users.map((user, index) => (

                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    {/*<td>{user.id}</td>*/}
                                    <td>{user.fName}</td>
                                    <td>{user.lName}</td>
                                    <td>{user.DOB}</td>
                                    <td>{user.contactNum}</td>
                                    <td>{user.email}</td>
                                    <td>{user.home_address}</td>
                                    <td>
                                        <a className="btn btn-warning" href={`/editCustomer/${user.id}`}>
                                            <i className="fas fa-edit"></i>&nbsp;Edit
                                        </a>
                                        &nbsp;
                                        <button
                                            className="btn btn-danger" type="" onClick={() => this.onDelete(user.id)}>
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
                            User</a></button>
                    </div>
                </div>
            </div>


        )
    }

}


export default Users;