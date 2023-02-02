import React from "react";
import styles from "./TypeJobCard.module.scss";

const TypeJobCard = ({ hinhAnh, tenNhom }) => {
  return (
    <div className={styles.typeJob}>
      <div className={styles.content}>
        <img
          alt=""
          src={
            hinhAnh ||
            "https://fiverr-res.cloudinary.com/image/upload/w_860/f_auto,q_auto/v1/attachments/generic_asset/asset/767bc10a0c44b0a67be1a94aea270205-1609336032121/website%20development-min.jpg"
          }
        />
        <div className={styles.item}>
          <p>{tenNhom}</p>
          <div>
            <button>New</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypeJobCard;
