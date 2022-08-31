import axios from "axios";

const instance = axios.create({
<<<<<<< HEAD
    baseURL:'http://localhost:5000'
})

if(localStorage.getItem('JWT')){
=======
    baseURL: 'http://localhost:8080'
})

if (localStorage.getItem('JWT')) {
>>>>>>> 1a91d0b6f549a1a455b867f016f0582b7d1f9907
    instance.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('JWT')}`;
}

export default instance;