import React from "react";
import s from "./CardComment.module.scss";
import { Rate } from "antd";
import {BiLike, BiDislike} from "react-icons/bi"
import moment from "moment";
const CardCommnet = (props) => {
  const { noiDung, avatar, saoBinhLuan, tenNguoiBinhLuan, ngayBinhLuan } = props;
  return (
    <div className={s.content}>
      <div className={s.header}>
        <img className={s.ava}
          alt=""
          src={avatar || "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/715329c0db68d95bb3190a897f4df872-748468411672437579729/JPEG_20221230_165938_5010272363878397288.jpg"}
        />
        <div className={s.profile}>
          <h3>{tenNguoiBinhLuan}</h3>
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
            <span>{saoBinhLuan}</span>
          </div>
          <p className={s.time}> {moment(ngayBinhLuan, 'DD/MM/YYYY').fromNow()}</p>
        </div>
        <div className={s.detailCmt}>{noiDung}</div>
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
