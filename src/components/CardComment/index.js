import React from "react";
import s from "./CardComment.module.scss";
import { Rate } from "antd";
import {BiLike, BiDislike} from "react-icons/bi"

const CardCommnet = (props) => {
  const { content, user } = props;
  return (
    <div className={s.content}>
      <div className={s.header}>
        <img className={s.ava}
          alt=""
          src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/715329c0db68d95bb3190a897f4df872-748468411672437579729/JPEG_20221230_165938_5010272363878397288.jpg"
        />
        <div className={s.profile}>
          <h3>{user?.name}</h3>
          <div className={s.country}>
            <img
              alt=""
              src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
            />
            <p>United State</p>
          </div>
        </div>
      </div>
      <div className={s.detail}>
        <div className={s.rating}>
          <div className={s.rate}>
            <Rate
              disabled
              style={{ fontSize: 15, fill: "#ffb33e" }}
              allowHalf
              defaultValue={5}
            />
            <span>5</span>
          </div>
          <p className={s.time}> 2 weeks ago</p>
        </div>
        <div className={s.detailCmt}>{content}</div>
        <div className={s.helpful}>
          <p>Helpful?</p>
          <p><BiLike /><span>Yes</span></p>
          <p><BiDislike /><span>No</span></p>
        </div>
      </div>
    </div>
  );
};

export default CardCommnet;
