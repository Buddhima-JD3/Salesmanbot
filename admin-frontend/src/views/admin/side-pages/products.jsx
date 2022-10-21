import React, {Component} from "react";
import MUIDataTable from "mui-datatables";
import productsModule from "../../../apis/modules/products";

const data = [];

class products extends Component {

    constructor(props) {
        super(props);

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
                data.push([(i + 1), /*product[i].id, */product[i].productName, product[i].brand, product[i].price, product[i].weightOrVoluem,
                    <div>
                        <a className="btn btn-warning" href={`/editproduct/${product[i].id}`}>
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

        const columns = ["Index", /*"Code",*/ "Product", "Brand", "Price", "Weight/Volume", "Action"];
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
                        <a className="btn btn-info" href={'/addproduct'}>
                            Add Product
                        </a>
                        <br/>
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


export default products;