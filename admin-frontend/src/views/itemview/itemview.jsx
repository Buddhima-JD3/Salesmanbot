<<<<<<< HEAD
import {useContext} from "react";
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Footer from '../../layouts/footer';
import Header from '../../layouts/header';
import owner from '../../apis/modules/owner'
import { useCart } from 'react-use-cart'
=======
import React, {useContext, useEffect, useState} from "react";
import {Link, useParams} from 'react-router-dom';
import Footer from '../../layouts/footer';
import Header from '../../layouts/header';
import owner from '../../apis/modules/owner'
import {useCart} from 'react-use-cart'
>>>>>>> 1a91d0b6f549a1a455b867f016f0582b7d1f9907
import './itemview.css'
import AuthContext from '../../context/AuthContext';


const Itemview = () => {
<<<<<<< HEAD
    const { id } = useParams();
    const [item, setItem] = useState([]);
    const { addItem, inCart, items } = useCart();
    
=======
    const {id} = useParams();
    const [item, setItem] = useState([]);
    const {addItem, inCart, items} = useCart();

>>>>>>> 1a91d0b6f549a1a455b867f016f0582b7d1f9907
    const getProduct = async () => {
        try {
            const arr = await owner.getProduct(id)
            setItem(arr.data)
            // setItems(arr.data)
        } catch {
            setItem(null)
        }
    }

    useEffect(() => {
        getProduct()
    }, [id])
<<<<<<< HEAD
    const { loggedIn } = useContext(AuthContext);
    return (
        <div>
            <Header />
            <img src="https://i.postimg.cc/BbrzhpXf/services-left-dec.png" alt="" class="shape" />

            <div class="container" >
                <div className='shopc'>
                    <h1>PRODUCT DETAILS</h1>
                    {
                    loggedIn !== null && loggedIn.role === 'buyer' && (<>
                    <p><Link to="/homeclient">Products</Link> / {item.sku}</p>
                    </>)
                    }

                    {
                    loggedIn !== null && loggedIn.role === 'owner' && (<>
                    <p><Link to="/homeowner">Products</Link> / {item.sku}</p>
                    </>)
                    }
                </div>
                <div class="container">
                    <div class="product-content product-wrap clearfix product-deatil">
                        <div class="row">
                            <div class="col-md-5 col-sm-12 col-xs-12">
                                <div class="product-image">
                                    <div id="myCarousel-2" class="carousel slide">
                                        <div class="carousel-inner">

                                            <div class="cardiv">
                                                <>
                                                    <div class="imgBx">
                                                        <img src={"http://localhost:5000/img/product/" + item.image} />
                                                    </div>
                                                </>
                                            </div>
                                        </div>
                                        <a class="left carousel-control" href="#myCarousel-2" data-slide="prev"> <span class="glyphicon glyphicon-chevron-left"></span> </a>
                                        <a class="right carousel-control" href="#myCarousel-2" data-slide="next"> <span class="glyphicon glyphicon-chevron-right"></span> </a>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-6 col-md-offset-1 col-sm-12 col-xs-12">
                                <h2 class="name">
                                    {item.name}
                                    {/* <small>Product by Ceylon Agri Pvt.Ltd</small> */}
                                </h2>
                                <hr />
                                <h3 class="price-container">
                                    Rs. {item.price}
                                </h3>
                                <div class="certified">
                                    <ul>
                                        <li>
                                            <a style={{ fontSize: '15px' }}>SKU CODE<span>{item.sku}</span></a>
                                        </li>
                                        <li>
                                            <a style={{ fontSize: '15px' }}>ITEM QTY<span>{item.size}</span></a>
                                        </li>
                                    </ul>
                                </div>
                                <hr />
                                <div class="description description-tabs">
                                    <ul id="myTab" class="nav nav-pills">
                                        <li class="active" style={{ color: 'white' }}><a class="btn btn-secondary">Product Description </a></li>
                                    </ul>
                                    <div class="detail" >
                                        <br />
                                        <p style={{ color: 'gray' }}>
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div class="rowbt" key={item.name}>

                            {
                            loggedIn !== null && loggedIn.role === 'buyer' && (<>
                            <Link to="/cart">
                                <button class="btn btn-success btn-lg" onClick={() => addItem(item)}><i class="fas fa-cart-plus"></i> Add to Cart</button>
                            </Link>
                            </>)
                            }

                            {
                            loggedIn !== null && loggedIn.role === 'owner' && (<>
                            <Link to={`/edit-product/${item._id}`}>
                                <button class="btn btn-success btn-lg"><i class="fas fa-cog"></i> Edit Product</button>
                            </Link>
                            </>)
                            }    
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
=======
    const {loggedIn} = useContext(AuthContext);
    return (
        <div className={"body-div admin-panel-main con-mid"}>
            <div className={"admin-card-container"}>
                <div>
                    <Header/>
                    <img src="https://i.postimg.cc/BbrzhpXf/services-left-dec.png" alt="" className="shape"/>

                    <div className="container">
                        <div className='shopc'>
                            <h1>PRODUCT DETAILS</h1>
                            {
                                loggedIn !== null && loggedIn.role === 'buyer' && (<>
                                    <p><Link to="/homeclient">Products</Link> / {item.sku}</p>
                                </>)
                            }

                            {
                                loggedIn !== null && loggedIn.role === 'owner' && (<>
                                    <p><Link to="/homeowner">Products</Link> / {item.sku}</p>
                                </>)
                            }
                        </div>
                        <div className="container">
                            <div className="product-content product-wrap clearfix product-deatil">
                                <div className="row">
                                    <div className="col-md-5 col-sm-12 col-xs-12">
                                        <div className="product-image">
                                            <div id="myCarousel-2" className="carousel slide">
                                                <div className="carousel-inner">

                                                    <div className="cardiv">
                                                        <>
                                                            <div className="imgBx">
                                                                <img
                                                                    src={"http://localhost:5000/img/product/" + item.image}/>
                                                            </div>
                                                        </>
                                                    </div>
                                                </div>
                                                <a className="left carousel-control" href="#myCarousel-2"
                                                   data-slide="prev">
                                                    <span className="glyphicon glyphicon-chevron-left"></span> </a>
                                                <a className="right carousel-control" href="#myCarousel-2"
                                                   data-slide="next">
                                                    <span className="glyphicon glyphicon-chevron-right"></span> </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6 col-md-offset-1 col-sm-12 col-xs-12">
                                        <h2 className="name">
                                            {item.name}
                                            {/* <small>Product by Ceylon Agri Pvt.Ltd</small> */}
                                        </h2>
                                        <hr/>
                                        <h3 className="price-container">
                                            Rs. {item.price}
                                        </h3>
                                        <div className="certified">
                                            <ul>
                                                <li>
                                                    <a style={{fontSize: '15px'}}>SKU CODE<span>{item.sku}</span></a>
                                                </li>
                                                <li>
                                                    <a style={{fontSize: '15px'}}>ITEM QTY<span>{item.size}</span></a>
                                                </li>
                                            </ul>
                                        </div>
                                        <hr/>
                                        <div className="description description-tabs">
                                            <ul id="myTab" className="nav nav-pills">
                                                <li className="active" style={{color: 'white'}}><a
                                                    className="btn btn-secondary">Product Description </a></li>
                                            </ul>
                                            <div className="detail">
                                                <br/>
                                                <p style={{color: 'gray'}}>
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <hr/>
                                    <div className="rowbt" key={item.name}>

                                        {
                                            loggedIn !== null && loggedIn.role === 'buyer' && (<>
                                                <Link to="/cart">
                                                    <button className="btn btn-success btn-lg"
                                                            onClick={() => addItem(item)}><i
                                                        className="fas fa-cart-plus"></i> Add to Cart
                                                    </button>
                                                </Link>
                                            </>)
                                        }

                                        {
                                            loggedIn !== null && loggedIn.role === 'owner' && (<>
                                                <Link to={`/edit-product/${item._id}`}>
                                                    <button className="btn btn-success btn-lg"><i
                                                        className="fas fa-cog"></i> Edit
                                                        Product
                                                    </button>
                                                </Link>
                                            </>)
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Footer/>
                </div>
            </div>
>>>>>>> 1a91d0b6f549a1a455b867f016f0582b7d1f9907
        </div>
    );
};
<script>

</script>
export default Itemview;