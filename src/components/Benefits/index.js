import React, { useState } from "react";
import styles from "./Benefits.module.scss";
import { BsCheckCircle } from "react-icons/bs";
import Benefit from "images/benefit.webp";
import { BsFillCaretRightFill } from "react-icons/bs";
import ModalVideo from "react-modal-video";
import Fiverr from "video/fiverr.mp4";

const Benefits = () => {
  const items = [
    {
      title: "The best for every budget",
      desc: "Find high-quality services at every price point. No hourly rates, just project-based pricing.",
    },
    {
      title: "Quality work done quickly",
      desc: "Find the right freelancer to begin working on your project within minutes.",
    },
    {
      title: "Protected payments, every time",
      desc: "Always know what you'll pay upfront. Your payment isn't released until you approve the work.",
    },
    {
      title: "24/7 support",
      desc: "Questions? Our round-the-clock support team is available to help anytime, anywhere.",
    },
  ];
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.benefits}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.col1}>
            <h2 className="titleh2">
              A whole world of freelance talent at your fingertips
            </h2>
            {items.map((item, index) => (
              <div className={styles.item} key={index}>
                <h6>
                  <BsCheckCircle />
                  <span>{item.title}</span>
                </h6>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
          <div className={styles.col2}>
            <img alt="" src={Benefit} />
            <button className="btnVideo" onClick={() => setIsOpen(true)}>
              <BsFillCaretRightFill />
            </button>
          </div>
        </div>
        <ModalVideo
          channel="custom"
          autoplay
          modal
          isOpen={isOpen}
          url={Fiverr}
          onClose={() => setIsOpen(false)}
        />
      </div>
    </div>
  );
};

export default Benefits;
