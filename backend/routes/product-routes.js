const express = require('express');
const {addProduct, getAllProducts, getProduct, updateProduct, deleteProduct} = require('../controllers/productController');

const router = express.Router();

router.post('/addproduct', addProduct);
router.get('/getallproducts', getAllProducts);
router.get('/getproduct/:id', getProduct);
router.put('/updateproduct/:id', updateProduct);
router.delete('/deleteproduct/:id', deleteProduct);

module.exports = {
    routes: router
}