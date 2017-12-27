import React, { Component } from 'react';

import Header from './componets/Header';
import Reports from './containers/Reports';
import WeekAvailability from './containers/WeekAvailability'
import ArrivedThisWeek from './containers/ArrivedThisWeek'
import RecentActivity from './containers/RecentActivity'
import EmployeeState from './containers/EmployeeStats'
// import 'bootstrap/dist/css/bootstrap.css';
import { connect } from 'react-redux'

class AppView extends Component {
  render() {
    if(this.props.isLoading){
      return (
        <div className="App loading">L O A D I N G . . .</div>
      )
    }
    return (
      <div className="App ">
        <Header />
        <div className="container grid">
          <Reports/>
          <WeekAvailability/>
          <ArrivedThisWeek/>
          <RecentActivity/>
          <EmployeeState/>
        </div>

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoading : state.loading
  }
};

const App = connect(
  mapStateToProps
)(AppView);

export default App;
