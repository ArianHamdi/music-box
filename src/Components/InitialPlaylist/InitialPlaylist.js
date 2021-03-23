import { usePrefetchArtist, useArtist } from '../../Hooks/useAPI';

const InitialPlaylist = () => {

    usePrefetchArtist();
    return null;
}

export default InitialPlaylist;