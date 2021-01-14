import { useEffect } from 'react';
import { useLocation } from 'react-router-dom'

const ScrollToTop = () => {

    const { pathname } = useLocation();

    useEffect(() => {

        if (pathname.split('/')[1] === 'artist') {
            window.scrollTo(0, 0);
        }

    }, [pathname])

    return null;

}

export default ScrollToTop;