// src/components/Footer.tsx

import { FaFacebook, FaInstagram, FaGoogle, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <p>Follow us on:</p>
        <div className="footer-icons">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
            <FaGoogle />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
        </div>
        <p className='footer-copy'>Copyright &copy; All rights reserved | This website is made with love by Modern Furnishings</p>
      </div>
    </footer>
  );
}
