import React, { useState, useEffect } from 'react';
import '../../client/home/chome.css'
import { Link } from 'react-router-dom';
import Footer from '../../../layouts/footer';
import Header from '../../../layouts/header';
import owner from '../../../apis/modules/owner'

const OwnerHome = () => {

    const [products, setProducts] = useState([]);

    const listProduct = async () => {
        try {
            const productsArr = await owner.listPrduct()
            setProducts(productsArr.data)
        } catch {
            setProducts(null)
        }
    }

    useEffect(() => {
        listProduct()
    }, [])

    return (
        <div>
            <Header />
            <img src="https://i.postimg.cc/BbrzhpXf/services-left-dec.png" alt="" class="shape" />

            <div class="container" >
                <div className='shopc'>
                    <h1>MY PRODUCT LISTING</h1>
                    <p>My Products</p>
                <br/>
                <form action="#" method="get" id="searchForm" class="input-group">
                        <input type="search" class="form-control" name="search" placeholder="Search My Products..."
                        />
                        <button type="button" style={{ borderRadius: '0px' }} class="btn btn-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" /></svg>
                        </button>
                    </form>
                </div>
                <div className='c2'>
                    <div class='rowp'>
                        {products.map(item => {
                            return (
                                <div class="cardp">
                                    <>
                                        <div class="imgBx">
                                            <img src={"http://localhost:5000/img/product/" + item.image} />
                                        </div><div class="contentBx">
                                            <h2>{item.name}</h2>
                                            <p style={{ color: '#ffffff', paddingTop: "10px"}}>Price : {item.price}</p>
                                            <div class="size">
                                                <h3>Qty :</h3>
                                                <span>{item.size}</span>
                                            </div>
                                            <div class="color" >
                                                <h3>SKU : {item.sku}</h3>
                                            </div>
                                            <Link style={{marginRight: '4%'}} to={`/itemview/${item._id}`}><i class="fas fa-eye"></i> View</Link>
                                            <Link style={{marginRight: '4%'}} to={`/edit-product/${item._id}`}><i class="fas fa-cog"></i> Edit</Link>
                                        </div>
                                    </>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default OwnerHome;