"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import images from "../../constants/images";
import "./NavBar.css";

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      {/* Menu popup */}
      {isMenuOpen && (
        <div className="navbar-popup-menu top-0 right-0 h-screen bg-white flex">
          <div className="visible-below-1148 flex h-70 items-center mt-5 mb-32">
            <div
              className="navbar-burger-menu focus:outline-none focus:ring-2 float-end"
              onClick={toggleMenu}
            >
              <Image
                src={images.cancel}
                alt="close menu"
                width={20}
                height={20}
              />
            </div>
          </div>
          <div className="mx-12 mb-16">
            <ul className="flex flex-col navbar-links_gap">
              <li>
                <Link className="navbar-link_tablet block" href="#">
                  Home
                </Link>
              </li>
              <li>
                <Link className="navbar-link_tablet block" href="#">
                  Top Sales
                </Link>
              </li>
              <li>
                <Link className="navbar-link_tablet block" href="#">
                  Collections
                </Link>
              </li>
              <li>
                <Link className="navbar-link_tablet block" href="#">
                  Our Blog
                </Link>
              </li>
              <li>
                <Link className="navbar-link_tablet block" href="#">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="visible-below-1148">
            <div className="flex flex-row mx-12">
              <Link className="navbar-custom-link_tablet" href="#">
                Sign Up
              </Link>
              <Link className="navbar-btn-dark_tablet" href="#">
                Connect Wallet
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Logo */}
      <div>
        <Link href="/">
          <Image src={images.logo} alt="logo" width={36} height={36} />
        </Link>
      </div>

      {/* Menu button for mobile */}
      <div className="visible-below-1148">
        <div
          className="navbar-burger-menu focus:outline-none focus:ring-2"
          onClick={toggleMenu}
        >
          <Image src={images.mobile_menu} alt="menu" width={20} height={20} />
        </div>
      </div>

      {/* Navigation links for desktop */}
      <div className="hidden-below-1148">
        <ul className="flex flex-row navbar-links_gap">
          <li>
            <Link className="navbar-link" href="#">
              Home
            </Link>
          </li>
          <li>
            <Link className="navbar-link" href="#">
              Top Sales
            </Link>
          </li>
          <li>
            <Link className="navbar-link" href="#">
              Collections
            </Link>
          </li>
          <li>
            <Link className="navbar-link" href="#">
              Our Blog
            </Link>
          </li>
          <li>
            <Link className="navbar-link" href="#">
              About Us
            </Link>
          </li>
        </ul>
      </div>

      {/* Action buttons for desktop */}
      <div className="hidden-below-1148">
        <div className="flex flex-row justify-end">
          <Link className="navbar-custom-link" href="#">
            Sign Up
          </Link>
          <Link className="navbar-btn-dark" href="#">
            Connect Wallet
          </Link>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
