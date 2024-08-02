"use client";

import "./Features.css";
import images from "@/constants/images";
import Image from "next/image";

import React from "react";

const Features: React.FC = () => {
  const collections = {
    feature1: {
      title: "Set up your wallet",
      image: images.icon1,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. ",
    },
    feature2: {
      title: "Add your NFT’s",
      image: images.icon2,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. ",
    },
    feature3: {
      title: "Promote your NFT’s",
      image: images.icon3,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. ",
    },
    feature4: {
      title: "Sell your NFT’s",
      image: images.icon4,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. ",
    },
  };

  return (
    <div className="features-section_container">
      <div>
        <h2 className="title">Create and Sell Now</h2>
      </div>
      <div className="features-cards">
        {Object.values(collections).map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">
              <Image src={feature.image} alt={feature.title} width={40} height={40} />
            </div>
            <div className="feature-content">
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
