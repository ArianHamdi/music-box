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
            setColor({
                color: color.hex,
                isDark: color.isDark
            });
        })
    }, [picture])

    return color;
}