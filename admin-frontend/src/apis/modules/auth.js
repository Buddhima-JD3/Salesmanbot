import axios from "../axios";


// eslint-disable-next-line import/no-anonymous-default-export
export default {
    login: (payload) => axios.post(`/signing`, payload),
    register: (payload) => axios.post(`/signup`, payload),
    currentUser: () => axios.get(`/current-user`),
    logout: () => axios.get(`/logout`),
}