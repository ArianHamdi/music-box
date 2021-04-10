import { useState } from 'react';
import styles from './Songs.module.scss';

import { usePlaylistDispatch, useSongId } from '../../../../Contexts/playlist-context'

import colors from '../../../../Constant/colors'
import { Desktop } from '../../../../Components/Responsive/Responsive'
import { useArtistPlaylist } from '../../../../Hooks/useAPI'
import { useDimentions } from '../../../../Hooks/useDimentions'
import { convertTime, shorten } from '../../../../utilities/utilities'
import Icon from '../../../../Components/Icon/Icon'
import play from '../../../../assets/svg/play.svg'

const Songs = ({ id }) => {

    const { data: playlist } = useArtistPlaylist(id)
    const activeId = useSongId();

    const dispatch = usePlaylistDispatch();

    const [toggle, setToggle] = useState(false);

    if (!playlist) return null;

    const playSong = index => {
        const payload = {
            playlist,
            index,
            info: { type: 'artist', id }
        }
        dispatch({ type: 'playlist', payload })
    }

    const toggleHandler = () => {
        setToggle(prevState => !prevState);
    }


    const songItems = playlist.map((song, index) => {

        const color = song.id === activeId ? colors.tertiary : null;

        return (
            <div className={styles.song} style={{ color }} key={index} onClick={() => playSong(index)} >
                <img className={styles.cover} src={song.cover} alt='music cover' />
                <p className={styles.title}>{shorten(song.title)}</p>
                <p className={styles.duration}>{convertTime(song.duration)}</p>
                <Icon className={styles.play} src={play} size={20} fill='white' />
                <Desktop>
                    <h6 className={styles.index}>{index + 1}</h6>
                    <p className={styles.artist}>{song.artist_name}</p>
                    <p className={styles.album}>{song.album_title}</p>
                </Desktop>
            </div>
        )
    })

    const songsShown = toggle ? songItems : songItems.slice(0, 5);

    const title = toggle ? 'show 5 less' : 'show 5 more';

    return (
        <div className={styles.songs} >
            {songsShown}
        </div>
    )
}

export default Songs;