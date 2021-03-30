import { useEffect, useContext, createContext } from 'react'
import { shuffle } from '../utilities/utilities'
import { useImmerReducer } from 'use-immer'
import { nth } from 'lodash'

const PlaylistStateContext = createContext();
const PlaylistDispatchContext = createContext();

const initialState = {
    info: {
        type: '',
        id: 0
    },
    playlist: null,
    shuffledList: null,
    song: null,
    index: 0,
    isRepeat: false,
    isShuffle: false,
    count: 0
}


const playlistReducer = (draft, action) => {

    const { type, payload } = action;



    const length = draft.playlist?.length;

    switch (type) {
        case 'next': {
            draft.index = (draft.index + 1) % length;
            draft.song = draft.isShuffle ? nth(draft.shuffledList, draft.index) : nth(draft.playlist, draft.index);
            draft.count++;
            return;
        }
        case 'previous': {
            draft.index = (draft.index - 1) % length;
            draft.song = draft.isShuffle ? nth(draft.shuffledList, draft.index) : nth(draft.playlist, draft.index);
            draft.count++;
            return;
        }
        case 'song-ended': {
            if (!draft.isRepeat) {
                draft.index = (draft.index + 1) % length;
                draft.song = draft.isShuffle ? nth(draft.shuffledList, draft.index) : nth(draft.playlist, draft.index);
            }
            draft.count++;

            return;
        }
        case 'shuffle': {
            if (draft.isShuffle) {
                draft.playlist.every((song, index) => {
                    if (song.id === draft.shuffledList[draft.index].id) {
                        draft.index = index;
                        return false;
                    }
                    return true
                })
            }
            draft.isShuffle = !draft.isShuffle;
            return;
        }
        case 'repeat': {
            draft.isRepeat = !draft.isRepeat;
            return;
        }
        case 'playlist': {
            if (draft.info.type !== payload.info.type || draft.info.id !== payload.info.id) {
                draft.playlist = payload.playlist;
                draft.shuffledList = shuffle(payload.playlist)
                draft.info = payload.info
            }
            draft.index = payload.index;
            draft.song = payload.playlist[payload.index]
            draft.count++;
            return;
        }
        case 'tracks': {
            payload.playlist.every((song, index) => {
                if (song.id === draft.playlist[0].id) {
                    draft.index = index
                    return false
                }
                return true;
            })
            draft.playlist = payload.playlist;
            return;
        }
        default: {
            return draft;
        }
    }
}

const PlaylistProvider = ({ children }) => {

    const [playlist, dispatch] = useImmerReducer(playlistReducer, initialState);

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
    const { song, count } = useContext(PlaylistStateContext);

    useEffect(() => {
        const unloadHandler = () => {
            // save last music to local storage
            // const playlist = JSON.stringify({ artist, index });
            // localStorage.setItem('playlist', playlist)
        }
        window.addEventListener('unload', unloadHandler)

        return () => window.removeEventListener('unload', unloadHandler)
    })

    return { song, count }
}

const useSongId = () => {
    const { song } = useContext(PlaylistStateContext)
    return song?.id
}


export default PlaylistProvider;
export { useSong, useSongId, usePlaylistDispatch }
