import axios from './axios';

const getArtists = async genre => {
    const { data } = await axios.get(`/genre/${genre}/artists`);
    return data;
}

const getArtistInformation = async id => {
    const { data } = await axios.get(`/artist/${id}`);
    const { name, nb_fan: fans, picture_medium: picture, } = data;
    return { name, fans, picture };
}

const getArtistPlaylist = async id => {
    const { data } = await axios.get(`/artist/${id}/top?limit=10`);
    const songs = data.data.map(song => {
        const { cover_medium: cover } = song.album;
        const { name: artist_name, id: artist_id } = song.artist
        const { id, title, duration, preview } = song;
        return { id, title, artist_name, artist_id, cover, duration, preview }
    })
    return songs;
}

const getArtistAlbums = async id => {
    const { data } = await axios.get(`/artist/${id}/albums`);
    return data.data;
}

const getArtistRelated = async id => {
    const { data } = await axios.get(`/artist/${id}/related?limit=10`);
    return data.data;
}

const getAlbum = async id => {
    const { data } = await axios.get(`/album/${id}`);
    const { id: artist_id, name: artist_name, picture_medium: artist_picture } = data.artist;
    const { title, cover_medium: cover, release_date, nb_tracks: tracks_number, duration } = data;
    const tracks = data.tracks.data.map(track => {
        const { name: artist_name, id: artist_id } = track.artist;
        const { id, title, preview, duration } = track;
        return { id, title, artist_name, artist_id, cover, preview, duration };
    })
    return { artist_id, artist_name, artist_picture, title, cover, tracks, release_date, tracks_number, duration };
}

const getTopTracks = async () => {
    const { data } = await axios.get('/chart/0/tracks?limit=10')
    return data.data
}

const getTopAlbums = async () => {
    const { data } = await axios.get('/chart/0/albums?limit=10')
    return data.data
}

const getTopArtists = async () => {
    const { data } = await axios.get('/chart/0/artists?limit=10')
    return data.data
}

const getSearchResult = async query => {
    const searchArtists = axios.get(`/search/artist?q=${query}&limit=10`)
    const searchAlbums = axios.get(`/search/album?q=${query}&limit=10`)

    const { data: artists } = await searchArtists;
    const { data: albums } = await searchAlbums;

    const data = {
        Artists: artists.data,
        Albums: albums.data
    }

    return data
}



export {
    getTopTracks,
    getTopAlbums,
    getTopArtists,
    getArtists,
    getArtistInformation,
    getArtistPlaylist,
    getArtistAlbums,
    getArtistRelated,
    getAlbum,
    getSearchResult
}