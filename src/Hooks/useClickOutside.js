import { useEffect } from 'react'

export const useClickOutside = (ref, callback) => {

    useEffect(() => {
        const handleClick = event => {
            if (ref.current && !ref.current.contains(event.target)) {
                callback();
            }
        }

        window.addEventListener('click', handleClick)

        return () => window.removeEventListener('click', handleClick);
    }, [])
}
