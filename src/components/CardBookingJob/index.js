import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { bookJob } from "services/jobDetail";
import s from "./CardBookingJob.module.scss";
import {BiTime} from "react-icons/bi";
import {GrPowerCycle} from "react-icons/gr";
import {FaCheck} from "react-icons/fa";

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
            <div className={s.price}>$100</div>
          </div>
          <div className={s.description}>
            Book a 1 hour session with me and learn HTML, CSS Javascript, React
            Js, Node Js, MongoDB etc
          </div>
          <div className={s.time}>
            <div className={s.delivery}><BiTime />
            <p>30 Days Delivery</p></div>
            <div className={s.revision}>
              <GrPowerCycle />
              <p>2 Revisions</p>
            </div>
          </div>
          <div className={s.properties}>
            <div className={s.propItem}>
              <div className={s.active}><FaCheck /></div>
              <p>Design Customization</p>
            </div>
            <div className={s.propItem}>
              <div><FaCheck /></div>
              <p>Content Upload</p>
            </div>
            <div className={s.propItem}>
              <div className={s.active}><FaCheck /></div>
              <p>Responsive Design</p>
            </div>
            <div className={s.propItem}>
              <div className={s.active}><FaCheck /></div>
              <p>Include Source Code</p>
            </div>
            <div className={s.propItem}>
              <div><FaCheck /></div>
              <p>1 Page</p>
            </div>
          </div>
          <button className={s.purchaseBtn} onClick={handlePurchase}>
            Continue ($100)
          </button>
          <div className={s.compare}>
            <a href="#home">Compare Packages</a>
          </div>
        </div>
      </div>
      <div className={s.contact}>
        <p>Do you help any special requirements?</p>
        <button>Get a quote</button>
      </div>
    </div>
  );
};

export default CardBookingJob;
