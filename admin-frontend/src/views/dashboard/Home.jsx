import React from 'react';
<<<<<<< HEAD
import axios from "../../apis/axios";
=======
>>>>>>> 1a91d0b6f549a1a455b867f016f0582b7d1f9907
import product from "../../apis/modules/product";

const Home = () => {

<<<<<<< HEAD
    const creatGroup = async()=>{
        let data = {
            category:"A",
            stock:"1",
            size:10,
            sku:"ZZZZ",
            price:1200,
            description:"About product",
            name:"product 1"
=======
    const creatGroup = async () => {
        let data = {
            category: "A",
            stock: "1",
            size: 10,
            sku: "ZZZZ",
            price: 1200,
            description: "About product",
            name: "product 1"
>>>>>>> 1a91d0b6f549a1a455b867f016f0582b7d1f9907
        }

        let respond = await product.createProduct(data)
    }
    return (
<<<<<<< HEAD
        <div>
            Hello Home
            <button type="submit" onClick={(e)=>{creatGroup()}}>create group</button>
=======
        <div className={"body-div admin-panel-main con-mid"}>
            <div className={"admin-card-container"}>
                <div>
                    Hello Home
                    <button type="submit" onClick={(e) => {
                        creatGroup()
                    }}>create group</button>
                </div>
            </div>
>>>>>>> 1a91d0b6f549a1a455b867f016f0582b7d1f9907
        </div>
    );
};

export default Home;