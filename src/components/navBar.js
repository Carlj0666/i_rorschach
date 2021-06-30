import React from 'react'

import { BrowserRouter as Router, NavLink} from 'react-router-dom'

const link = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    background: 'blue',
    textDecoration: 'none',
    color: 'white',
}


function Navbar(){
    return(
    <div>
        <NavLink to="/" exact style={link} activeStyle={{background: 'darkblue'}}>Homepage</NavLink>
        <NavLink to="/about" exact style={link} activeStyle={{background: 'darkblue'}}>About</NavLink>
        <NavLink to="/inkblots" exact style={link} activeStyle={{background: 'darkblue'}}>inkblots</NavLink>
        <NavLink to="/submit-an-image" exact style={link} activeStyle={{background: 'darkblue'}}>Submit an Image</NavLink>
    </div>
    )
}
export default Navbar