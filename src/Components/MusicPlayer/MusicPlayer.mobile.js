import { useState, forwardRef, useEffect, useRef } from 'react'
import styles from './MusicPlayer.mobile.module.scss';

import { CSSTransition } from 'react-transition-group'

import Icon from '../Icon/Icon'
import { useHistory } from 'react-router-dom'

import MusicProgressBar from '../MusicProgressBar/MusicProgressBar';

import previous from '../../assets/svg/backward.svg'
import next from '../../assets/svg/forward.svg'
import shuffle from '../../assets/svg/Shuffle.svg'
import repeat from '../../assets/svg/Repeat.svg'

const MusicPlayerMobile = forwardRef((props, progressRef) => {

    const { playing, setRepeat, setShuffle, shuffleActive, repeatActive, song,
        playPauseHandler, changeMusicTime, currentTime, duration, previousSong, nextSong } = props;

    const history = useHistory();
    const [show, setShow] = useState(false)

    const transitionRef = useRef();

    //prevent back button when modal is open
    useEffect(() => {
        const unblock = history.block(() => {
            if (show) {
                changeBodyOverflow('visible')
                setShow(false);
                return false;
            }
            return;
        });

        return () => {
            unblock();
        };
    }, [show, history]);

    //set overflow visible when switch to desktop mode
    useEffect(() => {
        return () => changeBodyOverflow('visible')
    }, [])

    const changeBodyOverflow = overflow => {
        document.body.style.overflow = overflow;
    }

    const openMusicPlayer = () => {
        changeBodyOverflow('hidden')
        setShow(true)
    }

    const closeMusicPlayer = event => {
        event.stopPropagation();
        changeBodyOverflow('visible')
        setShow(false)
    }

    const size = 20;

    return (
        <CSSTransition in={show} classNames={{ ...styles }} timeout={1200} nodeRef={transitionRef}>
            <div ref={transitionRef} className={styles.player} onClick={openMusicPlayer}>
                <div className={styles.closeContainer} onClick={closeMusicPlayer}>
                    <div className={styles.closeParent}></div>
                </div>
                <img className={styles.cover} src={song.cover} alt="music cover" />
                <div className={styles.song} >
                    <p className={styles.artist}>{song.artist_name}</p>
                    <p className={styles.title}>{song.title}</p>
                </div>
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