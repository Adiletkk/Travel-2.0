import React from 'react'
import './Header.scss'
import logo from '../../assets/icon/zonelogo.png'
import search from '../../assets/icon/search_header.png'
import world from '../../assets/icon/world_header.png'

function Header() {
  return (
    <div className='container'>
        <header>
            <div className="left">
                <img src={logo} alt="" />
                <a href="">Home</a>
                <a href="">Components</a>
                <a href="">Pages</a>
                <a href="">Documentation</a>
            </div>
            <div className="right">
                <img src={search} alt="" />
                <img className='world' src={world} alt="" />
                <div className="line"></div>
                <a href="">Login</a>
                <button>Join Us</button>
            </div>
        </header>
    </div>
  )
}

export default Header