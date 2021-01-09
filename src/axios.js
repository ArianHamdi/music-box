import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.deezer.com/'
})

export default instance;
