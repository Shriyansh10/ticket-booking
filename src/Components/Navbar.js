import logo from '../logo.webp';
import '../App.css';
import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
        <div className='navbar'>
            <span className='logo'>
                <img src={logo} className="App-logo" alt="logo"/>
                <Link to='/' className='link'><span>Book my Ticket</span></Link>
            </span>
            <Link to='/' className='link'><div>Home</div></Link>
        </div>
    </div>
  )
}
