import styles from './Header.module.scss';
import Button from '../../../../Components/Button/Button'

const Header = () => {

    return (
        <header className={styles.header}>
            <div>
                <h1>Open the world of music.</h1>
                <h2>It's all here.</h2>
                <div >
                    <Button title='musicbox premi' background='gradient' uppercase width='18rem' height='4rem' />
                    <Button title='musixbox free' uppercase width='18rem' height='4rem' />
                </div>
                <p>1-month free trial <span>$7.99</span>/mounth after </p>
            </div>

        </header >
    )
}

export default Header

