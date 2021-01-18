import { useEffect } from 'react'
import { useInitilizePlaylist } from '../../Contexts/playlist-context';
import { useArtistInfo } from '../../Hooks/useAPI'

const InitialPlaylist = ({ children }) => {

    const setPlaylist = useInitilizePlaylist();

    const { data } = useArtistInfo(13);

    useEffect(() => {
        if (data) setPlaylist(data.songs, 0, 0)
    })

    return children;
}

export default InitialPlaylist;