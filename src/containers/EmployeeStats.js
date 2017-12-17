import { connect } from 'react-redux'
import EmployeeStateView from '../componets/EmployeeStateView'
import moment from 'moment'
import _ from 'lodash'



const mapStateToProps = state => {
    const employees = state.booking.reduce( (employees,order) => {
        let employee = order.employee;
        if(!employee){
            return employees;
        }
        if(!employees[employee.id]){
            employees[employee.id] = {...employee,sumHours:0};
        }
        employees[employee.id].sumHours += moment(order.checkOutDate,'DD-MM-YYYY').diff(moment(order.checkInDate,'DD-MM-YYYY'), 'hours')
        return employees;
    },{});

    return {
        employees : _.sortBy( _.values(employees), ['sumHours'])
    };
}

const EmployeeState = connect(
    mapStateToProps
)(EmployeeStateView)

export default EmployeeState