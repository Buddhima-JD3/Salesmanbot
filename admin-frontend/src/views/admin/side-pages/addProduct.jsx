import React, {Component} from "react";
import MUIDataTable from "mui-datatables";
import productsModule from "../../../apis/modules/products";
import {useParams} from "react-router-dom";

const data = [];

class addproducts extends Component {

    constructor(props) {
        super(props);

        this.state = {
            searchKey: "",
            products: []
        }
        this.state = {
            productName: "",
            brand: "",
            category: "",
            price: "",
            quantity:"",
            healthStat:"",
            ingreduents:"",
            item_type:"",
            weightOrVolume:""
        }
    }



    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            ...this.state,
            [name]: value,
        });
    };
    onSubmit = (e) => {
        e.preventDefault();
        const { productName, brand, category, price, quantity, healthStat, ingreduents, item_type, weightOrVolume } = this.state;

        const data = {
            productName: productName,
            brand: brand,
            category: category,
            price: price,
            quantity: quantity,
            healthStat: healthStat,
            ingreduents: ingreduents,
            item_type: item_type,
            weightOrVolume: weightOrVolume
        };

        productsModule.addProduct(data).then((res) => {
            if (res.data == 'Record saved successfully') {
                alert("Product Saved!");
                window.location.href = "/products";
            }else{
                alert("Invalid Details");
            }
        });
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
                                <div className="col-md-8 mt-4 mx-auto">
                                    <br></br>
                                    <form>
                                        <center><h2>Edit Product</h2></center><br></br>
                                        <div className="form-group h3 mb-3 font-weight-normal">
                                            <label htmlFor="productName">Product</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="productName"
                                                name="productName"
                                                placeholder="Product"
                                                value={this.state.productName}
                                                onChange={this.handleInputChange}
                                            />
                                        </div>
                                        <div className="form-group h3 mb-3 font-weight-normal">
                                            <label htmlFor="brand">Brand</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="brand"
                                                name="brand"
                                                placeholder="Brand"
                                                value={this.state.brand}
                                                onChange={this.handleInputChange}
                                            />
                                        </div>
                                        <div className="form-group h3 mb-3 font-weight-normal">
                                            <label htmlFor="category">Category</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="category"
                                                name="category"
                                                placeholder="Category"
                                                value={this.state.category}
                                                onChange={this.handleInputChange}
                                            />
                                        </div>
                                        <div className="form-group h3 mb-3 font-weight-normal">
                                            <label htmlFor="price">Price</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                id="price"
                                                name="price"
                                                placeholder="Price"
                                                value={this.state.price}
                                                onChange={this.handleInputChange}
                                            />
                                        </div>
                                        <div className="form-group h3 mb-3 font-weight-normal">
                                            <label htmlFor="qty">Quantity</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                id="quantity"
                                                name="quantity"
                                                placeholder="Quantity"
                                                value={this.state.quantity}
                                                onChange={this.handleInputChange}
                                            />
                                        </div>
                                        <div className="form-group h3 mb-3 font-weight-normal">
                                            <label htmlFor="healthStat">Health Stat</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="healthStat"
                                                name="healthStat"
                                                placeholder="Health Stat"
                                                value={this.state.healthStat}
                                                onChange={this.handleInputChange}
                                            />
                                        </div>
                                        <div className="form-group h3 mb-3 font-weight-normal">
                                            <label htmlFor="ingreduents">Ingredients</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="ingreduents"
                                                name="ingreduents"
                                                placeholder="Ingredients"
                                                value={this.state.ingreduents}
                                                onChange={this.handleInputChange}
                                            />
                                        </div>
                                        <div className="form-group h3 mb-3 font-weight-normal">
                                            <label htmlFor="item_type">Item Type</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="item_type"
                                                name="item_type"
                                                placeholder="Item Type"
                                                value={this.state.item_type}
                                                onChange={this.handleInputChange}
                                            />
                                        </div>
                                        <div className="form-group h3 mb-3 font-weight-normal">
                                            <label htmlFor="weightOrVolume">Weight or Volume</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                id="weightOrVolume"
                                                name="weightOrVolume"
                                                placeholder="Weight or Volume"
                                                value={this.state.weightOrVolume}
                                                onChange={this.handleInputChange}
                                            />
                                        </div>
                                        <br></br>
                                        <div className="col-sm-10">
                                            <button
                                                className="btn btn-success"
                                                type="submit"
                                                style={{marginTop: "15px"}}
                                                onClick={this.onSubmit}
                                            >
                                                Save
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}


export default addproducts;