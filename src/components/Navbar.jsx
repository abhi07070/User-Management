import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        // Navigation bar
        <div className="navbar">
            <h1><Link to="/">User Management</Link></h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/userform">Create User</Link></li>
            </ul>
        </div>
    )
}

export default Navbar
