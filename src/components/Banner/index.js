import React from "react";
import styles from "./Banner.module.scss";
import BgGarb from "images/bgGarb.webp";
import { FaStar } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";

const Banner = () => {
  const popularSearch = [
    {
      label: "Website Design",
    },
    {
      label: "WordPress",
    },
    {
      label: "Logo Design",
    },
    {
      label: "Video Editing",
    },
  ];
  return (
    <div
      className={styles.banner}
      style={{ backgroundImage: `url(${BgGarb})` }}
    >
      <div className={styles.content}>
        <div className={styles.col1}>
          <h1>
            Find the perfect <span>freelancer</span> service for your business
          </h1>
          <form className={styles.form}>
              <span><AiOutlineSearch /></span>
              <input type="search" placeholder='Try "building mobile app"' />
              <button type="submit">Search</button>
          </form>
          <div className={styles.popular}>
            <p>Popular:</p>
            {popularSearch.map((item, index) => (
              <a href="#home" key={index}>
                <button>{item.label}</button>
              </a>
            ))}
          </div>
        </div>
        <div className={styles.col2}>
          <p>
            <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
          </p>
          <p>
            Gabrielle, <span>Video Editor</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
