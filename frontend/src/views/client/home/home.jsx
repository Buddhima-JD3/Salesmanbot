import React, { useState, useEffect } from 'react';
import './chome.css'
import './search-filter.css'
import { Link } from 'react-router-dom';
import Footer from '../../../layouts/footer';
import Header from '../../../layouts/header';
import buyer from '../../../apis/modules/buyer'

const ClientHome = () => {

    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");

    const listProduct = async () => {
        try {
            const productsArr = await buyer.listPrduct()
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
                    <h1>SHOP THE COLLECTION</h1>
                    <p>Products</p>
                    <br />
                    <form action="#" method="get" id="searchForm" class="input-group">
                        <input type="search" class="form-control" name="search" value={search} placeholder="Search Products..." onChange={(e) => {
                            setSearch(e.target.value);
                        }} />
                        <button type="button" style={{ borderRadius: '0px' }} class="btn btn-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" /></svg>
                        </button>
                    </form>
                </div>

                <div className='c2'>
                    <div class='rowp'>
                        {products.filter((val) => {
                            if (search === "") {
                                return val;
                            } else if (
                                val.name.toLowerCase().includes(search.toLowerCase())
                            ) {
                                return val;
                            } else {
                                return null;
                            }
                        }).map((item, index) => {
                            return (
                                <div class="cardp" key={index}>
                                    <>
                                        <div class="imgBx">
                                            <img src={"http://localhost:5000/img/product/" + item.image} />
                                        </div><div class="contentBx">
                                            <h2>{item.name}</h2>
                                            <p style={{ color: '#ffffff' }}>Price : Rs. {item.price}</p>
                                            <div class="size">
                                                <h3>Size :</h3>
                                                <span>{item.size}</span>
                                            </div>
                                            <div class="color" style={{ padding: "5px" }}>
                                                <h3>SKU : {item.sku}</h3>
                                            </div>
                                            {/* <div className='btn btn-light' href="#" onClick={() => addItem(item)}>Add to Cart</div> */}
                                            <Link to={`/itemview/${item._id}`}><i class="fas fa-eye"></i> View</Link>
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

export default ClientHome;