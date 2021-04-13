import NavigationMobile from './NavigationMobile/NavigationMobile'
import NavigationDesktop from './NavigationDesktop/NavigationDesktop'

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