import styles from './Flow.module.scss'
import image from '../../../../assets/Flow.png'
import icon from '../../../../assets/Flow_icon.png'

const Flow = () => {
    return (
        <section className={styles.Flow}>


            <img src={image} alt='flow' className={styles.Image} />


            <div >
                <h3> <img src={icon} alt='flow icon' /> flow</h3>
                <p>
                    Listen to a personalized mix of tracks based on your
                    listening history, or create your own mix of genres, artists
                    and playlists - letting you enjoy more of the music you love.
                </p>
            </div>
        </section>
    )
}

export default Flow