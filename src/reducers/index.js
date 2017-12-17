import { combineReducers } from 'redux'
import bookingSnapshot from './bookingSnapshot'
import booking from './booking'
import recentActivity from './recentActivity'

const loading = (state = true, action) => {
    switch (action.type) {
        case 'RECEIVE_ALL':
            return false;
        default:
            return state
    }
}

const todoApp = combineReducers({
    bookingSnapshot,
    booking,
    recentActivity,
    loading
})

export default todoApp
