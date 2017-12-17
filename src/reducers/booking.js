
const booking = (state = [], action) => {
    switch (action.type) {
        case 'RECEIVE_BOOKING':
            return action.data;
        default:
            return state
    }
}

export default booking