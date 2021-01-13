import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://intermediary.herokuapp.com/'
})

export default instance;