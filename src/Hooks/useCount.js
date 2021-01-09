import { useDimentions } from './useDimentions';

export const useCount = () => {
    const { width } = useDimentions();
    const count = Math.floor(((width - 80) / 200));
    return count;
}