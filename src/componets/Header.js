import React from 'react'
import userImg from '../assets/user.png'


const Header = () => (
  <div className="container-fluid header">
    <div className="pull-left booking">BOKING</div>
    <div className="pull-right"><img width="40px" alt="user pic" src={userImg}/></div>
  </div>
)

export default Header