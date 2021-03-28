import styles from './Tracks.module.scss'
import { convertTime } from '../../../../utilities/utilities'

import { usePlaylistDispatch } from '../../../../Contexts/playlist-context'

import Icon from '../../../../Components/Icon/Icon'
import play from '../../../../assets/svg/play.svg'

const Tracks = ({ tracks, album_id }) => {

    const dispatch = usePlaylistDispatch();

    if (!tracks) return null;

    const playSong = index => {
        const payload = {
            playlist: tracks,
            index,
            info: { type: 'album', id: album_id }
        }
        dispatch({ type: 'playlist', payload })
    }

    const songs = tracks.map((track, index) => {
        const { id, title, duration } = track;
        return (
            <div key={id} className={styles.track} onClick={() => playSong(index)}>
                <h6 className={styles.index}>{index + 1}</h6>
                <p className={styles.title}>{title}</p>
                <p className={styles.duration}>{convertTime(duration)}</p>
                <Icon src={play} size={20} />
            </div >
        )
    })

    return (
        <section className={styles.tracks}>
            {songs}
        </section>
    )
}

export default Tracks;