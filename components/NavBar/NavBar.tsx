import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import images from '../../constants/images';

import './NavBar.css';

const NavBar: React.FC = () => {
  return (
    <nav>
      <div>
        <Link href="/">
          <Image src={images.logo} alt="logo" width={36} height={36} />
        </Link>
      </div>
      <div className='flex'>
        <ul className='flex flex-row nav-link_gap'>
            <li>
                <Link className='nav-link' href="#">Home</Link>
            </li>
            <li>
                <Link className='nav-link' href="#">Top Sales</Link>
            </li>
            <li>
                <Link className='nav-link' href="#">Collections</Link>
            </li>
            <li>
                <Link className='nav-link' href="#">Our Blog</Link>
            </li>
            <li>
                <Link className='nav-link' href="#">About Us</Link>
            </li>
        </ul>
      </div>
      <div className='flex flex-row align-middle justify-end'>
        <Link className='custom_nav-link' href="#">Sign Up</Link>
        <Link className='btn-dark' href="#">Connect Wallet</Link>
      </div>
    </nav>
  );
};

export default NavBar;
