import { useEffect } from 'react'
import styles from './Album.module.scss';
import { useParams, useLocation } from 'react-router-dom'
import { useAlbum } from '../../Hooks/useAPI'
import { useColor } from '../../Hooks/useColor'
import Header from './Components/Header/Header'
import Tracks from './Components/Tracks/Tracks';
import { usePlaylistDispatch } from '../../Contexts/playlist-context'
import Title from '../../Components/Title/Title'

const Album = () => {

    const { id } = useParams();
    const { state } = useLocation();

    const { data } = useAlbum(id);
    const dispatch = usePlaylistDispatch();

    // get album cover
    const cover = state?.cover || data?.cover;

    // get artist picture
    const artist_picture = state?.artist_picture || data?.artist_picture

    //get artist id
    const artist_id = state?.artist_id || data?.artist_id

    const { color } = useColor(cover);

    useEffect(() => {
        if (data && state?.play) {
            dispatch({ type: 'tracks', payload: { playlist: data.tracks } })
        }
    }, [data])

    return (
        <section className={styles.album}>
            <Title value={data?.title} />
            <img className={styles.background} src={cover} alt="artist" />
            {cover && artist_picture && <Header cover={cover} artist_picture={artist_picture} artist_id={artist_id}
                {...data} color={color} />}
            <Tracks tracks={data?.tracks} album_id={data?.album_id} />
        </section>
    )
}

export default Album;