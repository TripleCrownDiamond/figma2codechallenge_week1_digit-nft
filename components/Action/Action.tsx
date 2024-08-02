"use client";

import "./Action.css";
import images from "@/constants/images";
import Image from "next/image";

import React from "react";

const Action: React.FC = () => {
  return (
    <div className="action-section_container">
      <Image
        className="collection_image"
        src={images.astronaut_picture}
        alt="astronaut"
        fill
      />
      <div className="overlay-text">
        <h2>Build your NFT profile</h2>
        <p>Join almost 10k NFT profiles on Digit !</p>
        <button>Sign up now</button>
      </div>
    </div>
  );
};

export default Action;
