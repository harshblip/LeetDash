import React from 'react';
import { ReactPropTypes } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ icon, title }) => {
    return (
        <nav className = 'navbar bg-primary'>
            <h1>
                <i className={icon} /> {title}
            </h1>

            <ul>
                <li>
                    <Link to='/'> Home </Link>
                </li>
                <li>
                    <Link to='/about'> about </Link>
                </li>
            </ul>
        </nav>
    );
};

Navbar.defaultprops = {
    title: 'Leetcode.id',
    icon: 'fab fa-github'
};

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
};

export default Navbar;