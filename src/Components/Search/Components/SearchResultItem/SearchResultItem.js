import styles from './SearchResultItem.module.scss'
import Link from '../../../Link/Link'
import { usePlaylistDispatch } from '../../../../Contexts/playlist-context'

const SearchResultItem = ({ data, hideResult }) => {

    const dispatch = usePlaylistDispatch();

    const { type } = data;

    let id, title, cover, artist_picture, artist_id, state;

    if (type === 'artist') {
        id = data.id;
        title = data.name;
        cover = data.picture_medium;
        state = {
            artist_picture: cover
        }
    }
    else if (type === 'album') {
        id = data.id;
        title = data.title;
        cover = data.cover_medium;
        artist_picture = data.artist.picture_medium;
        artist_id = data.artist.id
        state = {
            artist_id,
            artist_picture,
            cover
        }
    }

    else if (type === 'track') {
        id = data.album.id;
        title = data.title
        cover = data.album.cover_medium;
        artist_picture = data.artist.picture_medium;
        artist_id = data.artist.id
        state = {
            artist_id,
            artist_picture,
            cover,
            autoPlay: true
        }
    }

    const playSongHandler = () => {
        if (type === 'track') {
            const payload = {
                playlist: [{ preview: data.preview, title, cover, id, artist_name: data.artist.name }],
                index: 0,
                info: { type, id }
            }
            dispatch({ type: 'playlist', payload })
            state = {
                artist_id,
                artist_picture,
                cover,
                autoPlay: true
            }
        }
        hideResult();
    }

    const to = type === 'artist' ? 'artist' : 'album'

    return (
        <Link className={styles.itemContainer} to={`/${to}/${id}`} state={state}>
            <div className={styles.item} onClick={playSongHandler}>
                <h5>{title}</h5>
                <img src={cover} alt={title} />
            </div>
        </Link>
    )
}

export default SearchResultItem;