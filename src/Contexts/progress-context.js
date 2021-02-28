import { createContext, useContext, useState } from 'react';

const ProgressContext = createContext();
const ProgressContextSetState = createContext();

const ProgressProvider = ({ children }) => {
    const [progress, setProgress] = useState({
        music: 20,
        volume: 0
    });

    return (
        <ProgressContext.Provider value={progress}>
            <ProgressContextSetState.Provider value={setProgress}>
                {children}
            </ProgressContextSetState.Provider>
        </ProgressContext.Provider>
    )
}

const useProgress = () => {
    const progress = useContext(ProgressContext)
    return progress;
}

const useVolumeUpdate = () => {
    const setState = useContext(ProgressContextSetState)

    const volumeUpdate = value => {
        setState(prevState => {
            return {
                ...prevState,
                volume: value
            }
        })
    }

    return volumeUpdate
}

const useMusicUpdate = () => {
    const setState = useContext(ProgressContextSetState)

    const musicUpdate = value => {
        setState(prevState => {
            return {
                ...prevState,
                music: value
            }
        })
    }

    return musicUpdate
}

export default ProgressProvider;
export {
    useProgress,
    useMusicUpdate,
    useVolumeUpdate
}



