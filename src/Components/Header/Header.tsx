import React from 'react';
import logo from '../../assests/logo.png'
import './Header.css'
const Header:React.FC=()=>{
    return(
        <div className='header'>
           <img src={logo} alt="" />
           <h2>Task Tracker</h2>
        </div>
    )

}
export default Header;