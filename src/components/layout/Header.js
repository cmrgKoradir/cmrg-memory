import React from 'react'

const Header = () => (
    <header style={headerStyle}>
        <h1>CMRG Memory</h1>
    </header>
)

const headerStyle = {
    display: 'flex',
    justifyContent: 'center',

    padding: '.25em',

    background: '#333',
    color: 'white'
}

export default Header