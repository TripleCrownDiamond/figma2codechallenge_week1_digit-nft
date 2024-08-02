"use client";

import "./Footer.css";
import images from "@/constants/images";
import Image from "next/image";
import Link from "next/link";

import React from "react";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-logo_container">
        <Link href="#">
          <Image src={images.logo} alt="logo" width={36} height={36} />
        </Link>
      </div>
      <hr className="footer-divider" />
      <div className="footer-bottom_footer">
        <div className="footer-bottom_footer_heading">
            <h2>Create Explore & Collect Digital NFTs</h2>
        </div>
        <div className="footer-bottom_footer_links">
            <ul>
                <li><Link href="#">Privacy</Link></li>
                <li><Link href="#">Terms & Conditions</Link></li>
                <li><Link href="#">About Us</Link></li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
