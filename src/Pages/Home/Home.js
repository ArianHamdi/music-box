import styles from './HomePage.module.scss';

import TopTrack from './components/TopTracks'
import TopArtists from './components/TopArtists'
import TopAlbums from './components/TopAlbums'
import Loading from '../../Components/Loading/Loading';

import { useTopArtists, useTopAlbums } from '../../Hooks/useAPI'

const HomePage = () => {

    const { data: artists } = useTopArtists();
    const { data: albums } = useTopAlbums();

    return (
        <section className={styles.home}>
            {/* <TopTrack /> */}
            {!(artists || albums) && <Loading />}
            <TopArtists artists={artists} />
            <TopAlbums albums={albums} />
        </section>
    )
}

export default HomePage;