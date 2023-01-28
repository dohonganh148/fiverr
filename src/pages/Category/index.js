import React from "react";
import styles from "./Category.module.scss";
import { RxTriangleRight } from "react-icons/rx";
import TypeJobCard from "components/TypeJobCard";

const Category = () => {
  const yours = [
    {
      title: "Term",
      desc: "Whatever you need to simplify your to do list, no matter your budget."
    },
    {
      title: "Timeline",
      desc: "Find services based on your goals and deadlines. It's that simple."
    },
    {
      title: "Safety",
      desc: "Your payment is always secure, Fiverr is built to protect your peace of mind."
    },
  ]
  return (
    <div className={styles.category}>
      <div className={styles.content}>
        <div className={styles.title}>
          <h1>Programming & Tech</h1>
          <p>You think it. A programmer develops it.</p>
          <button className={styles.works}>
            <a href="#home">
              <RxTriangleRight />
              <p>How Fiverr Works</p>
            </a>
          </button>
        </div>
        <div className={styles.typeJob}>
          <div className={styles.left}>
            <h4>Programming & Tech</h4>
            <div>
              <a href="#home" className={styles.item}>
                WordPress
              </a>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.row}>
              <div className={styles.col}>
                <a href="#home">
                  <TypeJobCard />
                </a>
              </div>
              <div className={styles.col}>
                <a href="#home">
                  <TypeJobCard />
                </a>
              </div>
              <div className={styles.col}>
                <a href="#home">
                  <TypeJobCard />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.your}>
        <div className={styles.yourContent}>
          {yours.map( (item, index) => (
            <div key={index} className={styles.yourItem}>
              <h3><span>Your</span> {item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
