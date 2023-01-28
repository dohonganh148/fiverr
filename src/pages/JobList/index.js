import React from "react";
import styles from "./JobList.module.scss";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Switch, Dropdown } from "antd";
import JobCard from "components/JobCard";
import { Pagination } from 'antd';

const JobList = () => {
  const btnFilter = [
    {
      content: "Category",
    },
    {
      content: "Service Options",
    },
    {
      content: "Seller Details",
    },
    {
      content: "Budget",
    },
    {
      content: "Delivery Time",
    },
  ];
  const switchBtn = [
    {
      title: "Pro services",
      desc: [
        {
          key: "1",
          label: (
            <div>Vetted professionals, verified for quality and service.</div>
          ),
        },
      ],
    },
    {
      title: "Local sellers",
      desc: [
        {
          key: "2",
          label: <div>Sellers from your country.</div>,
        },
      ],
    },
    {
      title: "Online sellers",
      desc: [
        {
          key: "3",
          label: <div>Sellers who are connected to Fiverr right now.</div>,
        },
      ],
    },
  ];

  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };
  return (
    <div className={styles.jobList}>
      <div className={styles.suggest}>
        <div className={styles.contentSuggest}>
          <h3>Suggested</h3>
          <div className={styles.rowBtn}>
            <a href="#home">Website development</a>
          </div>
        </div>
      </div>
      <div className={styles.results}>
        <h1>Results for "html"</h1>
        <div className={styles.filterBar}>
          <div className={styles.filter}>
            <div className={styles.left}>
              {btnFilter.map((item, index) => (
                <div key={index}>
                  <button>
                    <div>{item.content}</div>
                    <MdOutlineKeyboardArrowDown />
                  </button>
                </div>
              ))}
            </div>
            <div className={styles.right}>
              {switchBtn.map((item, index) => (
                <div key={index}>
                  <Dropdown
                    menu={{ items: item.desc }}
                    placement="bottom"
                    arrow
                  >
                    <p>
                      <Switch
                        style={{ width: 31 }}
                        size="small"
                        onChange={onChange}
                      />
                      <span>{item.title}</span>
                    </p>
                  </Dropdown>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.result}>
            <p>30,147 services available</p>
            <h4>
              <div>
                <span>Sort by</span> Relevance
              </div>
              <div>
                <MdOutlineKeyboardArrowDown />
              </div>
            </h4>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.row}>
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
          </div>
        </div>
      </div>
      <div className={styles.page}>
      <Pagination defaultCurrent={1} total={50} />
      </div>
    </div>
  );
};

export default JobList;
