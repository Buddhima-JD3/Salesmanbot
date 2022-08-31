import api from "../axios";
<<<<<<< HEAD
=======

>>>>>>> 1a91d0b6f549a1a455b867f016f0582b7d1f9907
const resource = '/api/owner';

export default {
    listPrduct: () => api.get(`${resource}`),
    createProduct: (payload) => api.post(`${resource}`, payload),
    getProduct: (id) => api.get(`${resource}/${id}`),
    updateProduct: (id, payload) => api.patch(`${resource}/${id}`, payload),
    deleteProduct: (id) => api.delete(`${resource}/${id}`)
}