import React from 'react'

class Employee extends React.Component {

  constructor(){
    super();
    this.state = {
      barWidth : 0
    }
  }

  componentDidMount(){
    return this.setState({ barWidth: this.refs.bar.getBoundingClientRect().width });
  }

  render(){
    let {firstName, lastName, profileImageUrl, sumHours} = this.props;

    return (
      <div className="employee">
        <img src={profileImageUrl} className="userPic"/>
        <div className="details">
          <div className="top clearfix">
            <div className="name pull-left">{`${firstName} ${lastName}`}</div>
            <div className="hours pull-right">{sumHours} hours</div>
          </div>
          <div className="bottom bar" ref="bar">
            <div className="fillbar" style={{width:sumHours*this.state.barWidth/1000}}></div>
          </div>
        </div>
      </div>
    );
  }
}

const EmployeeState = ({employees}) => (
    <div className="employeeState">
      <div className="title">Employee state</div>
      <div className="employees">
        {
          employees.slice(employees.length -3).map( employee => {
            return <Employee {...employee} key={employee.id} />
          })
        }
      </div>
    </div>
)

export default EmployeeState