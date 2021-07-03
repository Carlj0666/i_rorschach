import React from 'react'

import {NavLink} from 'react-router-dom'

const link = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    background: 'black',
    textDecoration: 'none',
    color: 'white',
}


function Navbar(){
    return(
            <div>
                <NavLink to="/" exact style={link} activeStyle={{background: 'grey'}}>Homepage</NavLink>
                <NavLink to="/about" exact style={link} activeStyle={{background: 'grey'}}>About</NavLink>
                <NavLink to="/inkblots" exact style={link} activeStyle={{background: 'grey'}}>Inkblots</NavLink>
            </div>
    )
}
export default Navbar