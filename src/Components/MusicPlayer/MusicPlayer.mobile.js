import { useState, forwardRef, useEffect } from 'react'
import styles from './MusicPlayer.mobile.module.scss';

import { CSSTransition } from 'react-transition-group'
import classnames from 'classnames'

import Icon from '../Icon/Icon'
import { useHistory, useLocation } from 'react-router-dom'

import MusicProgressBar from '../MusicProgressBar/MusicProgressBar';

import previous from '../../assets/svg/PreviousSong.svg'
import next from '../../assets/svg/NextSong.svg'
import shuffle from '../../assets/svg/Shuffle.svg'
import repeat from '../../assets/svg/Repeat.svg'


const MusicPlayerMobile = forwardRef((props, progressRef) => {

    const { playing, setRepeat, setShuffle, shuffleActive, repeatActive, song,
        playPauseHandler, changeMusicTime, currentTime, duration, previousSong, nextSong } = props;

    // const history = useHistory();
    // const location = useLocation();

    // useEffect(() => {
    //     const unblock = history.block((location, action) => {
    //         return false
    //     })

    //     return () => {
    //         unblock();
    //     }
    // })

    const [show, setShow] = useState(false)

    useEffect(() => {
        return () => document.body.style.overflow = 'visible'
    }, [])

    const musicPlayerHandler = () => {
        const overflow = show ? 'visible' : 'hidden'
        document.body.style.overflow = overflow
        setShow(prev => !prev)
    }

    const size = show ? 20 : 20;

    return (
        <CSSTransition in={show} classNames={{ ...styles }} timeout={1200} >
            <div className={styles.player} onClick={musicPlayerHandler}>
                <img className={styles.cover} src={song.cover} alt="music cover" />
                <div className={styles.song} >
                    <p className={styles.artist}>{song.artist_name}</p>
                    <p className={styles.title}>{song.title}</p>
                </div>
                <div className={styles.container}>
                    <ul className={styles.controller} onClick={e => e.stopPropagation()}>
                        <li onClick={setShuffle}>
                            <Icon src={shuffle} fill={shuffleActive} size={size} />
                        </li>
                        <li onClick={previousSong}>
                            <Icon src={previous} size={size} />
                        </li>
                        <li onClick={playPauseHandler}>
                            <Icon src={playing} size={size} />
                        </li>
                        <li onClick={nextSong}>
                            <Icon src={next} size={size} />
                        </li>
                        <li onClick={setRepeat}>
                            <Icon src={repeat} fill={repeatActive} size={size} />
                        </li>
                    </ul>
                    <div className={styles.progress}>
                        <MusicProgressBar ref={progressRef} callback={changeMusicTime} />
                        <div className={styles.time}>
                            <p>{currentTime}</p>
                            <p>{duration}</p>
                        </div>
                    </div>
                </div>
            </div>
        </CSSTransition >
    )
}
)

export default MusicPlayerMobile;