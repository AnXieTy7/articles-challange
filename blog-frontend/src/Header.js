import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header style={{ marginBottom: '2rem' }}>
            <nav>
                <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </header>
    );
};

export default Header;
