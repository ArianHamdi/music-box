import { useEffect } from 'react'
import { useQuery } from 'react-query'
import { usePlaylistDispatch } from '../Contexts/playlist-context'
import * as api from '../api'

const genreID = {
    'blues': 152,
    'classical': 98,
    'country': 84,
    'electro': 106,
    'hip-hop': 116,
    'indie': 81,
    'jazz': 129,
    'latin': 197,
    'metal': 464,
    'pop': 132,
    'r&b': 165,
    'reggae': 144,
    'soul&funk': 169,
    'rock': 152
}

const useAllArtists = genre => {
    const id = genreID[genre]
    return useQuery(['artists', id], () => api.getArtists(id))
}

const useArtistInfo = id => {
    return useQuery(['artist', id], () => api.getArtistInfo(id))
}

const usePrefetchArtist = () => {
    const dispatch = usePlaylistDispatch();

    useEffect(() => {
        let { artist = 13, index } = JSON.parse(localStorage.getItem('playlist')) || {};
        index = Number.isInteger(index) ? index : 0;

        api.getArtistInfo(artist).then(response => {
            const payload = { artist, playlist: response.songs, index }
            dispatch({ type: 'playlist', payload })
        })
    })
}

export {
    useAllArtists,
    useArtistInfo,
    usePrefetchArtist
}