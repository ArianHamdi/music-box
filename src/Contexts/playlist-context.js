import { useState, useContext, createContext } from 'react'

const PlaylistContext = createContext();
const PlaylistContextSetState = createContext();

const PlaylistProvider = ({ children }) => {

    const [playlist, setPlaylist] = useState();

    return (
        <PlaylistContext.Provider value={playlist}>
            <PlaylistContextSetState.Provider value={setPlaylist}>
                {children}
            </PlaylistContextSetState.Provider>
        </PlaylistContext.Provider>
    )
}

const useInitilizePlaylist = () => {
    const setPlaylist = useContext(PlaylistContextSetState);

    const initilizeState = (songs, index, count) => {
        setPlaylist({
            songs, index, count
        })
    }

    return initilizeState
}
const usePlaylist = () => {
    const playlist = useContext(PlaylistContext);
    return playlist;
}

const usePlaylistUpdate = () => {
    const setPlaylist = useContext(PlaylistContextSetState);

    const updateState = (songs, index) => {
        setPlaylist(prevState => {
            return {
                songs,
                index,
                count: prevState.count + 1
            }

        });
    }

    return updateState;
}

const useIndexUpdate = () => {
    const setPlaylist = useContext(PlaylistContextSetState);

    const updateIndex = index => {
        setPlaylist(prevState => {
            return {
                ...prevState,
                index: index ? index : (prevState.index + 1) % 10,
                count: prevState.count + 1
            }
        }
        )
    }
    return updateIndex;
}





export { usePlaylist, usePlaylistUpdate, useIndexUpdate, useInitilizePlaylist }
export default PlaylistProvider;