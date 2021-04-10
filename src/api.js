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
        const { cover_medium: cover, title: album_title } = song.album;
        const { name: artist_name, id: artist_id } = song.artist
        const { id, title, duration, preview } = song;
        return { id, title, artist_name, artist_id, cover, album_title, duration, preview }
    })
    return songs;
}

const getArtistAlbums = async id => {
    const { data } = await axios.get(`/artist/${id}/albums`);
    // if (data.error) throw Error('NoRetry')
    return data.data;
}

const getArtistRelated = async id => {
    const { data } = await axios.get(`/artist/${id}/related?limit=10`);
    return data.data;
}

const getAlbum = async id => {
    const { data } = await axios.get(`/album/${id}`);
    const { id: artist_id, name: artist_name, picture_medium: artist_picture } = data.artist;
    const { id: album_id, title, cover_medium: cover, release_date, nb_tracks: tracks_number, duration } = data;
    const tracks = data.tracks.data.map(track => {
        const { name: artist_name, id: artist_id } = track.artist;
        const { id, title, preview, duration } = track;
        return { id, title, artist_name, artist_id, cover, preview, duration };
    })
    return { album_id, artist_id, artist_name, artist_picture, title, cover, tracks, release_date, tracks_number, duration };
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

const getSearchResult = async (query, type) => {
    //remove last char and convert to lowercase
    const editedType = type.slice(0, -1).toLowerCase()

    const { data } = await axios.get(`/search/${editedType}?q=${query}&limit=5`)

    if (!data.data.length) throw new Error('NoRetry')

    return data.data;
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