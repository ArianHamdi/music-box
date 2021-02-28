import breakpoints from '../Constant/breakpoints'

const numberWithCommas = number => {
    // return number.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    return number;
}

const convertTime = time => {

    if (isNaN(time)) {
        return '0:00';
    }
    const minute = Math.floor(time / 60);
    const second = ('0' + Math.floor(time % 60)).slice(-2);
    return `${minute}:${second}`;
}

const shorten = (word, size) => {
    let length;
    if (size < breakpoints.sm) {
        length = 25
    }
    else if (size < breakpoints.md) {
        length = 45
    }
    else if (size < breakpoints.lg) {
        length = 60;
    }
    else {
        length = 80
    }

    if (length > word.length) return word;

    const shortenWord = word.slice(0, length) + ' ...';

    return shortenWord;
}

const shuffle = array => {
    const shuffled = [...array];
    shuffled.sort(() => Math.random() - 0.5);
    return shuffled;
}

export {
    convertTime,
    numberWithCommas,
    shorten,
    shuffle
}
