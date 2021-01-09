import styles from './Header.module.scss';
import Arrow from '../Arrow/Arrow'
import View from '../View/View'

import { useData } from '../../../Contexts/data-context'

const Header = () => {

    const { title, message, slider } = useData();

    const Cotroller = slider ? Arrow : View;

    return (
        <div className={styles.header}>
            <div>
                <h3>{title}</h3>
                <h4>{message}</h4>
            </div>
            <Cotroller />
        </div>
    )
}

export default Header;