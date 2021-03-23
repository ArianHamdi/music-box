import styles from './Genre.module.scss';
import Artist from '../../Components/Artist/Artist'
import { useParams } from 'react-router-dom';
import { useAllArtists } from '../../Hooks/useAPI'
import Loading from '../../Components/Loading/Loading'

const Genre = () => {

    const { genre } = useParams();

    const { data } = useAllArtists(genre);

    const artists = data?.data.map(artist => {
        const { id, picture_medium: artist_picture, name } = artist;
        return (
            <Artist key={id} id={id} artist_picture={artist_picture} name={name} />
        )
    })

    return (
        <div className={styles.genre}>
            <h2>{genre}</h2>
            {!data && <Loading />}
            {artists}
        </div>
    )
}

export default Genre;