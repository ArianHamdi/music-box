import axios from './axios';

const getArtists = async genre => {
    const { data } = await axios.get(`/genre/${genre}/artists`);
    return data;
}

export {
    getArtists
}