import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../../layouts/footer';
import Header from '../../../layouts/header';
import { useCart } from 'react-use-cart';
import './cart.css'
import Payment from '../payment/payment'

const Cart = () => {
    const [qty, setQty] = useState('')
    const [cartDisplay, setCart] = useState(true)
    const [paymenttDisplay, setPayment] = useState(false)
    const {
        items,
        totalItems,
        isEmpty,
        totalUniqueItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart
    } = useCart();

    if (isEmpty) return (
        <>
            <Header />
            <img src="https://i.postimg.cc/BbrzhpXf/services-left-dec.png" alt="" class="shape" />
            <div class="container" >
                <div className='shopc'>
                    <h1>CART</h1>
                    <p><Link to="/homeclient">Home</Link> / Cart</p>
                </div>
            </div>
            <div class="container">
                <div class="col-sm-12 empty-cart-cls text-center">
                    {/* <div style={{padding: '20px', color: '#515151'}}><svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16"><path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/></svg></div> */}
                    <div className='crti'>
                        <div style={{ padding: '20px', color: '#515151' }}><img src="https://i.postimg.cc/SRv62yX7/ezgif-2-7ee06abb16.gif"></img></div>
                    </div>
                    <h4><strong style={{ lineHeight: '30px', color: '#515151' }}>Your Cart is Empty</strong></h4>
                    <h5 style={{ color: '#515151', paddingBottom: '25px' }}>Add something to make me happy :)</h5>
                    <Link to="/homeclient"><div className='btn2' >Continue Shopping</div></Link>
                </div>
            </div>
            <Footer />
        </>
    );

    const changeStateHandler = () => {
        setCart(false);
        setPayment(true);
    };

    return (
        <div>
            {cartDisplay && (
                <div>
                    <Header />
                    <img src="https://i.postimg.cc/BbrzhpXf/services-left-dec.png" alt="" class="shape" />

                    <div class="container" >
                        <div className='shopc'>
                            <h1>CART</h1>
                            <p><Link to="/homeclient">Home</Link> / Cart</p>
                        </div>
                        <div class="container pb-5 mt-n2 mt-md-n3">
                            <div class="row">
                                <div class="col-xl-9 col-md-8">
                                    <h2 class="h6 d-flex flex-wrap justify-content-between align-items-center px-4 py-3"><span style={{ fontWeight: "bold", fontSize: "30px", fontfamily: "Poppins" }}>Products</span>
                                        <Link to="/homeclient"><a class="font-size-sm" href="/homeclient"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left" style={{ fontWeight: "bold", fontSize: "30px", fontfamily: "Poppins" }}><polyline points="15 18 9 12 15 6"></polyline></svg>Continue Shopping</a></Link></h2>
                                    {items.map((item, index) => {
                                        return (
                                            <div class="d-sm-flex justify-content-between my-4 pb-4 border-bottom" key={index}>
                                                <div class="media d-block d-sm-flex text-center text-sm-left">
                                                    <a class="cart-item-thumb mx-auto mr-sm-4" href="#">
                                                        <div class="cardc">
                                                            <div class="imgBxc">
                                                                <Link to={`/itemview/${item._id}`}><img src={"http://localhost:5000/img/product/" + item.image} /></Link>
                                                            </div>
                                                        </div></a>
                                                    <div class="media-body pt-3">
                                                        <Link to={`/itemview/${item._id}`}><h3 class="product-card-title font-weight-semibold border-0 pb-0">{item.name}</h3></Link>
                                                        {/* <div class="font-size-sm"><span class="text-muted mr-2">Size:</span>{item.size}</div> */}
                                                        {/* <div class="font-size-sm"><span class="text-muted mr-2">Color:</span>Black</div> */}
                                                        <div class="font-size-sm"><span class="text-muted mr-2">SKU:</span>{item.sku}</div>
                                                        <div class="font-size-lg text-primary pt-2">Rs. {item.price}</div>
                                                    </div>
                                                </div>


                                                <div class="pt-2 pt-sm-0 pl-sm-3 mx-auto mx-sm-0 text-center text-sm-left" style={{ width: "auto" }}>
                                                    {/* <div class="form-group mb-2" style={{ textAlign: "center" }}>
                                                   <label for="quantity1">Qty: {item.quantity}</label>
                                                   <input class="form-control form-control-sm" type="number" id="quantity1" onChange={(e) => setQty(e.target.value)} min={0} />
                                               </div> */}
                                                    {/* <button class="btn btn-outline-secondary btn-sm btn-block mb-2" type="button" onClick={() => updateItemQuantity(item.id, qty)}>
                                                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-refresh-cw mr-1">
                                                       <polyline points="23 4 23 10 17 10"></polyline>
                                                       <polyline points="1 20 1 14 7 14"></polyline>
                                                       <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
                                                   </svg>Update Cart</button> */}
                                                    <div className='plusm'>
                                                        <input className='crt' type="button" onClick={() => updateItemQuantity(item.id, item.quantity - 1)} value="-" />
                                                        <input className='crt' type="text" name="quantity" value={item.quantity} maxlength="2" max="10" size="1" id="number" />
                                                        <input className='crt' type="button" onClick={() => updateItemQuantity(item.id, item.quantity + 1)} value="+" />
                                                    </div>
                                                    <br />
                                                    <button class="btn btn-outline-danger btn-sm btn-block mb-2" type="button" onClick={() => removeItem(item.id)}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2 mr-1">
                                                            <polyline points="3 6 5 6 21 6"></polyline>
                                                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                                            <line x1="10" y1="11" x2="10" y2="17"></line>
                                                            <line x1="14" y1="11" x2="14" y2="17"></line>
                                                        </svg>Remove</button>


                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                                <div class="col-xl-3 col-md-4 pt-3 pt-md-0">
                                    <h2 class="h6 px-4 py-3 bg-info text-center" style={{ color: 'white' }}>Subtotal</h2>
                                    {/* <div class="h3 font-weight-semibold text-center py-3">Cart ({totalUniqueItems}) Total Items ({totalItems}) </div> */}
                                    <div class="h3 font-weight-semibold text-center py-3">Rs. {cartTotal}</div>
                                    <h3 class="h6 pt-1 font-weight-semibold" style={{ "textAlign": "center" }}>Total Items: {totalItems}</h3>
                                    <hr />
                                    <center>
                                    <h3 style={{paddingBottom: '15px'}} class="h6 pt-4 font-weight-semibold"><span class="badge badge-success mr-2">S</span>Shipping Service</h3>
                                    <div class="input-group-btn search-panel">
                                        <select name="search_param" id="search_param" style={{borderRadius: '0px', width: '200px'}} class="btn btn-light dropdown-toggle" data-toggle="dropdown">
                                            <option value="all">-Shipping Service-</option>
                                            <option value="username">Pronto</option>
                                            <option value="email">Domex</option>
                                            <option value="studentcode">DHL</option>
                                        </select>
                                    </div><br/>
                                    <p style={{fontWeight: 'bold'}} >Shipping Fee : Rs. 300</p>
                                    <button class="btn btn-outline-success btn-sm btn-block mb-2"><i class="fas fa-plane"></i>  Shipping Address</button> 
                                    </center>
                                    
                                    <div style={{marginTop: '20px'}} onClick={(e) => { changeStateHandler(e) }} ><a class="btn btn-primary btn-block" href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-credit-card mr-2">
                                            <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                                            <line x1="1" y1="10" x2="23" y2="10"></line>
                                        </svg>Pay with Card</a></div>
                                        <br/>
                                    <Link to=''><div><a class="btn btn-success btn-block" href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-phone-vibrate" viewBox="0 0 16 16">
                                    <path d="M10 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4zM6 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H6z"/>
                                    <path d="M8 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM1.599 4.058a.5.5 0 0 1 .208.676A6.967 6.967 0 0 0 1 8c0 1.18.292 2.292.807 3.266a.5.5 0 0 1-.884.468A7.968 7.968 0 0 1 0 8c0-1.347.334-2.619.923-3.734a.5.5 0 0 1 .676-.208zm12.802 0a.5.5 0 0 1 .676.208A7.967 7.967 0 0 1 16 8a7.967 7.967 0 0 1-.923 3.734.5.5 0 0 1-.884-.468A6.967 6.967 0 0 0 15 8c0-1.18-.292-2.292-.807-3.266a.5.5 0 0 1 .208-.676zM3.057 5.534a.5.5 0 0 1 .284.648A4.986 4.986 0 0 0 3 8c0 .642.12 1.255.34 1.818a.5.5 0 1 1-.93.364A5.986 5.986 0 0 1 2 8c0-.769.145-1.505.41-2.182a.5.5 0 0 1 .647-.284zm9.886 0a.5.5 0 0 1 .648.284C13.855 6.495 14 7.231 14 8c0 .769-.145 1.505-.41 2.182a.5.5 0 0 1-.93-.364C12.88 9.255 13 8.642 13 8c0-.642-.12-1.255-.34-1.818a.5.5 0 0 1 .283-.648z"/>
                                    </svg>  Pay with Mobile</a></div> </Link>   
                                </div>
                            </div>
                        </div>
                    </div>

                    <Footer />
                </div>
            )}

            {paymenttDisplay && (
                <Payment total={cartTotal} />
            )}
        </div>

    );
};

export default Cart;