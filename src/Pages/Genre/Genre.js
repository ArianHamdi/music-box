import styles from './Genre.module.scss';
import { useParams, useHistory } from 'react-router-dom';
import { useAllArtists } from '../../Hooks/useAPI'

const Genre = () => {

    const { genre } = useParams();

    const history = useHistory();

    const { data, isLoading } = useAllArtists(genre);

    const artistHandler = (id, picture) => {
        history.push(`/artist/${id}`, { picture });
    }

    const artists = !isLoading ? data?.data.map(artist => {
        return (
            <figure key={artist.id} onClick={() => artistHandler(artist.id, artist.picture_medium)}>
                <img src={artist.picture_medium} alt="artist" />
                <figcaption>{artist.name}</figcaption>
            </figure>
        )
    }) : null

    return (
        <div className={styles.genre}>
            <h2>{genre}</h2>
            {artists}
        </div>
    )
}

export default Genre;