import styles from './Navigation.mobile.module.scss';
import colors from '../../Constant/colors'

import { useLocation, useHistory } from 'react-router-dom'

import Icon from '../Icon/Icon';
import home from '../../assets/svg/home.svg'

const NavigationMobile = () => {

    const { pathname } = useLocation();
    const history = useHistory();

    const chnagePageHandler = route => {
        history.push(route);
    }

    const activeTab = {
        home: colors.grey_1,
        category: colors.grey_1,
        about: colors.grey_1
    }

    // change style for active tab
    //let path = (pathname === '/' ? '/home' : pathname).substring(1);
    let path;

    switch (pathname) {
        case '/':
            path = 'home';
            break;
        case '/artist':
            path = 'category';
            break;
        default:
            path = pathname.substring(1);
            break;
    }

    activeTab[path] = colors.tertiary;

    return (
        <nav className={styles.navigation}>
            <div onClick={() => chnagePageHandler('/')}>
                <Icon src={home} fill={activeTab.home} size={30} />
                <h5 style={{ color: activeTab.home }}>Home</h5>
            </div>
            <div onClick={() => chnagePageHandler('/category')}>
                <Icon src={home} fill={activeTab.category} size={30} />
                <h5 style={{ color: activeTab.category }}>Category</h5>
            </div>
            {/* <div onClick={() => chnagePageHandler('/about')}>
                <Icon src={home} fill={activeTab.about} size={30} />
                <h5 style={{ color: activeTab.about }}>About</h5>
            </div> */}
        </nav>
    )
}

export default NavigationMobile;