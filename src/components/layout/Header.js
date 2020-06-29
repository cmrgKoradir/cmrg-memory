import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
    <header style={headerStyle}>
        <h1>CMRG Memory</h1>
        <div><Link to="/" style={headerLinkStyle}>Home</Link> | <Link to="/about" style={headerLinkStyle}>About</Link></div>
    </header>
)

const headerStyle = {
    display: 'flex',
    flexDirection: 'column',

    alignItems: 'center',

    padding: '.25em',

    background: '#333',
    color: 'white'
}

const headerLinkStyle = {
    color: 'white'
}

export default Header