import styles from './NavLink.module.scss'
import { useRouteMatch, useHistory } from 'react-router-dom'
import cn from 'classnames';
import Icon from '../../Icon/Icon'

const NavLink = ({ path, label, icon, exact }) => {

    const history = useHistory();
    const match = useRouteMatch({ path, exact });

    const changePageHandler = () => {
        history.push(path)
    }

    const linkStyle = cn([styles.link], {
        [styles.linkActive]: match
    })

    return (
        <div className={linkStyle} onClick={changePageHandler}>
            <Icon src={icon} size={35} />
            <h5>{label}</h5>
        </div >
    )
}

export default NavLink;