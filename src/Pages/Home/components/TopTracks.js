import styles from './styles.module.scss';
import Slider from '../../../Components/Slider/Slider'
import Track from '../../../Components/Track/Track'


const TopTracks = ({ tracks }) => {

    if (!tracks) return null;

    const items = tracks?.map(track => {
        console.log(track);
        const { id: album_id, cover_medium: cover } = track.album
        const { id: artist_id, picture_medium: artist_picture, } = track.artist
        const { id, title, preview } = track
        return (
            <div key={id} className={styles.slide}>
                <Track album_id={album_id} title={title} cover={cover} artist_id={artist_id}
                    artist_picture={artist_picture} preview={preview} />
            </div>
        )
    })

    return (
        <section className={styles.slider}>
            <Slider title='top tracks'>
                {items}
            </Slider>
        </section>
    )
}

export default TopTracks;