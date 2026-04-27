
import { useState, useEffect, useRef } from 'react';

function Navbar({ openBooking, openPartner }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const menuRef = useRef(null);

    const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        const top = section.getBoundingClientRect().top + window.scrollY - navbarHeight - 20;
        window.scrollTo({ top: top, behavior: 'smooth' });
    }
    setIsProfileOpen(false);
    setIsMenuOpen(false);
};

    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: 'Divi Homes',
                text: 'Professional Home Cleaning Services in Hyderabad!',
                url: window.location.href,
            });
        } else {
            alert('Share link: ' + window.location.href);
        }
        setIsProfileOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setIsMenuOpen(false);
                setIsProfileOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <nav className="navbar" ref={menuRef}>

            {/* Desktop */}
            <div className="logo" onClick={() => scrollToSection('home')} style={{cursor:'pointer'}}>Divi Homes</div>
            <ul className="nav-links">
                <li onClick={() => scrollToSection('services')}>Services</li>
                <li onClick={() => openBooking()}>My Bookings</li>
                <li onClick={() => openPartner()}>New Partner</li>
                <li onClick={() => scrollToSection('about')}>About Us</li>
            </ul>
            <div className="nav-profile" onClick={() => setIsProfileOpen(!isProfileOpen)}>
                👤 Profile
                {isProfileOpen && (
                    <div className="profile-dropdown">
                        <div onClick={() => scrollToSection('home')}>🏠 Home</div>
                        <div onClick={() => scrollToSection('about')}>ℹ️ About Us</div>
                        <div onClick={handleShare}>📤 Share</div>
                    </div>
                )}
            </div>

            {/* Mobile */}
            <div className="mobile-navbar">
                <div className="mobile-logo" onClick={() => scrollToSection('home')} style={{cursor:'pointer'}}>Divi Homes</div>
                <div className="mobile-bottom-bar">
                    <span onClick={() => scrollToSection('services')}>Services</span>
                    <span onClick={() => openBooking()}>My Bookings</span>
                    <span onClick={() => openPartner()}>New Partner</span>
                    <span onClick={() => scrollToSection('about')}>About Us</span>
                    <span className="menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>≡</span>
                </div>

                {/* Smooth dropdown */}
                <div className={`mobile-dropdown ${isMenuOpen ? 'dropdown-open' : ''}`}>
                    <div onClick={() => scrollToSection('home')}>🏠 Home</div>
                    <div onClick={() => scrollToSection('about')}>ℹ️ About Us</div>
                    <div onClick={handleShare}>📤 Share</div>
                    <div onClick={() => { openBooking(); setIsMenuOpen(false); }}>📋 My Bookings</div>
                    <div onClick={() => { openPartner(); setIsMenuOpen(false); }}>🤝 New Partner</div>
                </div>
            </div>

        </nav>
    );
}

export default Navbar;