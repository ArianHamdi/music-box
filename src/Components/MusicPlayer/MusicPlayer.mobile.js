import { useState, forwardRef, useEffect } from 'react'
import styles from './MusicPlayer.mobile.module.scss';
import './MusicPlayerAnimation.scss'

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
        playPauseHandler, changeMusicTime, changeVolume, songTime, previousSong, nextSong } = props;

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


    const [full, isFull] = useState(false)

    const openFullMusicPlayer = () => {
        isFull(true)
    }

    const classNames = classnames([styles.container], {
        [styles.full]: full
    })

    const size = full ? 20 : 20;

    return (
        <div className={classNames} onClick={openFullMusicPlayer}>
            <CSSTransition in={full} classNames='player' timeout={1200}>
                <>
                    <div className={styles.musicPlayer}>
                        <CSSTransition in={full} classNames='cover' timeout={1200}>
                            <img className={styles.cover} src={song.cover} alt="music cover" />
                        </CSSTransition>
                        <CSSTransition in={full} classNames='song' timeout={1200}>
                            <div className={styles.song} >
                                <p >Ariana grandsdsadasda</p>
                                <p>stuck with U</p>
                            </div>
                        </CSSTransition>
                        {full && <MusicProgressBar ref={progressRef} callback={changeMusicTime} />}
                        <CSSTransition in={full} classNames='icons' timeout={1200}>
                            <ul className={styles.icons} >
                                <li onClick={setShuffle}>
                                    <Icon src={shuffle} size={size} />
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
                                    <Icon src={repeat} size={size} />
                                </li>
                            </ul>
                        </CSSTransition>
                    </div>
                    <span className={styles.progress}></span>
                </>
            </CSSTransition>
        </div>
    )
}
)

export default MusicPlayerMobile;