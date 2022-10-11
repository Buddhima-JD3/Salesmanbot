import axios from "../axios";


// eslint-disable-next-line import/no-anonymous-default-export
export default {
    retrieveProducts: () => axios.get(`/api/getallproducts`),
    retrieveEditProduct: (idp) => axios.get(`/api/getproduct/${idp}`),
    deleteProduct: (id) => axios.delete(`/api/deleteproduct/${id}`),
    updateProduct: (idp,data) => axios.put(`/api/updateproduct/${idp}`,data),
    addProduct: (data) => axios.post(`/api/addproduct`,data)
}