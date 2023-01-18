import React from 'react';
import styles from "./Marketplace.module.scss";
import Graphics from "images/Marketplace/graphics.svg";
import Marketing from "images/Marketplace/marketing.svg";
import Translation from "images/Marketplace/translation.svg";
import VideoAnimation from "images/Marketplace/videoAnimation.svg";
import Music from "images/Marketplace/music.svg";
import Programming from "images/Marketplace/programming.svg";
import Business from "images/Marketplace/business.svg";
import Lifestyle from "images/Marketplace/lifestyle.svg";
import Data from "images/Marketplace/data.svg";
import Photography from "images/Marketplace/photography.svg";

const Marketplace = () => {
    const items = [
        {
            image: Graphics,
            desc: "Graphics & Design",
        },
        {
            image: Marketing,
            desc: "Digital Marketing",
        },
        {
            image: Translation,
            desc: "Writing & Translation",
        },
        {
            image: VideoAnimation,
            desc: "Video & Animation",
        },
        {
            image: Music,
            desc: "Music & Audio",
        },
        {
            image: Programming,
            desc: "Programming & Tech",
        },
        {
            image: Business,
            desc: "Business",
        },
        {
            image: Lifestyle,
            desc: "Lifestyle",
        },
        {
            image: Data,
            desc: "Data",
        },
        {
            image: Photography,
            desc: "Photography",
        },
    ]
  return (
    <div className={styles.marketplace}>
        <div className='container'>
            <h2 className='titleh2'>Explore the marketplace</h2>
            <div className={styles.content}>
            {items.map( (item, index) => (
                <div className={styles.item} key={index}>
                <a href='#home'>
                    <img alt='' src={item.image}/>
                    <p>{item.desc}</p>
                </a>
            </div>
            ))}
            </div>
        </div>
    </div>
  )
}

export default Marketplace