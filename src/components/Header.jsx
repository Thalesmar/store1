import React, { useState, useEffect } from 'react';
import '../style.css';
import _search_icon_dark from '../assets/search-b.png';
import { FaShoppingCart, FaMoon, FaSun } from 'react-icons/fa';
import logo from '../assets/Thlaes.png';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    }

    useEffect(() => {
        const app = document.querySelector('.app');
        if (darkMode) {
            app?.classList.add('dark');
        } else {
            app?.classList.remove('dark');
        }
    }, [darkMode]);

    const location = useLocation();
    const isHome = location.pathname === '/';

    return (
        <div className={`navbar ${!isHome ? 'navbar--dark' : ''}`} role="navigation" aria-label="Main">
            <Link to="/"><img src={logo} className="Logo" alt="logo" /></Link>
            <ul>
                <li><Link to="/products" className="text-white hover:opacity-80 font-semibold">Shop</Link></li>
                <li><a href="#" className="text-white hover:opacity-80 font-semibold">About</a></li>
                <li><Link to="/" className="text-white hover:opacity-80 font-semibold">Home</Link></li>
                <li><a href="#" className="text-white hover:opacity-80 font-semibold">Contact</a></li>
            </ul>

            <div className="search-box" role="search">
                <input type="text" placeholder="Search..." aria-label="Search products" />
                <img src={_search_icon_dark} alt="search icon" />
            </div>

            <button
                onClick={toggleDarkMode}
                className="dark-mode-toggle"
                aria-label="Toggle dark mode"
            >
                {darkMode ? <FaSun className="text-xl" /> : <FaMoon className="text-xl" />}
            </button>

            <div className="relative">
                <FaShoppingCart className="text-2xl cursor-pointer text-white cart" />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                    0
                </span>
            </div>
        </div>
    );
};

export default Header;
