"use client";

import "./Hero.css";
import Link from "next/link";
import Image from "next/image";
import images from "@/constants/images";

import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="hero-container">
      <div className="hero-container_col1">
        <div className="hero-title_container">
          <h1 className="hero-title">
            See the NFT
            <br />
            new world
          </h1>
        </div>
        <div className="hero-description_container">
          <p className="hero-description">
            Vorem ipsum dolor sit amet, consectetur adipiscing
            <br />
            elit. Etiam eu turpis molestie, di
          </p>
        </div>
        <Link href="#">
          <div className="hero-cta_container">
            <p className="hero-cta_text mr-4">Discover Vow</p>
            <Image
              src={images.hero_cta_btn}
              alt="hero_cta_btn"
              width={40}
              height={40}
            />
          </div>
        </Link>
      </div>
      <div className="hero-container_col2">
        <div className="image_container self-end first-hero_img">
          <Image
            src={images.cyborg_face}
            alt="Cyborg Face"
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>
        <div className="frame-container">
          <Image
            className="frame"
            src={images.frame}
            alt="Frame"
            width={158}
            height={117}
          />
        </div>
        <div className="image_container second-hero_img">
          <Image
            src={images.cool_monkey}
            alt="Cool monkey"
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
