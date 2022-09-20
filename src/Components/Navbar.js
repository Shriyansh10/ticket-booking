import logo from '../logo.webp';
import '../App.css';
import React from 'react'

export default function Navbar() {
  return (
    <div>
        <div className='navbar'>
            <span className='logo'>
                <img src={logo} className="App-logo" alt="logo"/>
                <span>Book my Ticket</span>
            </span>
            <div>Home</div>
        </div>
    </div>
  )
}
