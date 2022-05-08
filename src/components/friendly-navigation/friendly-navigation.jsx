import { useState } from 'react';
import './friendly-navigation.css';

const FriendlyNavigation = ({isOpen}) => {

    const thisClass = isOpen ? '' : 'isOpen';

    return <nav className={thisClass}>
        <a>Home</a>
        <a>Screenshots</a>
        <a>Audio Samples</a>
        <a>Download</a>
        <a>Contact</a>
        <a>FAQ & Tutorials</a>
        <a>Help</a>
        <a>Tablatures</a>
        <a>Links</a>
        <a>Search</a>
        <a>Order Online</a>
    </nav>;
};

export default FriendlyNavigation;
