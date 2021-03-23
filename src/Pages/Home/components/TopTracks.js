import styles from './styles.module.scss';
import Slider from '../../../Components/Slider/Slider'
import { useTopTracks } from '../../../Hooks/useAPI'
import { usePlaylistDispatch } from '../../../Contexts/playlist-context'


const TopTracks = () => {

    const dispatch = usePlaylistDispatch();
    const { data: tracks } = useTopTracks();

    if (!tracks) return null;

    const items = tracks?.map(track => {
        return (
            <div>

            </div>
        )
    })

    return (
        <section className={styles.top}>
            <Slider title='top tracks'>
                {items}
            </Slider>
        </section>
    )
}

export default TopTracks;