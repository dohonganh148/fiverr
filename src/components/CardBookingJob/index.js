import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { bookJob } from "services/jobDetail";
import s from "./CardBookingJob.module.scss";
import {TfiAngleDown} from "react-icons/tfi"

const CardBookingJob = () => {
  const params = useParams();
  const plans = [
    {
      key: 1,
      name: "Basic",
    },
    {
      key: 2,
      name: "Standard",
    },
    {
      key: 3,
      name: "Premium",
    },
  ];
  const [currentPlan, setCurrentPlan] = useState(plans[0]);
  const handlePurchase = () => {
    bookJob(params.id);
  };
  return (
    <div className={s.cardBookingJob}>
      <div className={s.wrapper}>
        <div className={s.header}>
          {plans.map((item, index) => (
            <div
              className={`${s.headerItem} ${
                item.key === currentPlan.key ? s.active : ""
              }`}
              key={index}
              onClick={() => setCurrentPlan(item)}
            >
              {item.name}
            </div>
          ))}
        </div>
        <div className={s.content}>
          <div className={s.info}>
            <div className={s.name}>{currentPlan?.name}</div>
            <div className={s.price}>$20</div>
          </div>
          <div className={s.description}>
            Book a 1 hour session with me and learn HTML, CSS Javascript, React
            Js, Node Js, MongoDB etc
          </div>
          <div className={s.time}>
            <img alt="" />
            <div>1 Day Delivery</div>
          </div>
          <div className={s.properties}>
            {[1, 2, 3].map((item, index) => (
              <div className={s.item}>
                <img alt="" />
                <div>1 lesson</div>
              </div>
            ))}
          </div>
          <button className={s.purchaseBtn} onClick={handlePurchase}>
            Continue ($20)
          </button>
          <div className={s.compare}>Compare Packages</div>
        </div>
      </div>
      <div className={s.contact}>
        <button><p>Contact Seller</p> <TfiAngleDown /></button>
      </div>
    </div>
  );
};

export default CardBookingJob;
