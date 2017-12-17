import fetch from 'isomorphic-fetch'

/* BOOKING_SNAPSHOT */
export const RECEIVE_BOOKING_SNAPSHOT = 'RECEIVE_BOOKING_SNAPSHOT'
function receiveBookingSnapshot(json) {
    return {
        type: RECEIVE_BOOKING_SNAPSHOT,
        data: json
    }
}

export function fetchBookingSnapshot() {

    return function (dispatch) {

        return fetch('https://interview-booking-api.herokuapp.com/api/booking-snapshot')
            .then(
                response => response.json(),
                error => console.log('An error occured.', error)
            )
            .then(json =>
                dispatch(receiveBookingSnapshot(json))
            )
    }
}
/* BOOKING */
export const RECEIVE_BOOKING = 'RECEIVE_BOOKING';
function receiveBooking(json) {
    return {
        type: RECEIVE_BOOKING,
        data: json
    }
}

export function fetchBookings() {

    return function (dispatch) {

        return fetch(`https://interview-booking-api.herokuapp.com/api/bookings`)
            .then(
                response => response.json(),
                error => console.log('An error occured.', error)
            )
            .then(json =>
                dispatch(receiveBooking(json))
            )
    }
}


/* RECENT_ACTIVITY */
export const RECEIVE_RECENT_ACTIVITY = 'RECEIVE_RECENT_ACTIVITY';
function receiveRecentActivity(json) {
    return {
        type: RECEIVE_RECENT_ACTIVITY,
        data: json
    }
}

export function fetchRecentActivity() {


    return function (dispatch) {

        setTimeout( ()=>dispatch(fetchRecentActivity()),30000);

        return fetch(`https://interview-booking-api.herokuapp.com/api/recent-activity`)
          .then(
            response => response.json(),
            error => console.log('An error occured.', error)
          )
          .then(json =>
            dispatch(receiveRecentActivity(json))
          )
    }
}

/* receiveAll */
export const RECEIVE_ALL = 'RECEIVE_ALL';
function receiveAll() {
    return {
        type: RECEIVE_ALL
    }
}

export function loadFromServer(){
    return dispatch => Promise.all([
        dispatch(fetchBookingSnapshot()),
        dispatch(fetchBookings()),
        dispatch(fetchRecentActivity())
    ]).then(
      ()=> dispatch(receiveAll())
    );
}