import { useState, useRef, useEffect } from 'react'
import styles from './Panel.module.scss';

import { usePlaylist, useIndexUpdate } from '../../../../Contexts/playlist-context'
import { usePrevious } from '../../../../Hooks/usePrevius'

import { convertTime } from '../../../../utilities/utilities'

import InputRange from '../../../../Components/InputRange/InputRange'
import Icon from '../../../../Components/Icon/Icon'

import Favorite from '../../../../assets/SVGs/Favorite.svg'
import FavoriteFill from '../../../../assets/SVGs/Favorite-fill.svg'
import Shuffle from '../../../../assets/SVGs/Shuffle.svg'
import Repeat from '../../../../assets/SVGs/Repeat.svg'
import previousSong from '../../../../assets/SVGs/PreviousSong.svg'
import nextSong from '../../../../assets/SVGs/NextSong.svg'
import Pause from '../../../../assets/SVGs/Pause.svg'
import Play from '../../../../assets/SVGs/Play.svg'
import volume from '../../../../assets/SVGs/Volume.svg'

const Panel = () => {

    const playlist = usePlaylist();
    const updateIndex = useIndexUpdate();
    const prevPlaylist = usePrevious(playlist);

    // const [index, setIndex] = useState(0);
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [favorite, setFavorite] = useState(false);
    const [progressPercentage, setProgressPercentage] = useState(0)
    const [songVolume, setSongVolume] = useState(100);
    const [songState, setSongState] = useState({
        currentTime: 0,
        duration: 0,
    })

    useEffect(() => {
        if (playlist?.count !== prevPlaylist?.count && playlist?.count !== 0) {
            setIsPlaying(true);
            const playPromise = audioRef.current.play();
            if (playPromise !== undefined) {
                playPromise
                    .then(() => { })
                    .catch(() => { })
            }
        }
    }, [playlist, isPlaying])

    if (!playlist) return null;

    const endSongHandler = () => {
        updateIndex();
    }

    const changeSongVolumeHandler = event => {
        const volume = event.target.value
        audioRef.current.volume = volume / 100;
        setSongVolume(volume)
    }

    const changeProgressHandler = event => {
        const newTime = event.target.value;
        setProgressPercentage(newTime);
        const duration = audioRef.current.duration;
        audioRef.current.currentTime = newTime * duration / 100;
    }

    const songTimerHandler = event => {
        const currentTime = event.target.currentTime
        const duration = event.target.duration;
        const progressPercentage = Math.ceil(currentTime * 100 / duration) || 0;
        setSongState({ currentTime, duration });
        setProgressPercentage(progressPercentage)

    }

    const changeFavoriteHandler = () => {
        setFavorite(prevState => !prevState)
    }

    const playPauseHandler = () => {
        const audio = audioRef.current;
        const playPromise = isPlaying ? audio.pause() : audio.play();
        if (playPromise !== undefined) {
            playPromise.then(() => {

            })
        }
        setIsPlaying(prevState => !prevState)
    }

    const Playing = isPlaying ? Pause : Play;
    const Tavorite = favorite ? FavoriteFill : Favorite;

    const currentTime = convertTime(songState.currentTime)
    const duration = convertTime(songState.duration)

    const info = playlist.songs[playlist.index];

    return (
        <div className={styles.panel}>
            <div className={styles.music}>
                <img src={info.album.cover_small} alt="music cover" />
                <div>
                    <p className={styles.name}>{info.title}</p>
                    <p className={styles.artist}>{info.artist.name}</p>
                </div>
                <Icon src={Tavorite} onClick={changeFavoriteHandler} />
            </div>
            <div className={styles.controller}>
                <div className={styles.buttons}>
                    <Icon src={Shuffle} />
                    <Icon src={previousSong} />
                    <Icon src={Playing} size={20} onClick={playPauseHandler} />
                    <Icon src={nextSong} />
                    <Icon src={Repeat} />
                </div>
                <div className={styles.progress}>
                    <p>{currentTime}</p>
                    <InputRange min='0' max='100' value={progressPercentage} onChange={changeProgressHandler}
                        from='#9b2def' to='#053b64' width='35rem' />
                    <p>{duration}</p>
                </div>
                <audio ref={audioRef} src={info.preview} onTimeUpdate={songTimerHandler} onEnded={endSongHandler}
                    onLoadedMetadata={songTimerHandler} />
            </div>
            <div className={styles.volume}>
                <Icon src={volume} />
                <InputRange min='0' max='100' value={songVolume} onChange={changeSongVolumeHandler}
                    from='white' to='white' width='10rem' thumb='#161a1a' />
            </div>
        </div>
    )
}

export default Panel;