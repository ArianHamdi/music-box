import styles from './Nabbar.module.scss';

const Nabbar = ({ children }) => {
    return (
        <nav className={styles.Navbar}>
            {children}
        </nav>
    )
}

export default Nabbar