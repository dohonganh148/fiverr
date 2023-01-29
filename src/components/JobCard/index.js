import React from "react";
import styles from "./JobCard.module.scss";
import { FaStar, FaHeart } from "react-icons/fa";
import { Dropdown } from "antd";
import { Link } from "react-router-dom";

const JobCard = (props) => {
  const { image, name, rating, price } = props;
  const item1 = [
    {
      key: "1",
      label: (
        <p>Completed at least 50 orders on time with a minimum 4.7 rating</p>
      ),
    },
  ];
  const item2 = [
    {
      key: "1",
      label: <p>Save to My first list</p>,
    },
  ];
  return (
    <div className={styles.jobCard}>
      <div className={styles.content}>
        <div className={styles.image}>
          <a href="#home">
            <img
              alt=""
              src={
                image ||
                "https://fiverr-res.cloudinary.com/t_gig_cards_web_x2,q_auto,f_auto/gigs/3763945/original/Untitled-1.jpg"
              }
            />
          </a>
        </div>
        <div className={styles.desc}>
          <div className={styles.title}>
            <div className={styles.avatar}>
              <img
                alt=""
                src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/profile/photos/3840831/original/P_20160828_073325_LL.jpg"
              />
            </div>
            <div className={styles.name}>
              <div>
                <Link to="/jobdetail">maverickabhi</Link>
              </div>
              <Dropdown
                menu={{
                  items: item1,
                }}
                placement="top"
                arrow
              >
                <p>Level 2 Seller</p>
              </Dropdown>
            </div>
          </div>
          <h3>
            <a href="#home">
             {name}
            </a>
          </h3>
          <div className={styles.infor}>
            <div className={styles.star}>
              <FaStar />
              <p>{rating}</p>
            </div>
            <p>(1k+)</p>
          </div>
        </div>
        <footer className={styles.footer}>
          <Dropdown
            menu={{
              items: item2,
            }}
            placement="top"
            arrow
          >
            <FaHeart />
          </Dropdown>
          <div className={styles.starting}>
            <p className={styles.small}>STARTING AT</p>
            <p className={styles.big}>${price}</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default JobCard;