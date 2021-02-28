import axios from './axios';

const getArtists = async genre => {
    const { data } = await axios.get(`/genre/${genre}/artists`);
    return data;
}

const getArtistInfo = async id => {

    let info;

    await Promise.all([
        axios.get(`/artist/${id}`),
        axios.get(`/artist/${id}/top?limit=10`)
    ]).then(response => {
        const { name, picture_xl: picture, nb_fan: fans, nb_album: albums } = response[0].data;

        const { data: songs } = response[1].data;

        info = { name, picture, fans, albums, songs }
    })

    return info;
}

export {
    getArtists,
    getArtistInfo
}