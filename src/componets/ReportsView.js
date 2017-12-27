import React from 'react'

const Report = ({ number,label }) => (
  <div className="report">
    <div className="number">{number}</div>
    <div className="label">{label}</div>
  </div>
);

const Reports = ({ reports }) => (
  <div className="reports">
    {
      reports.map( (report,index) => {
        return <Report {...report} key={index}/>
      })
    }
  </div>
);

export default Reports