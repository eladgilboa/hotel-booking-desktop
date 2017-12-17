import React from 'react'
import moment from 'moment'

const Order = ({ firstName,lastName,roomType,checkInDate,checkOutDate }) => {
  let from = moment(checkInDate,'DD-MM-YYYY');
  let to = moment(checkOutDate,'DD-MM-YYYY');

  return (
    <div className="order row">
      <div className="name col-sm-4">
        <div className="greendot pull-left"></div>
        {`${firstName} ${lastName}`}
      </div>
      <div className="roomType col-sm-3">{roomType}</div>
      <div className="period col-sm-2">{`${to.diff(from, 'days')} nights`}</div>
      <div className="dates">{`${from.format('YY.MM.DD')} - ${to.format('YY.MM.DD')}`}</div>
    </div>
  );
}

const ArrivedThisWeek = ({orders}) => (
    <div className="arrivedThisWeek">
      <div className="title">Arrived this week</div>
      <div className="orders">
        {
          orders.map( (order,index) => {
            return <Order {...order} key={index}/>
          })
        }
      </div>
    </div>
)

export default ArrivedThisWeek