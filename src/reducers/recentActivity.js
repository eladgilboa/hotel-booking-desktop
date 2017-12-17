
const recentActivity = (state = [], action) => {
    switch (action.type) {
        case 'RECEIVE_RECENT_ACTIVITY':
            return action.data;
        default:
            return state
    }
}

export default recentActivity