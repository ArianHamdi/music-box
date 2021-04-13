import { forwardRef } from 'react'
import styles from './MusicPlayer.desktop.module.scss';

import Icon from '../Icon/Icon'

import shuffle from '../../assets/svg/Shuffle.svg';
import repeat from '../../assets/svg/Repeat.svg';
import previous from '../../assets/svg/backward.svg';
import next from '../../assets/svg/forward.svg';

import volume from '../../assets/svg/Volume.svg';

import MusicProgressBar from '../MusicProgressBar/MusicProgressBar';
import VolumeProgressBar from '../VolumeProgressBar/VolumeProgressBar'

const MusicPlayerDesktop = forwardRef((props, progressRef) => {

    const { playing, setRepeat, setShuffle, shuffleActive, repeatActive, song,
        playPauseHandler, changeMusicTime, changeVolume, currentTime, duration, previousSong, nextSong } = props;

    const size = 18

    return (
        <div className={styles.panel}>
            <div className={styles.music}>
                <img src={song.cover} alt="music cover" />
                <div>
                    <p className={styles.name}>{song.title}</p>
                    <p className={styles.artist}>{song.artist_name}</p>
                </div>
            </div>
            <div className={styles.controller}>
                <div className={styles.buttons}>
                    <Icon src={shuffle} fill={shuffleActive} onClick={setShuffle} size={size} />
                    <Icon src={previous} onClick={previousSong} size={size} />
                    <Icon src={playing} onClick={playPauseHandler} size={22} />
                    <Icon src={next} onClick={nextSong} size={size} />
                    <Icon src={repeat} fill={repeatActive} onClick={setRepeat} size={size} />
                </div>
                <div className={styles.progress}>
                    <p>{currentTime}</p>
                    <MusicProgressBar ref={progressRef} callback={changeMusicTime} />
                    <p>{duration}</p>
                </div>
            </div>
            <div className={styles.volume}>
                <Icon src={volume} />
                <VolumeProgressBar callback={changeVolume} />
            </div>
        </div>
    )
}
)
export default MusicPlayerDesktop;