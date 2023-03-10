import React, { useEffect, useState } from "react";
import styles from "./Category.module.scss";
import { RxTriangleRight } from "react-icons/rx";
import TypeJobCard from "components/TypeJobCard";
import { getJobsByType, getTypeDetail } from "services/category";
import { Link, useParams } from "react-router-dom";
import BgCategory from "images/bgCategory.jpg";
import { BiRightArrowAlt } from "react-icons/bi";
import MostPopular from "components/MostPopular";
import { useDispatch } from "react-redux";
import { getJobListByType } from "redux/actions/home";

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
  const dispatch = useDispatch();
  const getCategoryList = async () => {
    let res = await getTypeDetail(params.id);
    setCategory(res.content[0]);
  };
  const handleSearchByType = (id) => {
    dispatch(getJobListByType(id));
  };
  useEffect(() => {
    getCategoryList();
  }, [params.id]);
  return (
    <div className={styles.category}>
      <div className={styles.content}>
        <div
          className={styles.title}
          style={{ backgroundImage: `url(${BgCategory})` }}
        >
          <div className={styles.detail}>
            <h1>{category.tenLoaiCongViec}</h1>
            <p>You think it. A programmer develops it.</p>
            <button className={styles.works}>
              <a href="#home">
                <RxTriangleRight />
                <div>How Fiverr Works</div>
              </a>
            </button>
          </div>
        </div>
        <MostPopular name={category.tenLoaiCongViec} />
        <div className={styles.typeJob}>
          <h4>Explore {category.tenLoaiCongViec}</h4>
          <div className={styles.row}>
            {category?.dsNhomChiTietLoai?.map((item, index) => (
              <div className={styles.col}>
                <img
                  alt=""
                  src={
                    item?.hinhAnh ||
                    "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/431c7d880582a199f5b240dde2694206-1626594004536/Logo%20_%20Brand%20Identity_B_2x.png"
                  }
                />
                <h5>{item.tenNhom}</h5>
                <ul>
                  {item?.dsChiTietLoai?.map((it, id) => (
                    <Link
                      to="/joblist"
                      onClick={() => handleSearchByType(it.id)}
                    >
                      <li key={id}>
                        {it?.tenChiTiet}
                        <BiRightArrowAlt />
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
            ))}
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
