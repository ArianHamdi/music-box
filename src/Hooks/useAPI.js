import { useEffect } from 'react'
import { useQuery } from 'react-query'
import { usePlaylistDispatch } from '../Contexts/playlist-context'
import genres from '../data/genres'
import * as api from '../api'

const useAllArtists = genre => {
    const id = genres[genre]
    return useQuery(['artists', id], () => api.getArtists(id))
}

const useArtistInformation = id => {
    return useQuery(['artist', id], () => api.getArtistInformation(id));
}

const useArtistPlaylist = id => {
    return useQuery(['playlist', id], () => api.getArtistPlaylist(id));
}

const useArtistAlbums = id => {
    return useQuery(['albums', id], () => api.getArtistAlbums(id));
}

const useArtistRelated = id => {
    return useQuery(['related', id], () => api.getArtistRelated(id));
}

const useAlbum = id => {
    return useQuery(['tracks', id], () => api.getAlbum(id))
}

const useTopTracks = () => {
    return useQuery('top_tracks', api.getTopTracks)
}

const useTopAlbums = () => {
    return useQuery('top_albums', api.getTopAlbums)
}

const useTopArtists = () => {
    return useQuery('top_artists', api.getTopArtists)
}

const useSearchResult = query => {
    // console.log(query);
    return useQuery(['search', query], () => api.getSearchResult(query), { enabled: !!query })
}


const usePrefetchArtist = () => {
    const dispatch = usePlaylistDispatch();

    useEffect(() => {
        let { artist = 13, index } = JSON.parse(localStorage.getItem('playlist')) || {};
        index = Number.isInteger(index) ? index : 0;
        index = Number.isInteger(artist) ? artist : 13;

        // api.getArtistInfo(artist).then(response => {
        //     const payload = { artist, playlist: response.songs, index }
        //     dispatch({ type: 'playlist', payload })
        // })
    })
}

export {
    useTopTracks,
    useTopAlbums,
    useTopArtists,
    useAllArtists,
    useArtistInformation,
    useArtistPlaylist,
    useArtistAlbums,
    useArtistRelated,
    usePrefetchArtist,
    useAlbum,
    useSearchResult
}