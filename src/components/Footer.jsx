import React from 'react';

const Footer = () => {
    return (
        <footer style={{
            textAlign: 'center',
            padding: '2rem',
            backgroundColor: 'var(--secondary-color)',
            color: '#cbd5e1',
            marginTop: 'auto'
        }}>
            <p>&copy; {new Date().getFullYear()} Community of Developers and Coders. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
