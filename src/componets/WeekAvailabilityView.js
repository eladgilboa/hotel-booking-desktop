import React from 'react'
import classnames from 'classnames'

const WeekAvailability = ({ percent }) => (
  <div className="weekAvailability">
    <div className="title">Week availability</div>
    <div className={classnames('percent',{ red:percent<=40,yellow:percent>40&&percent<=85,green:percent>85 })}>{percent}%</div>
  </div>
);

export default WeekAvailability