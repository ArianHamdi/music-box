import { useState, useEffect, useRef } from 'react'
import { useDimentions } from '../../Hooks/useDimentions';
import breakpoints from '../../Constant/breakpoints'
import MusicPlayerDesktop from './MusicPlayer.desktop'
import MusicPlayerMobile from './MusicPlayer.mobile'
import { useSong, usePlaylistDispatch } from '../../Contexts/playlist-context'
import { usePrevious } from '../../Hooks/usePrevius'
import colors from '../../Constant/colors'
import Pause from '../../assets/SVGs/Pause.svg'
import Play from '../../assets/SVGs/Play.svg'

const MusicPlayer = () => {

    const { song, count } = useSong();
    const dispatch = usePlaylistDispatch();

    const audioRef = useRef();
    const progressRef = useRef();



    const [isPlaying, setIsPlaying] = useState(false);
    const [isShuffle, setIsShuffle] = useState(false);
    const [isRepeat, setIsRepeat] = useState(false);
    const [songTime, setSongTime] = useState({
        currentTime: 0,
        duration: 0
    })

    const { width } = useDimentions();
    const Component = width > breakpoints.md ? MusicPlayerDesktop : MusicPlayerMobile;



    useEffect(() => {
        if (count > 1) {
            setIsPlaying(true)
            const playPromise = audioRef.current.play();
            if (playPromise !== undefined) {
                playPromise
                    .then(() => { })
                    .catch(() => { })

            }
        }
    }, [count, song?.id]);


    const nextSong = () => {
        dispatch({ type: 'next' })
    }

    const previousSong = () => {
        dispatch({ type: 'previous' })
    }

    const setRepeat = () => {
        setIsRepeat(prevState => !prevState);
    }

    const setShuffle = () => {
        setIsShuffle(prevState => !prevState);
    }

    const playPauseHandler = () => {
        isPlaying ? audioRef.current.pause() : audioRef.current.play();
        setIsPlaying(playing => !playing);
    }

    const changeMusicTime = percentage => {
        const duration = audioRef.current.duration;
        const currentTime = duration * percentage;
        audioRef.current.currentTime = currentTime;
    }

    const changeVolume = percentage => {
        audioRef.current.volume = percentage;
    }

    const updateMusicTime = event => {
        // const duration = !isNaN(event.target.duration) ? event.target.duration : Infinity;
        const duration = event.target.duration
        const currentTime = event.target.currentTime;
        const percentage = currentTime * 100 / duration + '%';

        setSongTime({ duration, currentTime })

        const isHold = progressRef.current?.isHold;
        const progress = progressRef.current?.progress;

        if (!isHold && progress) {
            progress.style.width = percentage;
        }
    }


    const endSongHandler = () => {
        dispatch({ type: 'repeat', payload: isRepeat })
        dispatch({ type: 'shuffle', payload: isShuffle })
        dispatch({ type: 'song-ended' })
    }

    const playing = isPlaying ? Pause : Play;
    const shuffleActive = isShuffle ? colors.tertiary : 'white'
    const repeatActive = isRepeat ? colors.tertiary : 'white'

    if (!song) return null;

    return (
        <>
            <audio ref={audioRef} src={song.preview} onEnded={endSongHandler} onTimeUpdate={updateMusicTime} ></audio>
            <Component ref={progressRef} changeVolume={changeVolume} songTime={songTime}
                song={song} playPauseHandler={playPauseHandler} changeMusicTime={changeMusicTime}
                setRepeat={setRepeat} setShuffle={setShuffle} playing={playing} shuffleActive={shuffleActive}
                repeatActive={repeatActive} nextSong={nextSong} previousSong={previousSong} />
        </>
    )
}

export default MusicPlayer;