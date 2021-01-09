import styles from './Navigation.module.scss'

import Navbar from '../../../../Components/Navbar/Nabbar'
import Button from '../../../../Components/Button/Button'
import logo from '../../../../assets/Logo.png'

const Navigation = () => {
    return (
        <Navbar>
            <div className={styles.Navigation}>
                <img src={logo} alt='logo'/>
                <ul>
                    <li><Button title='Log in' width='11rem' height='3rem' /></li>
                    <li><Button title='Sign up' background='light' width='11rem' height='3rem' /></li>
                </ul>
            </div>
        </Navbar>
    )
}

export default Navigation