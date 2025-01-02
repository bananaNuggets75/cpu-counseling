import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

export default function Navbar() {
  return (
    <header className="navbar-header">
      <nav className="navbar">
        {/* Left Section: Logo and Brand */}
        <div className="navbar-brand">
          <Link href="/">
            <Image
              src="/SafeDrive-logo.png" // Change this to your logo
              alt="SafeDrive Logo"
              width={40}
              height={40}
              className="navbar-logo"
            />
          </Link>
          <span className="brand-name">CPU Counseling</span>
        </div>

        {/* Center Section: Navigation Links */}
        <ul className="navbar-links">
          <li>
            <Link href="/home" className="navbar-link">Home</Link>
          </li>
          <li>
            <Link href="/about" className="navbar-link">About</Link>
          </li>
          <li>
            <Link href="/contact" className="navbar-link">Contact</Link>
          </li>
        </ul>

        {/* Right Section: Log In Button */}
        <div className="right-nav">
          <button className="login-button">
            <Link href="/login">Log In</Link>
          </button>
        </div>
      </nav>
    </header>
  );
}
