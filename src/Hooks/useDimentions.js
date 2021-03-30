import { useState, useEffect } from 'react';
import { debounce } from 'lodash'

const getWindowDimentions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    }
}

export const useDimentions = () => {

    const [windowDimentions, setWindowDimentions] = useState(getWindowDimentions());

    useEffect(() => {
        const handleResize = debounce(() => {
            setWindowDimentions(getWindowDimentions());
        }, 200)

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimentions;
}