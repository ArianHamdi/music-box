import { useState, useEffect } from 'react'
import FastAverageColor from 'fast-average-color';

const fac = new FastAverageColor();


export const useColor = picture => {

    const [color, setColor] = useState({
        color: null,
        isDark: null
    })

    useEffect(() => {
        if (!picture) return;
        fac.getColorAsync(picture, { algorithm: 'dominant' }).then(color => {
            const theme = color.isDark ? '#ffffff' : '#000000'
            setColor({
                color: color.hex,
                theme
            });
        })
    }, [picture])

    return color;
}