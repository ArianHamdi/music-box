import { Fragment, useState } from 'react';
import styles from './Songs.module.scss';

import { usePlaylistDispatch } from '../../../../Contexts/playlist-context'

import { useDimentions } from '../../../../Hooks/useDimentions'
import { convertTime } from '../../../../utilities/utilities'
import { shorten } from '../../../../utilities/utilities'
import Button from '../../../../Components/Button/Button'
import Icon from '../../../../Components/Icon/Icon'

import play from '../../../../assets/SVGs/Play.svg'

const Songs = ({ artistID, playlist, isDark }) => {

    console.log('artist ID is : ', artistID);

    const dispatch = usePlaylistDispatch();

    const color = isDark ? '#fff' : "#000"

    const [toggle, setToggle] = useState(false);

    const playSong = index => {
        const payload = { artist: artistID, playlist, index }
        dispatch({ type: 'playlist', payload })
    }

    const toggleHandler = () => {
        setToggle(prevState => !prevState);
    }

    const { width } = useDimentions();

    const songItems = playlist.map((song, index) => {

        // remove some decsriptions in small screen
        const desktopView = width >= 768 ? <>
            <h6 className={styles.index}>{index + 1}</h6>
            <p className={styles.artist}>{song.artist.name}</p>
            <p className={styles.album}>{song.album.title}</p>
        </> : null

        return (
            <div className={styles.song} key={index}>
                <img className={styles.cover} src={song.album.cover_small} alt='music cover' />
                <p className={styles.title}>{shorten(song.title, width)}</p>
                <p className={styles.duration}>{convertTime(song.duration)}</p>
                <Icon className={styles.play} src={play} size={20} fill={color} onClick={() => playSong(index)} />
                {desktopView}
            </div>
        )
    })

    const songsShown = toggle ? songItems : songItems.slice(0, 5);

    const title = toggle ? 'show 5 less' : 'show 5 more';

    return (
        <div className={styles.songs} style={{ color }}>
            {songsShown}
        </div>
    )
}

export default Songs;