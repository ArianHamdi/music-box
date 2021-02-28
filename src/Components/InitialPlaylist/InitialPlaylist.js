import { useEffect } from 'react'
import { usePlaylistDispatch } from '../../Contexts/playlist-context';
import { usePrefetchArtist } from '../../Hooks/useAPI';

const InitialPlaylist = () => {

    usePrefetchArtist();

    return null;
}

export default InitialPlaylist;