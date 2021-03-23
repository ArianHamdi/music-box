import { useEffect, useReducer, useContext, createContext } from 'react'
import { shuffle } from '../utilities/utilities'

const PlaylistStateContext = createContext();
const PlaylistDispatchContext = createContext();

const initialState = {
    artist: '',
    originalList: null,
    shuffleList: null,
    index: 0,
    isRepeat: false,
    isShuffle: false,
    count: 0
}

const playlistReducer = (state, action) => {
    const { type, payload } = action;
    const length = state.originalList?.length || payload.playlist.length
    switch (type) {
        case 'next': {
            const index = state.index + 1 % length;
            return { ...state, index }
        }
        case 'previous': {
            const index = state.index - 1 % length;
            return { ...state, index }
        }
        case 'song-ended': {
            let index = state.isRepeat ? state.index : state.index + 1;
            index = index % length;
            const count = state.count + 1;
            return { ...state, index, count }
        }
        case 'shuffle': {
            if (!payload) return { ...state, isShuffle: false };
            const { originalList, shuffleList } = state
            let index = state.index;
            const isShuffle = payload;
            // if (state.isRepeat) {
            //     shuffleList.forEach((song, songIndex) => {
            //         if (song.id === originalList[index].id) {
            //             index = songIndex
            //         }
            //     });
            // }
            return { ...state, isShuffle, index };
        }
        case 'repeat': {
            const isRepeat = payload
            return { ...state, isRepeat }
        }
        case 'playlist': {
            let { originalList, shuffleList, artist } = state;
            let { index, playlist } = payload;
            const count = state.count + 1;
            if (artist !== payload.artist) {
                originalList = playlist;
                shuffleList = shuffle(originalList);
                artist = payload.artist;
            }
            if (state.isShuffle) {
                console.log('run');
                shuffleList.forEach((song, songIndex) => {
                    if (song.id === originalList[payload.index].id) {
                        index = songIndex
                    }
                });
            }
            index = index % length
            return { ...state, artist, originalList, shuffleList, index, count }
        }
        default: {
            return state;
        }
    }

}

const PlaylistProvider = ({ children }) => {

    const [playlist, dispatch] = useReducer(playlistReducer, initialState);

    return (
        <PlaylistStateContext.Provider value={playlist}>
            <PlaylistDispatchContext.Provider value={dispatch}>
                {children}
            </PlaylistDispatchContext.Provider>
        </PlaylistStateContext.Provider>
    )
}

const usePlaylistDispatch = () => {
    const dispatch = useContext(PlaylistDispatchContext)
    return dispatch;
}

const useSong = () => {
    const { artist, originalList, shuffleList, isShuffle, index, count } = useContext(PlaylistStateContext);
    const playlist = isShuffle ? shuffleList : originalList
    const song = playlist?.[index];

    useEffect(() => {
        const unloadHandler = () => {
            // save last music to local storage
            const playlist = JSON.stringify({ artist, index });
            localStorage.setItem('playlist', playlist)
        }
        window.addEventListener('unload', unloadHandler)

        return () => window.removeEventListener('unload', unloadHandler)
    })

    return { song, count }
}


export default PlaylistProvider;
export { useSong, usePlaylistDispatch }