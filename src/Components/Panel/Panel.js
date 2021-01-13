import { useState, useRef } from 'react'
import styles from './Panel.module.scss';

import InputRange from '../../Components/InputRange/InputRange'
import Icon from '../../Components/Icon/Icon'

import music from '../../assets/music/Bahram-Eshtebah-320.mp3'

import cover from '../../assets/good-mistake.jpg';

import Favorite from '../../assets/SVGs/Favorite.svg'
import FavoriteFill from '../../assets/SVGs/Favorite-fill.svg'
import Shuffle from '../../assets/SVGs/Shuffle.svg'
import Repeat from '../../assets/SVGs/Repeat.svg'
import previousSong from '../../assets/SVGs/PreviousSong.svg'
import nextSong from '../../assets/SVGs/NextSong.svg'
import Pause from '../../assets/SVGs/Pause.svg'
import Play from '../../assets/SVGs/Play.svg'
import volume from '../../assets/SVGs/Volume.svg'

const Panel = () => {

    const audioRef = useRef(null);

    const [isPlaying, setIsPlaying] = useState(false);
    const [favorite, setFavorite] = useState(false);
    const [progressPercentage, setProgressPercentage] = useState(0)
    const [songVolume, setSongVolume] = useState(100);
    const [songState, setSongState] = useState({
        currentTime: 0,
        duration: 0,
    })

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
        const currentTime = Math.round(event.target.currentTime);
        const duration = event.target.duration;
        const progressPercentage = Math.round(currentTime * 100 / duration);
        setSongState({ currentTime, duration });
        setProgressPercentage(progressPercentage)

    }

    const changeFavoriteHandler = () => {
        setFavorite(prevState => !prevState)
    }

    const playPauseHandler = () => {
        const audio = audioRef.current;
        isPlaying ? audio.pause() : audio.play();
        setIsPlaying(prevState => !prevState)
    }

    const convertTimeHandler = time => {
        const minute = Math.floor(time / 60);
        const second = ('0' + Math.floor(time % 60)).slice(-2);
        return `${minute}:${second}`
    }

    const Playing = isPlaying ? Pause : Play;
    const Tavorite = favorite ? FavoriteFill : Favorite;

    const currentTime = convertTimeHandler(songState.currentTime)
    const duration = convertTimeHandler(songState.duration)

    return (
        <div className={styles.panel}>
            <div className={styles.music}>
                <img src={cover} alt="music cover" />
                <div>
                    <p className={styles.name}>Good Mistake</p>
                    <p className={styles.artist}>Bahram Nouraei</p>
                </div>
                <Icon Src={Tavorite} onClick={changeFavoriteHandler} />
            </div>
            <div className={styles.controller}>
                <div className={styles.buttons}>
                    <Icon Src={Shuffle} />
                    <Icon Src={previousSong} />
                    <Icon Src={Playing} size={20} onClick={playPauseHandler} />
                    <Icon Src={nextSong} />
                    <Icon Src={Repeat} />
                </div>
                <div className={styles.progress}>
                    <p>{currentTime}</p>
                    <InputRange min='0' max='100' value={progressPercentage} onChange={changeProgressHandler}
                        from='#9b2def' to='#053b64' width='35rem' />
                    <p>{duration}</p>
                </div>
                <audio ref={audioRef} src={music} onTimeUpdate={songTimerHandler} />
            </div>
            <div className={styles.volume}>
                <Icon Src={volume} />
                <InputRange min='0' max='100' value={songVolume} onChange={changeSongVolumeHandler}
                    from='white' to='white' width='10rem' thumb='#161a1a' />
            </div>
        </div>
    )
}

export default Panel;