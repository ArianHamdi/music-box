import styles from './Redirect.module.scss'
import { useHistory } from 'react-router-dom';

const Redirect = () => {

    const history = useHistory()

    const redirectHandler = () => {
        history.replace('/')
    }

    return (
        <div className={styles.container}>
            <div className={styles.redirect}>
                <h2 className={styles.code}>404</h2>
                <h3 className={styles.title}>oops! page not found</h3>
                <h3 className={styles.text}>Sorry, the page you're looking for dosen't exist.</h3>
                <div className={styles.button} onClick={redirectHandler}>return home</div>
            </div>
        </div>
    )
}

export default Redirect;