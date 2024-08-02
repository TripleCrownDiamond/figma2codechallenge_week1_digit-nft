"use client";

import React, { useState } from "react";
import "./Collections.css";
import Link from "next/link";
import Image from "next/image";
import images from "@/constants/images";

const Collections = () => {
  const categories = [
    "All Categories",
    "Art",
    "Celebrities",
    "Gaming",
    "Sport",
  ];

  const collections = {
    cyber_punk: {
      name: "Cyber Punk",
      image: images.cyber_punk,
      price: 68,
      category: "Art",
    },
    durolost_boll_upper: {
      name: "Durolost Boll Upper",
      image: images.durolost_boll_upper,
      price: 45,
      category: "Gaming",
    },
    space_x_wiper: {
      name: "Space X Wiper",
      image: images.space_x_wiper,
      price: 10,
      category: "Celebrities",
    },
    snoop_dogg: {
      name: "Snoop Dogg",
      image: images.snoop_dogg,
      price: 28,
      category: "Celebrities",
    },
  };

  const [activeCategory, setActiveCategory] = useState("All Categories");

  const filteredCollections = Object.entries(collections).filter(
    ([, collection]) =>
      activeCategory === "All Categories" ||
      collection.category === activeCategory
  );

  return (
    <div className="collections-section_container">
      <div className="title_container">
        <h1 className="title">Our Collections</h1>
      </div>
      <div className="collections-categories_container">
        <div className="categories">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`category ${
                activeCategory === category ? "active_category" : ""
              }`}
              onClick={() => setActiveCategory(category)}
            >
              <p>{category}</p>
            </div>
          ))}
        </div>
        <div className="view_more">
          <Link href="#">
            <p>View more</p>
          </Link>
        </div>
      </div>
      <div className="collections-container">
        {filteredCollections.map(([key, collection]) => (
          <div key={key} className="collection-item">
            <div className="image_wrapper">
                <Image
                    className="collection_image"
                    src={collection.image}
                    alt={collection.name}
                    width={258} 
                    height={213}
                />
            </div>
            <div className="collection-details">
              <h2 className="collection-name">{collection.name}</h2>
              <div className="price_wrapper">
                <div>
                    <Image
                        className="ethereum_logo"
                        src={images.ethereum_ellipse}
                        alt="ethereum_logo"
                        width={20} 
                        height={20}
                    />
                </div>
                <p className="price-value">{collection.price}</p>
              </div>
            </div>
            <div className="cta-wrapper">
                <button className="cta-btn">
                    Place a bid
                </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collections;
