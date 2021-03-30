import styles from './styles.module.scss';
import Slider from '../../../Components/Slider/Slider'
import Track from '../../../Components/Track/Track'


const TopTracks = ({ tracks }) => {

    if (!tracks) return null;

    const items = tracks?.map(track => {
        const { id: album_id, cover_medium: cover } = track.album
        const { id: artist_id, picture_medium: artist_picture, name: artist_name } = track.artist
        const { id: track_id, title, preview } = track
        return (
            <div key={track_id} className={styles.slide}>
                <Track album_id={album_id} title={title} cover={cover} artist_id={artist_id}
                    artist_picture={artist_picture} preview={preview} track_id={track_id}
                    artist_name={artist_name} />
            </div>
        )
    })

    return (
        <section className={styles.slider}>
            <Slider title='Top tracks'>
                {items}
            </Slider>
        </section>
    )
}

export default TopTracks;