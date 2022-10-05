import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../../layouts/footer';
import Header from '../../../layouts/header';
import '../../client/cart/cart.css'

const Orders = () => {

    return (
        <div>
                <div>
                    <Header />
                    <img src="https://i.postimg.cc/BbrzhpXf/services-left-dec.png" alt="" class="shape" />

                    <div class="container" >
                        <div className='shopc'>
                            <h1>ORDERS</h1>
                            <p><Link to="/homeclient">Home</Link> / Orders</p>
                        </div>
                        <div class="container pb-5 mt-n2 mt-md-n3">
                            <div class="row">
                                <div class="col">
                                    <h2 class="h6 d-flex flex-wrap justify-content-between align-items-center px-4 py-3"><span style={{ fontWeight: "bold", fontSize: "30px", fontfamily: "Poppins" }}>Orders</span>
                                        <Link to="/homeclient"><a class="font-size-sm" href="/homeclient"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left" style={{ fontWeight: "bold", fontSize: "30px", fontfamily: "Poppins" }}><polyline points="15 18 9 12 15 6"></polyline></svg>Back to Home</a></Link></h2>
                                        
                                        <form action="#" method="get" id="searchForm" class="input-group">
                                            <input type="search" class="form-control" name="search" placeholder="Search Orders..."  />
                                            <button type="button" style={{ borderRadius: '0px' }} class="btn btn-primary">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" /></svg>
                                            </button>
                                        </form>
                                            <br/><br/>
                                            <div class="d-sm-flex justify-content-between my-4 pb-4 border-bottom">
                                                <div class="media d-block d-sm-flex text-center text-sm-left">
                                                    <a class="cart-item-thumb mx-auto mr-sm-4" href="#">
                                                        <div class="cardc">
                                                            <div class="imgBxc">
                                                            <Link ><img src="https://i.postimg.cc/jS1Z4tDd/189-1894807-old-milk-bottle-png-transparent-png-copy.png" /></Link>   
                                                            </div>
                                                        </div></a>
                                                    <div class="media-body pt-3">
                                                        <Link ><h3 class="product-card-title font-weight-semibold border-0 pb-0">Milk Bottle</h3></Link>
                                                        <div class="font-size-sm"><span class="text-muted mr-2">Qty:</span>3</div>
                                                        {/* <div class="font-size-sm"><span class="text-muted mr-2">Color:</span>Black</div> */}
                                                        <div class="font-size-sm"><span class="text-muted mr-2">SKU:</span>CA8001</div>
                                                        <div class="font-size-lg text-primary pt-2">Rs. 1200</div>
                                                    </div>
                                                </div>

                                                <div class="pt-2 pt-sm-0 pl-sm-3 mx-auto mx-sm-0 text-center text-sm-left" style={{ width: "auto" }}>
                                                        <h3 style={{textAlign: 'center'}} class="product-card-title font-weight-bold border-0 pb-0">Shipping Adress</h3>
                                                        <p style={{textAlign: 'center'}}>Kavindu Lakshan, Kandy Road, Malabe</p> 
                                                        <h3 style={{textAlign: 'center'}} class="product-card-title font-weight-bold border-0 pb-0">Shipping Service</h3>
                                                        <button class="btn btn-danger btn-sm btn-block mb-2">Pronto</button> 
                                                </div>
                                                <div class="pt-2 pt-sm-0 pl-sm-3 mx-auto mx-sm-0 text-center text-sm-left" style={{ width: "auto" }}>
                                                    <from>
                                                        <h3 style={{textAlign: 'center'}} class="product-card-title font-weight-bold border-0 pb-0">Update Shipping Status</h3>
                                                        <div class="input-group-btn search-panel">
                                                            <select name="search_param" id="search_param" style={{borderRadius: '0px', width: '200px'}} class="btn btn-light dropdown-toggle" data-toggle="dropdown">
                                                                <option value="all">---</option>
                                                                <option value="username">Processing</option>
                                                                <option value="email">Shipped</option>
                                                                <option value="studentcode">Deliverd</option>
                                                            </select>
                                                        </div>
                                                        <button style={{marginTop: '15px'}} class="btn btn-secondary btn-sm btn-block mb-2">Update</button>  
                                                    </from> 
                                                </div>
                                            </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Footer />
                </div>
        </div>

    );
};

export default Orders;