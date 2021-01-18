import { useState } from 'react';
import styles from './Songs.module.scss';

import { usePlaylistUpdate } from '../../../../Contexts/playlist-context'

import { convertTime } from '../../../../utilities/utilities'
import Button from '../../../../Components/Button/Button'
import Icon from '../../../../Components/Icon/Icon'

import play from '../../../../assets/SVGs/Play.svg'

const Songs = ({ songs, isDark }) => {


    const [toggle, setToggle] = useState(false);

    const setPlaylist = usePlaylistUpdate();

    const playSong = index => {
        setPlaylist(songs, index)
    }

    const toggleHandler = () => {
        setToggle(prevState => !prevState);
    }

    const color = isDark ? '#fff' : "#000"

    const songItems = songs.map((song, index) => {
        return (
            <div className={styles.song} style={{ color }} key={index}>
                <h6>{index + 1}</h6>
                <img src={song.album.cover_small} alt='music cover' />
                <p>{song.title}</p>
                <p>{song.artist.name}</p>
                <p>{song.album.title}</p>
                <p>{convertTime(song.duration)}</p>
                <Icon src={play} size={20} fill={color} onClick={() => playSong(index)} />
            </div>
        )
    })

    const songsShown = toggle ? songItems : songItems.slice(0, 5);

    const title = toggle ? 'show 5 less' : 'show 5 more';

    return (
        <div className={styles.songs} style={{ color }}>
            <h4>Papular songs</h4>
            <div className={styles.song}>
                <h6>#</h6>
                <p>cover</p>
                <p>title</p>
                <p>artist</p>
                <p>album</p>
                <p>time</p>
                <p>icon</p>
            </div>
            {songItems}
            <Button className={styles.button} title={title} uppercase onClick={toggleHandler} color={color} />
        </div>
    )
}

export default Songs;