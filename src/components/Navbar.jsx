import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <h1>Team Management</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/add-member">Add Member</Link></li>
                <li><Link to="/view-members">View Members</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;