
const bookingSnapshot = (state = {}, action) => {
    switch (action.type) {
        case 'RECEIVE_BOOKING_SNAPSHOT':
            return action.data;
        default:
            return state
    }
}

export default bookingSnapshot