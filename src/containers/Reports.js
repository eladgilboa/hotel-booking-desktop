import { connect } from 'react-redux'
import ReportsView from '../componets/ReportsView'

const mapStateToProps = state => {
    let { availableRooms,reservedRooms,checkedIn} = state.bookingSnapshot;
    return {
        reports: [
            { label :'Room available', number : availableRooms},
            { label :'Reserved Rooms', number : reservedRooms},
            { label :'Checked in', number : checkedIn}
        ]
    }
}

const Reports = connect(
    mapStateToProps
)(ReportsView)

export default Reports