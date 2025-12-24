import React from 'react';

const Navbar = () => {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="navbar">
            <div className="nav-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                DM.
            </div>
            <ul className="nav-links">
                {['About', 'Skills', 'Experience', 'Projects', 'Achievements', 'Contact'].map((item) => (
                    <li key={item} onClick={() => scrollToSection(item.toLowerCase())}>
                        {item}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
