import { useMediaQuery } from 'react-responsive';
import breakponts from '../../Constant/breakpoints';

const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: breakponts.md })
    return isDesktop ? children : null;
}

const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: breakponts.md })
    return isMobile ? children : null;
}

export { Desktop, Mobile }