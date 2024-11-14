// header
'use client'
import Link from 'next/link';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import Image from 'next/image';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <div className="header-container">
        {/* Logo Wrapper */}
        <div className="logo-wrapper">
          <Image
            src={'/images/logo.png'}
            alt='logo'
            width={250} // Increase this value to make the logo wider
            height={80} // Adjust height as needed
            className="logo-image" // Maintain the aspect ratio
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact Us</Link>
          <Link href="/cart">Order Now</Link>
        </nav>

        {/* Mobile Menu Icon */}


        <div className='menu-icon' onClick={toggleMenu}>
          {isOpen ? <FiX /> : <FiMenu />}
        </div>
      </div>
      {/* Mobile Navigation Menu */}
      {isOpen && (
        <nav className="mobile-nav">
          <Link href="/" onClick={toggleMenu}>Home</Link>
          <Link href="/about" onClick={toggleMenu}>About Us</Link>
          <Link href="/contact" onClick={toggleMenu}>Contact Us</Link>
          <Link href="/cart" onClick={toggleMenu}>Order Now</Link>
        </nav>
      )}
    </header>
  );
}
