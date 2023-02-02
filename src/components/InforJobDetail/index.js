import React, { useEffect, useState } from "react";
import styles from "./InforJobDetail.module.scss";
import { Rate } from "antd";
import {TfiAngleRight} from "react-icons/tfi"
const InforJobDetail = (props) => {
  const { avatar, tenNguoiTao } = props;
  const btnImg = [
    {
      key: 1,
      src: props?.congViec?.hinhAnh,
    },
    {
      key: 2,
      src: "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/244244556/original/7aaccbc182d118adc2fa00ce665735a73c67fc63/do-html-css-java-javascript-python-programming-projects.png",
    },
    {
      key: 3,
      src: "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs3/244244556/original/99d94c674052ebc1f4d2c6fa3a220b9e5fe0b278/do-html-css-java-javascript-python-programming-projects.jpg",
    },
    {
      key: 4,
      src: "https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/7f34b9735ed3502e3bc05467dc40d44d-1673083064/IMG-20230107-WA0038/do-html-css-java-javascript-python-programming-projects.jpg",
    },
  ];
  const [selectedImg, setSelectedImg] = useState({ key: 1, src: props?.congViec?.hinhAnh });
  const handleClick = (item) => {
    setSelectedImg(item);
  };

  return (
    <div className={styles.inforJob}>
      <div className={styles.content}>
        <div className={styles.header}>
          <a href="#home">Graphics & Design</a>
          <TfiAngleRight />
          <a href="#home">Website Design</a>
        </div>
        <h1 className={styles.title}>{props?.congViec?.tenCongViec}</h1>
        <div className={styles.profile}>
          <img
            className={styles.avatar}
            alt=""
            src={
              avatar ||
              "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/profile/photos/3840831/original/P_20160828_073325_LL.jpg"
            }
          />
          <a href="#home" className={styles.name}>
            {tenNguoiTao}
          </a>
          <p>Level 2 Seller</p>
          <div className={styles.rate}>
            <Rate
              disabled
              style={{ fontSize: 15 }}
              allowHalf
              value={props?.congViec?.saoCongViec}
            />
            <p className={styles.rating}>{props?.congViec?.saoCongViec}</p>
            <p className={styles.comment}>(62)</p>
          </div>
          <p>2 Order in Queue</p>
        </div>
        <div className={styles.slideShow}>
          <div className={styles.viewImg}>
            <img alt="" src={selectedImg.src || props?.congViec?.hinhAnh} />
          </div>
          <div className={styles.btnImg}>
            {btnImg.map((item, index) => (
              <a href="#home" key={index} onClick={() => handleClick(item)}>
                <img
                  style={{ opacity: item.key === selectedImg.key ? 1 : 0.3 }}
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
