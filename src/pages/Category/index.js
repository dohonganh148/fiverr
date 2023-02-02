import React, { useEffect, useState } from "react";
import styles from "./Category.module.scss";
import { RxTriangleRight } from "react-icons/rx";
import TypeJobCard from "components/TypeJobCard";
import { getJobsByType, getTypeDetail } from "services/category";
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
  const getCategoryList = async () => {
    let res = await getTypeDetail(params.id);
    setCategory(res.content[0]);
  };
  
  useEffect(() => {
    getCategoryList();
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
            <h4>{category.tenLoaiCongViec}</h4>
            <div>
              {category?.dsNhomChiTietLoai?.map((item, index) => (
                <Link to={`/joblist?search=${item.tenNhom}`} className={styles.item} >
                  {item.tenNhom}
                </Link>
              ))}
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.row}>
              {category?.dsNhomChiTietLoai?.map((item, index) => (
                <div className={styles.col}>
                  <Link to={`/joblist?search=${item.tenNhom}`}>
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
