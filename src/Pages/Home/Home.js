import styles from './HomePage.module.scss';

import TopTrack from './components/TopTracks'
import Genres from './components/Genres'
import TopArtists from './components/TopArtists'
import TopAlbums from './components/TopAlbums'
import Loading from '../../Components/Loading/Loading';

import { useTopArtists, useTopAlbums, useTopTracks } from '../../Hooks/useAPI'

const HomePage = () => {

    const { data: artists } = useTopArtists();
    const { data: albums } = useTopAlbums();
    const { data: tracks } = useTopTracks();

    return (
        <section className={styles.home}>
            {!(artists || albums || tracks) && <Loading />}
            {(artists || albums || tracks) && < Genres />}
            {/* <TopTrack tracks={tracks} /> */}
            <TopArtists artists={artists} />
            <TopAlbums albums={albums} />
        </section>
    )
}

export default HomePage;