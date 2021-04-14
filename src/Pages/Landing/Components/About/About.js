import styles from './About.module.scss'
import about from '../../../../assets/images/about.jpg'


const About = () => {
    return (
        <>
            <section className={styles.about}>
                <img className={styles.picture} src="./logo192.png" alt="logo" />
                <div className={styles.info}>
                    <h2>About The App</h2>
                    <p>It has been inspired from spotify, just listening to the music, I decided to create a
                    music player app with an attractive UI, using ReactJS library.
                </p>
                </div>
            </section>
            <section className={styles.about}>
                <img className={styles.picture} src={about} alt='about' />
                <div className={styles.info}>
                    <h2>About Me</h2>
                    <p>I am Arian Hamdi I was born in july 2001.</p>
                    <p>student of electrical engineering in Shahroud industrial university.</p>
                    <p>interested in computer science specially web programming.</p>
                </div>
            </section>
        </>
    )
}

export default About;