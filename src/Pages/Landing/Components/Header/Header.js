import styles from './Header.module.scss';
import Button from '../../../../Components/Button/Button'

import { useHistory } from 'react-router-dom'

const Header = () => {

    const history = useHistory();

    const goHome = () => {
        history.push('/home');
    }

    return (
        <header className={styles.header}>
            <div>
                <h1>Open the world of music.</h1>
                <h2>It's all here.</h2>
                <div >
                    <Button title='musicbox premium' background='gradient' uppercase width='18rem' height='4rem'
                        onClick={goHome} />
                </div>
                <p>1-month free trial <span>$7.99</span>/mounth after </p>
            </div>

        </header >
    )
}

export default Header

