<<<<<<< HEAD
import api from "../axios";


// eslint-disable-next-line import/no-anonymous-default-export
export default  {
    login: (payload) => api.post(`/signing`,payload),
    register: (payload) => api.post(`/signup`,payload),
    currentUser: () => api.get(`/current-user`),
    logout: () => api.get(`/logout`),
=======
import axios from "../axios";


// eslint-disable-next-line import/no-anonymous-default-export
export default {
    login: (payload) => axios.post(`/signing`, payload),
    register: (payload) => axios.post(`/signup`, payload),
    currentUser: () => axios.get(`/current-user`),
    logout: () => axios.get(`/logout`),
>>>>>>> 1a91d0b6f549a1a455b867f016f0582b7d1f9907
}