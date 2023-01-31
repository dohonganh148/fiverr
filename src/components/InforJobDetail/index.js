import React, { useState } from "react";
import styles from "./InforJobDetail.module.scss";
import { Rate } from "antd";

const InforJobDetail = () => {
  const btnImg = [
    {
      src: "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/244244556/original/747220b8a5c2c0e6797e9405daba2b960a17e50f/do-html-css-java-javascript-python-programming-projects.jpg",
    },
    {
      src: "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/244244556/original/7aaccbc182d118adc2fa00ce665735a73c67fc63/do-html-css-java-javascript-python-programming-projects.png",
    },
    {
      src: "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs3/244244556/original/99d94c674052ebc1f4d2c6fa3a220b9e5fe0b278/do-html-css-java-javascript-python-programming-projects.jpg",
    },
    {
      src: "https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/7f34b9735ed3502e3bc05467dc40d44d-1673083064/IMG-20230107-WA0038/do-html-css-java-javascript-python-programming-projects.jpg",
    },
  ];
  const [selectedImg, setSelectedImg] = useState(btnImg[0]);
  const handleClick = (item) => {
    setSelectedImg(item);
  };
  return (
    <div className={styles.inforJob}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          I will do html css java javascript python programming sql database
          projects
        </h1>
        <div className={styles.profile}>
          <img
            className={styles.avatar}
            alt=""
            src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/profile/photos/3840831/original/P_20160828_073325_LL.jpg"
          />
          <a href="#home" className={styles.name}>
            mzaeempakistan
          </a>
          <p>Level 2 Seller</p>
          <div className={styles.rate}>
            <Rate
              disabled
              style={{ fontSize: 15 }}
              allowHalf
              defaultValue={5}
            />
            <p className={styles.rating}>5</p>
            <p className={styles.comment}>(62)</p>
          </div>
          <p>2 Order in Queue</p>
        </div>
        <div className={styles.slideShow}>
          <div className={styles.viewImg}>
            <img alt="" src={selectedImg.src} />
          </div>
          <div className={styles.btnImg}>
            {btnImg.map((item, index) => (
              <a href="#home" key={index} onClick={() => handleClick(item)}>
                <img
                  style={{ opacity: item.src === selectedImg.src ? 1 : 0.3 }}
                  alt=""
                  src={item.src}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InforJobDetail;
