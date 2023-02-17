import axios from 'axios';

const instance = axios.create({
    // baseURL: 'https://music-box-inter.herokuapp.com/',
    // baseURL: 'https://intermediary.herokuapp.com/',
    // baseURL: 'https://intermediary-production.up.railway.app/',
    baseURL: 'https://large-underwear-production.up.railway.app',
})

instance.interceptors.response.use(response => {
    if (response.data.error) throw new Error('NoRetry')
    return response
})


export default instance;