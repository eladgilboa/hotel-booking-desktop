import React from 'react'
import userImg from '../assets/user.png'


const Header = () => (
  <div className="header">
    <div className="booking">BOKING</div>
    <div className=""><img width="40px" alt="user pic" src={userImg}/></div>
  </div>
);

export default Header