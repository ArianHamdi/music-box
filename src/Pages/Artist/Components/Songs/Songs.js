import { useState } from 'react';
import styles from './Songs.module.scss';

import Button from '../../../../Components/Button/Button'
import Icon from '../../../../Components/Icon/Icon'

import play from '../../../../assets/SVGs/Play.svg'

const Songs = ({ songs, isDark }) => {

    const [toggle, setToggle] = useState(false);

    const color = isDark ? '#fff' : "#000"

    console.log('isDark : ', isDark);

    const toggleHandler = () => {
        setToggle(prevState => !prevState);
    }

    const songsShown = toggle ? songs : songs.slice(0, 5);


    const songItems = songsShown.map((song, index) => {
        return (
            <div className={styles.song} style={{ color }} key={index}>
                <h6>{index + 1}</h6>
                <img src={song.album.cover_small} alt='music cover' />
                <p>{song.title}</p>
                <p>{song.artist.name}</p>
                <p>{song.album.title}</p>
                <p>{song.duration}</p>
                <Icon Src={play} size={20} fill={color} />
            </div>
        )
    })

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