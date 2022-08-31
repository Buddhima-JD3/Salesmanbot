import axios from "../axios";


// eslint-disable-next-line import/no-anonymous-default-export
export default {
    retrieveUsers: () => axios.get(`/api/getallusers`),
    deleteUser: (id) => axios.delete(`/api/deleteuser/${id}`)
}