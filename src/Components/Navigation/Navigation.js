import NavigationMobile from './Navigation.mobile'
import NavigationDesktop from './Navigation.desktop'
import { Desktop, Mobile } from '../Responsive/Responsive'

const Navigation = () => {

    return (
        <>
            <Desktop>
                <NavigationDesktop />
            </Desktop>
            <Mobile>
                <NavigationMobile />
            </Mobile>
        </>
    )

}

export default Navigation;