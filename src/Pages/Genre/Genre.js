import styles from './Genre.module.scss';
import Artist from '../../Components/Artist/Artist'
import { useParams } from 'react-router-dom';
import { useAllArtists } from '../../Hooks/useAPI'
import Loading from '../../Components/Loading/Loading'
import Title from '../../Components/Title/Title'
import genres from '../../data/genres'
import Redirect from '../../Components/Redirect/Redirect'

const Genre = () => {

    const genre = useParams().genre.toLowerCase();

    const { data } = useAllArtists(genre);

    //check if genre is not valid redirect it
    if (Object.keys(genres).indexOf(genre) === -1) return <Redirect />

    const artists = data?.data.map(artist => {
        const { id, picture_medium: artist_picture, name } = artist;
        return (
            <Artist key={id} id={id} artist_picture={artist_picture} name={name} />
        )
    })

    return (
        <div className={styles.genre}>
            <Title value={genre} />
            <div className={styles.title}>
                <h2>{genre}</h2>
            </div>
            {!data && <Loading />}
            {artists}
        </div>
    )
}

export default Genre;