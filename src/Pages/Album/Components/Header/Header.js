import styles from './Header.module.scss'
import { useHistory } from 'react-router-dom'

const Header = ({ cover, artist_id, artist_picture, artist_name, title, release_date, tracks_number, duration, color }) => {

    const history = useHistory();

    const goToArtist = () => {
        history.push(`/artist/${artist_id}`, { artist_picture })
    }

    const release_year = release_date?.slice(0, 4)

    const album_hour = Math.floor(duration / 3600) ? `${Math.floor(duration / 3600)} h ` : '';

    const album_minute = `${Math.floor(duration % 3600 / 60)} m`

    const album_duration = album_hour + album_minute

    const album_count = `${tracks_number} songs`

    return (
        <div className={styles.header} >
            <div className={styles.cover_container}>
                <img className={styles.cover} src={cover} alt={title} />
                <img className={styles.artist_picture} src={artist_picture} alt={artist_name} onClick={goToArtist} />
            </div>
            <div className={styles.info} style={{ color }}>
                <h4 className={styles.year}>{release_year}</h4>
                <h2 className={styles.title}>{title}</h2>
                <h3 className={styles.artist}>{artist_name}</h3>
            </div>
            {duration && <p className={styles.duration} style={{ color }}>{album_count} - {album_duration}</p>}
        </div>
    )
}

export default Header;