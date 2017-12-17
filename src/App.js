import React, { Component } from 'react';
import './App.css';
import Header from './componets/Header';
import Reports from './containers/Reports';
import WeekAvailability from './containers/WeekAvailability'
import ArrivedThisWeek from './containers/ArrivedThisWeek'
import RecentActivity from './containers/RecentActivity'
import EmployeeState from './containers/EmployeeStats'
import 'bootstrap/dist/css/bootstrap.css';
import { connect } from 'react-redux'

class AppView extends Component {
  render() {
    if(this.props.isLoading){
      return (
        <div className="loading">L O A D I N G . . .</div>
      )
    }
    return (
      <div className="App ">
        <Header className="App-header" />
        <div className="container">
          <div className="row">
            <div className="col-sm-9">
              <div className="row">
                <Reports/>
              </div>
              <div className="separator"></div>
              <div className="row">
                <div className="col-sm-9">
                  <ArrivedThisWeek/>
                </div>
                <div className="col-sm-3">
                  <WeekAvailability/>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <RecentActivity/>
              <EmployeeState/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoading : state.loading
  }
}

const App = connect(
  mapStateToProps
)(AppView)

export default App;
