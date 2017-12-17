import { connect } from 'react-redux'
import RecentActivityView from '../componets/RecentActivityView'

const mapStateToProps = state => {
    return {
        activities : state.recentActivity 
    }
}

const RecentActivity = connect(
    mapStateToProps
)(RecentActivityView)

export default RecentActivity