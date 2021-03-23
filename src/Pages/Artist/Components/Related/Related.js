import styles from './Related.module.scss'
import { useArtistRelated } from '../../../../Hooks/useAPI';
import Slider from '../../../../Components/Slider/Slider'
import Artist from '../../../../Components/Artist/Artist'

const Related = ({ id }) => {

    const { data: artists } = useArtistRelated(id)

    if (!artists?.length) return null;

    const items = artists.map(artist => {
        const { id, name, picture_medium: artist_picture, nb_fan: fans } = artist;
        return <div key={id} className={styles.slide}>
            <Artist id={id} name={name} artist_picture={artist_picture} details={fans} />
        </div>
    })

    return (
        <section className={styles.related}>
            <Slider title='Related Artists'>
                {items}
            </Slider>
        </section>
    )
}

export default Related