import React from 'react'

function Navbar(props) {
    return (
        <>
            {props.check ? 
            <nav>
            <ul>
            <a href=""><li>Log In</li></a>
            <a href=""><li>Sign Up Today</li></a>
            <a href=""><li>How it works</li></a>
            <a href=""><li>What is Drover?</li></a>
            <a href=""><li>Browse cars</li></a>
            <a href=""><li>Blog</li></a>
            </ul>
            </nav>
          : null
        } 
        </>
    )
}

export default Navbar


