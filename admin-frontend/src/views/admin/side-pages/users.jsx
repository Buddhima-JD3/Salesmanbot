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