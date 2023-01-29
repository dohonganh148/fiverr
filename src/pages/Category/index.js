import React, { useEffect, useState } from "react";
import styles from "./Category.module.scss";
import { RxTriangleRight } from "react-icons/rx";
import TypeJobCard from "components/TypeJobCard";
import { getCategories, getJobsByType } from "services/category";
import { Link, useParams } from "react-router-dom";
const Category = () => {
  const yours = [
    {
      title: "Term",
      desc: "Whatever you need to simplify your to do list, no matter your budget.",
    },
    {
      title: "Timeline",
      desc: "Find services based on your goals and deadlines. It's that simple.",
    },
    {
      title: "Safety",
      desc: "Your payment is always secure, Fiverr is built to protect your peace of mind.",
    },
  ];
  const params = useParams();
  const [category, setCategory] = useState([]);
  const [jobs, setJobs] = useState([]);
  const getCategoryList = async () => {
    let res = await getCategories(params.id);
    setCategory(res);
  };
  const getJobs = async () => {
    let res = await getJobsByType(params.id);
    setJobs(res);
  };
  useEffect(() => {
    getCategoryList();
    getJobs();
  }, [params.id]);
  return (
    <div className={styles.category}>
      <div className={styles.content}>
        <div className={styles.title}>
          <h1>{category.name}</h1>
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
            <h4>{category.name}</h4>
            <div>
              {category?.subTypeJobs?.map((item, index) => (
                <Link to={`/joblist?search=${item.name}`} className={styles.item}>
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.row}>
              {jobs?.map((item, index) => (
                <div className={styles.col}>
                  <Link to={`/joblist?search=${item.name}`}>
                    <TypeJobCard {...item} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.your}>
        <div className={styles.yourContent}>
          {yours.map((item, index) => (
            <div key={index} className={styles.yourItem}>
              <h3>
                <span>Your</span> {item.title}
              </h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
