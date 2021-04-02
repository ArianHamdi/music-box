import { useState, useEffect } from 'react';
import { throttle } from 'lodash'

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
        const handleResize = throttle(() => {
            setWindowDimentions(getWindowDimentions());
        }, 500)

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimentions;
}