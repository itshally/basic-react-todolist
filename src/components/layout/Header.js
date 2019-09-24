import React from 'react'
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header style={headerStyle}>
            <h1>TodoList</h1>
            <Link className="nav-link" to="/">Home</Link> |
            <Link className="nav-link" to="/about">About</Link>
        </header>
    )
}

const headerStyle = {
    background: '#333333',
    color: '#ffffff',
    textAlign: 'center',
    padding: '10px'
}