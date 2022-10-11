import React, {Component} from "react";
import MUIDataTable from "mui-datatables";
import productsModule from "../../../apis/modules/products";
import {useParams} from "react-router-dom";

const data = [];

class editproducts extends Component {

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

    componentDidMount() {
        this.retrieveProducts();

    }

    retrieveProducts() {
        let url = window.location.toString();
        let params = url?.split("/")[4];
        productsModule.retrieveEditProduct(params).then((res) => {
            //console.log();
            let product = res.data;

            this.setState({
                productName: product.productName,
                brand: product.brand,
                category: product.category,
                price: product.price,
                quantity: product.quantity,
                healthStat:product.healthStat,
                ingreduents:product.ingreduents,
                item_type:product.item_type,
                weightOrVolume:product.weightOrVolume
            });
        });
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
        const { productName, brand, category, price, quantity } = this.state;

        const data = {
            productName: productName,
            brand: brand,
            category: category,
            price: price,
            quantity: quantity,
            healthStat:this.state.healthStat,
            ingreduents:this.state.ingreduents,
            item_type:this.state.item_type,
            weightOrVolume:this.state.weightOrVolume
        };
        let url = window.location.toString();
        let params = url?.split("/")[4];
        console.log(data);
        productsModule.updateProduct(params,data).then((res) => {
            if (res.data == 'Product details updated successfully') {
                alert("Product Updated!");
                window.location.href = "/products";
            }else{
                alert("Invalid Details!");
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


export default editproducts;