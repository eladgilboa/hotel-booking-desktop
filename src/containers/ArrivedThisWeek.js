import { connect } from 'react-redux'
import ArrivedThisWeekView from '../componets/ArrivedThisWeekView'

const mapStateToProps = state => {
    return {
        orders : state.booking 
    }
}

const ArrivedThisWeek = connect(
    mapStateToProps
)(ArrivedThisWeekView)

export default ArrivedThisWeek