'use strict';

const firebase = require('../db');
const Product = require("../models/products");
const firestore = firebase.firestore();

const addProduct = async (req, res, next) => {
    try {
        const data = req.body;
        await firestore.collection('products').doc().set(data);
        res.send('Record saved successfully');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getAllProducts = async (req, res, next) => {
    try {
        const products = await firestore.collection('products');
        const data = await products.get();
        const productsArray = [];

        if(data.empty) {
            res.status(400).send('No product record found');            
        }else{
            data.forEach(doc => {
                const product = new Product(
                    doc.id,
                    doc.data().productName,
                    doc.data().brand,
                    doc.data().item_type,
                    doc.data().price,
                    doc.data().weightOrVoluem,
                    doc.data().ingreduents,
                    doc.data().nutrition,
                    doc.data().healthStat
                );
                productsArray.push(product);
            });
            res.send(productsArray);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getProduct = async (req, res, next) => {
    try {
        const id = req.params.id;
        const product = await firestore.collection('products').doc(id);
        const data = await product.get();

        if(!data.exists) {
            res.status(400).send('Product with the given ID not found');
        }else {
            res.send(data.data());
        }
    }catch (error) {
        res.status(400).send(error.message);
    }
}

const updateProduct = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const product = await firestore.collection('products').doc(id);
        await product.update(data);

        res.send('Product details updated successfully');

    }catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteProduct = async (req, res, next) => {
    try {
        const id = req.params.id;
        await firestore.collection('products').doc(id).delete();
        res.send('Record deleted!!');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    addProduct,
    getAllProducts,
    getProduct,
    updateProduct,
    deleteProduct
}
