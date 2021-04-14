import { useState, useEffect, useRef, useCallback } from 'react'
import MusicPlayerDesktop from './MusicPlayer.desktop'
import MusicPlayerMobile from './MusicPlayer.mobile'
import { useSong, usePlaylistDispatch } from '../../Contexts/playlist-context'
import colors from '../../Constant/colors'
import { convertTime } from '../../utilities/utilities'
import throttle from 'lodash/throttle'

import Pause from '../../assets/svg/pause.svg'
import Play from '../../assets/svg/play.svg'
import { Desktop, Mobile } from '../Responsive/Responsive';

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

    useEffect(() => {
        if (count > 0) {
            setIsPlaying(true)
            audioRef.current.currentTime = 0;
            if (progressRef.currentTime) progressRef.current.progress.style.width = 0;
            const playPromise = audioRef.current.play();
            if (playPromise !== undefined) {
                playPromise
                    .then(() => { })
                    .catch(() => { })

            }
        }
    }, [count]);

    const throttledUpdateMusicTime = useCallback(throttle(
        time => setSongTime(time), 1000)
        , [])

    if (!song) return null;

    console.log('rendered');

    const nextSong = () => {
        dispatch({ type: 'next' })
    }

    const previousSong = () => {
        dispatch({ type: 'previous' })
    }

    const setRepeat = () => {
        dispatch({ type: 'repeat' })
        setIsRepeat(prevState => !prevState);
    }

    const setShuffle = () => {
        dispatch({ type: 'shuffle' })
        setIsShuffle(prevState => !prevState);
    }

    const playPauseHandler = () => {
        isPlaying ? audioRef.current.pause() : audioRef.current.play();
        setIsPlaying(playing => !playing);
    }

    const changeMusicTime = percentage => {
        const duration = audioRef.current.duration || 0;
        const currentTime = duration * percentage;
        audioRef.current.currentTime = currentTime;
    }

    const changeVolume = percentage => {
        audioRef.current.volume = percentage;
    }



    const updateMusicTime = event => {
        const duration = event.target.duration
        const currentTime = event.target.currentTime;
        const percentage = currentTime * 100 / duration + '%';

        throttledUpdateMusicTime({ duration, currentTime })

        const isHold = progressRef.current?.isHold;
        const progress = progressRef.current?.progress;

        if (!isHold && progress) {
            progress.style.width = percentage;
        }
    }


    const endSongHandler = () => {
        dispatch({ type: 'song-ended' })
    }

    const playing = isPlaying ? Pause : Play;
    const shuffleActive = isShuffle ? colors.tertiary : 'white'
    const repeatActive = isRepeat ? colors.tertiary : 'white'
    const currentTime = convertTime(songTime.currentTime)
    const duration = convertTime(songTime.duration)

    const props = {
        ref: progressRef, changeVolume, currentTime, duration,
        song, playPauseHandler, changeMusicTime,
        setRepeat, setShuffle, playing, shuffleActive,
        repeatActive, nextSong, previousSong,
    }

    return (
        <>
            <audio ref={audioRef} src={song.preview} onEnded={endSongHandler} onTimeUpdate={updateMusicTime}></audio>
            <Desktop >
                <MusicPlayerDesktop {...props} />
            </Desktop>
            <Mobile>
                <MusicPlayerMobile {...props} />
            </Mobile>
        </>
    )
}

export default MusicPlayer;