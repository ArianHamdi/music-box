import { useState } from 'react';
import styles from './Songs.module.scss';

import { usePlaylistDispatch } from '../../../../Contexts/playlist-context'

import { useArtistPlaylist } from '../../../../Hooks/useAPI'
import { useDimentions } from '../../../../Hooks/useDimentions'
import { convertTime, shorten } from '../../../../utilities/utilities'
import Icon from '../../../../Components/Icon/Icon'

import play from '../../../../assets/svg/play.svg'

const Songs = ({ id, theme }) => {

    const { data: playlist } = useArtistPlaylist(id)

    const { width } = useDimentions();

    const dispatch = usePlaylistDispatch();

    const [toggle, setToggle] = useState(false);

    if (!playlist) return null;

    const playSong = index => {
        const payload = { artist: id, playlist, index }
        dispatch({ type: 'playlist', payload })
    }

    const toggleHandler = () => {
        setToggle(prevState => !prevState);
    }


    const songItems = playlist.map((song, index) => {

        // remove some decsriptions in small screen
        const desktopView = width >= 768 ? <>
            <h6 className={styles.index}>{index + 1}</h6>
            <p className={styles.artist}>{song.artist_name}</p>
            <p className={styles.album}>{song.title}</p>
        </> : null

        return (
            <div className={styles.song} key={index}>
                <img className={styles.cover} src={song.cover} alt='music cover' />
                <p className={styles.title}>{shorten(song.title, width)}</p>
                <p className={styles.duration}>{convertTime(song.duration)}</p>
                <Icon className={styles.play} src={play} size={20} fill={theme} onClick={() => playSong(index)} />
                {desktopView}
            </div>
        )
    })

    const songsShown = toggle ? songItems : songItems.slice(0, 5);

    const title = toggle ? 'show 5 less' : 'show 5 more';

    return (
        <div className={styles.songs} style={{ color: theme }}>
            {songsShown}
        </div>
    )
}

export default Songs;