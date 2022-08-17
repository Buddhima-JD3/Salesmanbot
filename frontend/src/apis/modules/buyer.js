import api from "../axios";
const resource = '/api/user';

export default {
    listPrduct: () => api.get(`${resource}`)
}