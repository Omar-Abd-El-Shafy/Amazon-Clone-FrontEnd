import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/amazon_logo.png';
const Footer = () => {
  return (
    <div
      style={{ maxWidth: '100%' }}
      className="bg-dark d-flex items-start justify-between"
    >
      <div>
        <Link to="/">
          <img
            style={{ width: '120px', marginLeft: '5rem' }}
            className="p-3"
            src={logo}
            alt={logo}
          />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
