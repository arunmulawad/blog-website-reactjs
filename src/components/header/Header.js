import React from 'react'
import "./header.css"

const Header = () => {
  return (
    <div className='header'>
        <div className="headerTitles">
          <span className="headerTitleSm">Movies & Games</span>
          <span className="headerTitleLg">Trending</span>        
        </div>
        <img className="headerImg" src="https://images5.alphacoders.com/126/1265826.jpg" alt="" />
    </div>
  )
}

export default Header