import { useState, forwardRef, useEffect } from 'react'
import styles from './MusicPlayer.mobile.module.scss';

import { CSSTransition, SwitchTransition } from 'react-transition-group'

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

    const coverTransition = {
        enter: styles.coverEnter,
        enterActive: styles.coverEnterActive,
        exit: styles.coverExit,
        exitActive: styles.coverExitActive,
    }

    const songTranstion = {
        enter: styles.songEnter,
        enterActive: styles.songEnterActive,
        exit: styles.songExit,
        exitActive: styles.songExitActive,
    }

    const size = show ? 20 : 20;

    return (
        <CSSTransition in={show} classNames={{ ...styles }} timeout={1200} >
            <div className={styles.player} onClick={musicPlayerHandler}>
                <SwitchTransition mode='out-in'>
                    <CSSTransition
                        classNames={{ ...coverTransition }}
                        addEndListener={(node, done) => {
                            node.addEventListener("transitionend", done, false);
                        }}
                        key={song.cover}>
                        <img className={styles.cover} src={song.cover} alt="music cover" />
                    </CSSTransition>
                </SwitchTransition>
                <SwitchTransition mode='out-in'>
                    <CSSTransition
                        classNames={{ ...songTranstion }}
                        addEndListener={(node, done) => {
                            node.addEventListener("transitionend", done, false);
                        }}
                        key={song.title}>
                        <div className={styles.song} >
                            <p className={styles.artist}>{song.artist_name}</p>
                            <p className={styles.title}>{song.title}</p>
                        </div>
                    </CSSTransition>
                </SwitchTransition>
                <div className={styles.container} onClick={e => e.stopPropagation()}>
                    <ul className={styles.controller} >
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