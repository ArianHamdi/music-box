export const useDebounce = () => {
        let inDebounce;
        return (func, delay) => {
                clearTimeout(inDebounce);
                inDebounce = setTimeout(func, delay);
        }
}
