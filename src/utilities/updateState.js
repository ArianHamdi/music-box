export const updateState = (state, property) => {
    const newState = {
        ...state,
        [property]: property
    }

    return newState;
}