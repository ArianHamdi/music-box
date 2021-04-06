import styles from './Redirect.module.scss'
import { useHistory } from 'react-router-dom';

import headphone from '../../assets/images/headphone.jpg'

const Redirect = () => {

    const history = useHistory()

    const redirectHandler = () => {
        history.replace('/')
    }

    return (
        <div className={styles.container}>
            <img src={headphone} alt="404" />
            <div className={styles.redirect}>
                <h2 className={styles.code}>404</h2>
                <h3 className={styles.content}>what are you looking for ? </h3>
                <h3 className={styles.content}>there is nothing to show</h3>
                <button className={styles.button} onClick={redirectHandler}>let's go</button>
            </div>
        </div>
    )
}

export default Redirect;