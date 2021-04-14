import { useQuery } from 'react-query'
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

const useSearchResult = (query, type) => {
    return useQuery(['search', type, query], () => api.getSearchResult(query, type), { enabled: !!query })
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
    useAlbum,
    useSearchResult
}