import React from 'react'
import Svg from './Svg'
function Header(props) {
    
    return (
        <>
        <header>
        <div className="header-container">
        <a href="" ><Svg /></a> 
          <ul>
          <a href=""><li>Browse cars</li></a>
          <a href=""><li>How it works</li></a>
          <a href=""><li>What is Drover?</li></a>
          <a href=""><li>Blog</li></a>
          <a href=""><li>Log In</li></a>
          <a href=""><li><button className="btn">Join Today</button></li></a>
          </ul>
          <ul className="menu">
          <button className="btn btn-menu"  onClick={props.checkHandler}>Menu</button>
          </ul>
        </div>
      </header>  
        </>
    )
}

export default Header
