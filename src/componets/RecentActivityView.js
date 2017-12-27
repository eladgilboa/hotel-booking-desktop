import React from 'react'
import moment from 'moment'
import classnames from 'classnames'

moment.updateLocale('en', {
  relativeTime : {
    future: "in %s",
    past:   "%s",
    s  : 'a few seconds',
    ss : '%dsec',
    m:  "a minute",
    mm: "%dmin",
    h:  "an hour",
    hh: "%dho",
    d:  "a day",
    dd: "%dd",
    M:  "a month",
    MM: "%dm",
    y:  "a year",
    yy: "%dy"
  }
});

const Activity = ({ activityType,occurredAt,description }) => {
  let label,dotClass;

  switch (activityType){
    case 'CHECK_IN':
      label = 'Check in';
      dotClass = 'green';
      break;
    case 'NEW_EMPLOYEE':
      label = 'New employee';
      dotClass = 'yellow';
      break;
    case 'MAINTENANCE':
      label = 'Maintenance';
      dotClass = 'red';
      break;
  }

  return (
    <div className="activity">
      <div className={classnames('dot','circle',dotClass)}></div>
      <div className="top clearfix">
        <div className="activityType pull-left">{label}</div>
        <div className="timeAgo pull-right">{moment(occurredAt).fromNow()}</div>
      </div>
      <div className="description">{description}</div>
    </div>
  );
};

const RecentActivity = ({activities}) => (
    <div className="recentActivity">
      <div className="title">Recent activity</div>
      <div className="activities">
        {
          activities.map( (activity) => {
            return <Activity {...activity} key={activity.id}/>
          })
        }
      </div>
    </div>
);

export default RecentActivity