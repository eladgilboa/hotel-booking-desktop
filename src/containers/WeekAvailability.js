import { connect } from 'react-redux'
import WeekAvailabilityView from '../componets/WeekAvailabilityView'

const mapStateToProps = state => {
    let { weekAvailabilityPercent } = state.bookingSnapshot;
    return {
        percent : weekAvailabilityPercent
    }
}

const WeekAvailability = connect(
  mapStateToProps
)(WeekAvailabilityView)

export default WeekAvailability