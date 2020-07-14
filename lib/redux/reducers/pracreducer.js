

export const pracReducer = (state = true, action) => {
    switch(action.type) {
        case 'SWAP':
            return !state;
        default:
            return state
    }
}