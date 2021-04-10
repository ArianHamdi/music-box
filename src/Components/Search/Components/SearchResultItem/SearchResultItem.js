import styles from './SearchResultItem.module.scss'
import { useHistory } from 'react-router-dom'
import { usePlaylistDispatch } from '../../../../Contexts/playlist-context'

const SearchResultItem = ({ data, hideResult }) => {

    const history = useHistory();
    const dispatch = usePlaylistDispatch();

    const { type } = data;

    let id, title, cover, artist_picture, artist_id;

    if (type === 'artist') {
        id = data.id;
        title = data.name;
        cover = data.picture_medium;
    }
    else if (type === 'album') {
        id = data.id;
        title = data.title;
        cover = data.cover_medium;
        artist_picture = data.artist.picture_medium;
        artist_id = data.artist.id
    }

    else if (type === 'track') {
        id = data.album.id;
        title = data.title
        cover = data.album.cover_medium;
        artist_picture = data.artist.picture_medium;
        artist_id = data.artist.id
    }

    const goToHandler = () => {
        let state
        const to = type === 'artist' ? 'artist' : 'album'
        if (type === 'artist') {
            state = {
                artist_picture: cover
            }
        }
        else if (type === 'album') {
            state = {
                artist_id,
                artist_picture,
                cover
            }
        }
        else if (type === 'track') {
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
        history.push(`/${to}/${id}`, state)
        hideResult();
    }

    return (
        <div className={styles.item} onClick={goToHandler}>
            <h5>{title}</h5>
            <img src={cover} alt={title} />
        </div>
    )
}

export default SearchResultItem;