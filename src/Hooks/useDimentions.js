import { useState, useEffect } from 'react';

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
        const handleResize = () => {
            setWindowDimentions(getWindowDimentions());
        }

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimentions;
}