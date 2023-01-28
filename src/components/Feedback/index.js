import React, { useState } from "react";
import styles from "./Feedback.module.scss";
import Ganon from "images/Feedback/ganon.webp";
import Tormey from "images/Feedback/tormey.webp";
import Danjoo from "images/Feedback/danjoo.webp";
import Kaykim from "images/Feedback/kaykim.webp";
import Lavender from "images/Feedback/lavender.png";
import Naadam from "images/Feedback/naadam.png";
import Haerfest from "images/Feedback/haerfest.png";
import Rooted from "images/Feedback/rooted.png";
import GanonVid from "video/Feedback/ganonVideo.mp4";
import TormeyVid from "video/Feedback/tormeyVideo.mp4";
import DanjooVid from "video/Feedback/danjooVideo.mp4";
import { BsFillCaretRightFill } from "react-icons/bs";
import ModalVideo from "react-modal-video";
import Slider from "react-slick";

const Feedback = () => {
  const feedbacks = [
    {
      img: Ganon,
      vid: GanonVid,
      name: "Brighid Gannon (DNP, PMHNP-BC), Co-Founder  |",
      logo: Lavender,
      content:
        '"We used Fiverr for SEO, our logo, website, copy, animated videos — literally everything. It was like working with a human right next to you versus being across the world."',
    },
    {
      img: Tormey,
      vid: TormeyVid,
      name: "Caitlin Tormey, Chief Commercial Officer   |",
      logo: Naadam,
      content: `"We've used Fiverr for Shopify web development, graphic design, and backend web development. Working with Fiverr makes my job a little easier every day."`,
    },
    {
      img: Danjoo,
      vid: DanjooVid,
      name: "Tim and Dan Joo, Co-Founders   |",
      logo: Haerfest,
      content: `"When you want to create a business bigger than yourself, you need a lot of help. That's what Fiverr does."`,
    },
    {
      img: Kaykim,
      vid: DanjooVid,
      name: "Kay Kim, Co-Founder   |",
      logo: Rooted,
      content: `"It's extremely exciting that Fiverr has freelancers from all over the world — it broadens the talent pool. One of the best things about Fiverr is that while we're sleeping, someone's working."`,
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
  const [isOpen, setIsOpen] = useState(false);
  const [url, setUrl] = useState();
  const settings = {
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className={styles.feedback}>
      <div className="container">
        <Slider {...settings}>
          {feedbacks.map((item, index) => (
            <div key={index} className={styles.content}>
              <div className={styles.col1}>
                <img alt="" src={item.img} />
                <button
                  className="btnVideo"
                  onClick={() => {
                    setIsOpen(true);
                    setUrl(item.vid);
                  }}
                >
                  <BsFillCaretRightFill />
                </button>
              </div>
              <div className={styles.col2}>
                <div className={styles.title}>
                  <h5>{item.name}</h5>
                  <img alt="" src={item.logo} />
                </div>
                <p>{item.content}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <ModalVideo
        channel="custom"
        autoplay
        modal
        isOpen={isOpen}
        url={url}
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
};

export default Feedback;
