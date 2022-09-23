import React, { useState, useEffect } from "react";
import axios from "axios";
import MUIDataTable from "mui-datatables";
import productsModule from "../../../apis/modules/products";

const EditProducts = props => {

    // componentDidMount(){
    //     this.retrieveProducts();
    // }

    // retrieveProducts(){
    //     productsModule.retrieveProducts().then((res) => {
    //         let product = res.data;
    //
    //         for (let i = 0; i < product.length; i++) {
    //             data.push([(i + 1), /*product[i].id, */product[i].productName, product[i].brand, product[i].price, product[i].weightOrVoluem, product[i].nutrition,
    //                 <div>
    //                     <a className="btn btn-warning" href={`/updateProduct/${product[i].id}`}>
    //                         Edit
    //                     </a>
    //                     &nbsp;&nbsp;
    //                     <button
    //                         className="btn btn-danger" type=""
    //                         onClick={() => this.onDelete(product[i].id)}>
    //                         Delete
    //                     </button>
    //                 </div>
    //             ])
    //         }
    //
    //         this.setState({
    //             products: res.data,
    //         });
    //     });
    // }

    const [customer, setProducts] = useState({
        email: "",
        password: "",
        name: "",
        phone: "",
        address: "",
        gender: "",
        age: "",

    });

    const {email, password, name, phone, address, gender, age} = customer;

    const onInputChange = e => {
        setCustomer({ ...customer, [e.target.name]: e.target.value });
    }

    useEffect(() => {
        if (props.currentId === "") {
            setCustomer({
                email: "",
                password: "",
                name: "",
                phone: "",
                address: "",
                gender: "",
                age: "",

            });
        } else {
            setCustomer(props.customer);
        }
    }, [props]);

    return (
        <div className="container">
            <h1>Edit Customer</h1>
            <form>
                <div className="form-group">
                    <label htmlFor="firstName">Email</label>
                    <input type="text" className="form-control" id="Email" placeholder="Email"
                           name="email"
                           value={email}
                           onChange={onInputChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Password</label>
                    <input type="text" className="form-control" id="Password" placeholder="Password"
                           name="password"
                           value={password}
                           onChange={onInputChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Name</label>
                    <input type="text" className="form-control" id="Name" placeholder="Name"
                           name="Name"
                           value={name}
                           onChange={onInputChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input type="text" className="form-control" id="Phone" placeholder="Phone"
                           name="phone"
                           value={phone}
                           onChange={onInputChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="age">Address</label>
                    <input type="text" className="form-control" id="Address" placeholder="Address"
                           name="address"
                           value={address}
                           onChange={onInputChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="age">Gender</label>
                    <input type="text" className="form-control" id="Gender" placeholder="gender"
                           name="gender"
                           value={gender}
                           onChange={onInputChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="age">Age</label>
                    <input type="text" className="form-control" id="Age" placeholder="Age"
                           name="age"
                           value={age}
                           onChange={onInputChange}

                    />
                </div>
                <button type="button" className="btn btn-primary" onClick={() => props.editProduct(products)}>Update Products</button>
                <button type="button" className="btn btn-danger" onClick={() => props.setEditing(false)}>Cancel</button>
            </form>
        </div>
    );
};


export default EditProducts;