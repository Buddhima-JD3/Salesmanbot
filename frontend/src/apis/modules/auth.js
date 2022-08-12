import api from "../axios";


// eslint-disable-next-line import/no-anonymous-default-export
export default  {
    login: (payload) => api.post(`/signing`,payload),
    register: (payload) => api.post(`/signup`,payload),
    currentUser: () => api.get(`/current-user`),
    logout: () => api.get(`/logout`),
}