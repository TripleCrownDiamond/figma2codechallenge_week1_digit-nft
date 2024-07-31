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
        <div className="top-0 right-0 h-screen bg-white popup-menu flex">
          <div className="visible-below-1148 flex h-70 items-center mt-5 mb-32">
            <div
              className="burger-menu focus:outline-none focus:ring-2 float-end"
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
            <ul className="flex flex-col nav-link_gap">
              <li>
                <Link className="nav-link_tablet block" href="#">
                  Home
                </Link>
              </li>
              <li>
                <Link className="nav-link_tablet block" href="#">
                  Top Sales
                </Link>
              </li>
              <li>
                <Link className="nav-link_tablet block" href="#">
                  Collections
                </Link>
              </li>
              <li>
                <Link className="nav-link_tablet block" href="#">
                  Our Blog
                </Link>
              </li>
              <li>
                <Link className="nav-link_tablet block" href="#">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="visible-below-1148">
            <div className="flex flex-row mx-12">
              <Link className="custom_nav-link_tablet" href="#">
                Sign Up
              </Link>
              <Link className="btn-dark_tablet" href="#">
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
          className="burger-menu focus:outline-none focus:ring-2"
          onClick={toggleMenu}
        >
          <Image src={images.mobile_menu} alt="menu" width={20} height={20} />
        </div>
      </div>

      {/* Navigation links for desktop */}
      <div className="hidden-below-1148">
        <ul className="flex flex-row nav-link_gap">
          <li>
            <Link className="nav-link" href="#">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-link" href="#">
              Top Sales
            </Link>
          </li>
          <li>
            <Link className="nav-link" href="#">
              Collections
            </Link>
          </li>
          <li>
            <Link className="nav-link" href="#">
              Our Blog
            </Link>
          </li>
          <li>
            <Link className="nav-link" href="#">
              About Us
            </Link>
          </li>
        </ul>
      </div>

      {/* Action buttons for desktop */}
      <div className="hidden-below-1148">
        <div className="flex flex-row justify-end">
          <Link className="custom_nav-link" href="#">
            Sign Up
          </Link>
          <Link className="btn-dark" href="#">
            Connect Wallet
          </Link>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
