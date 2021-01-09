import styles from './HomePage.module.scss';

import Browse from './Components/Browse';
import Productive from './Components/Productive'
import Podcast from './Components/Podcast'
import Playlist from './Components/Playlist'
import Releases from './Components/Releases'

import Panel from '../../Components/Panel/Panel'

const HomePage = () => {
    
    console.log('home')

    return (
        <section className={styles.home}>

            <Browse />
            <Productive />
            <Podcast />
            <Playlist />
            <Releases />
            <Panel />
        </section>
    )
}

export default HomePage;