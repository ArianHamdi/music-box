import { useDimentions } from '../../Hooks/useDimentions'
import breakpoints from '../../Constant/breakpoints'
import NavigationMobile from './Navigation.mobile'
import NavigationDesktop from './Navigation.desktop'

const Navigation = () => {

    const { width } = useDimentions()

    const Component = width > breakpoints.md ? NavigationDesktop : NavigationMobile;

    return <Component />

}

export default Navigation;