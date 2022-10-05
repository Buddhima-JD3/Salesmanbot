import React from 'react';
import axios from "../../apis/axios";
import product from "../../apis/modules/product";

const Home = () => {

    const creatGroup = async()=>{
        let data = {
            category:"A",
            stock:"1",
            size:10,
            sku:"ZZZZ",
            price:1200,
            description:"About product",
            name:"product 1"
        }

        let respond = await product.createProduct(data)
    }
    return (
        <div>
            Hello Home
            <button type="submit" onClick={(e)=>{creatGroup()}}>create group</button>
        </div>
    );
};

export default Home;