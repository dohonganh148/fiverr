import React from 'react';
import styles from "./PopularServices.module.scss";
import Artists from "images/PopularServices/artist.jpg";
import Design from "images/PopularServices/design.jpg";
import Wordpress from "images/PopularServices/wordpress.jpg";
import VoiceOver from "images/PopularServices/voiceover.jpg";
import VideoExplainer from "images/PopularServices/explainer.jpg";
import SocialMedia from "images/PopularServices/socialmedia.jpg";
import Seo from "images/PopularServices/seo.jpg";
import Illustrator from "images/PopularServices/illustrator.jpg";
import Translation from "images/PopularServices/translation.jpg";
import DataEntry from "images/PopularServices/dataentry.jpg";
import Slider from "react-slick";

const PopularServices = () => {
  const items = [
    {
      title: "AI Artists",
      content: "Add talent to AI",
      img: Artists,
    },
    {
      title: "Logo Design",
      content: "Build your brand",
      img: Design,
    },
    {
      title: "Wordpress",
      content: "Customize your site",
      img: Wordpress,
    },
    {
      title: "Voice Over",
      content: "Share your message",
      img: VoiceOver,
    },
    {
      title: "Video Explainer",
      content: "Engage your audience",
      img: VideoExplainer,
    },
    {
      title: "Social Media",
      content: "Reach more customers",
      img: SocialMedia,
    },
    {
      title: "SEO",
      content: "Unlock growth online",
      img: Seo,
    },
    {
      title: "Illustrator",
      content: "Color your dreams",
      img: Illustrator,
    },
    {
      title: "Translation",
      content: "Go global",
      img: Translation,
    },
    {
      title: "Data Entry",
      content: "Learn your business",
      img: DataEntry,
    },
  ];
  function SampleNextArrow(props) {
    const { className, onClick } = props;
    return <div className={className} onClick={onClick} />;
  }
  function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return <div className={className} onClick={onClick} />;
  }
  const settings = {
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className={styles.services}>
        <div className='container'>
        <h2 className='titleh2'>Popular professional services</h2>
        <div className={styles.content}>
          <Slider {...settings}>
          {items.map( (item, index) => (
            <div className={styles.col} key={index}>
            <img alt='' src={item.img}/>
            <div className={styles.title}>
              <p>{item.content}</p>
              <h4>{item.title}</h4>
            </div>
          </div>
          ))}
          </Slider>
        </div>
        </div>
    </div>
  )
}

export default PopularServices