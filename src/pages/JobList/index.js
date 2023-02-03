import React, { useEffect, useState } from "react";
import styles from "./JobList.module.scss";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import JobCard from "components/JobCard";
import { Pagination } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getJobList } from "redux/actions/home";
import { useLocation } from "react-router-dom";
import Suggest from "components/Suggest";
import FilterBar from "components/FilterBar";
const JobList = () => {
  const jobList = useSelector((state) => state.home.jobs);
  const [current, setCurrent] = useState(1);
  const dispatch = useDispatch();
  const { search } = useLocation();
  const query = new URLSearchParams(search).get("search");
  useEffect(() => {
    if (query) {
      dispatch(getJobList(query, current));
    }
  }, [dispatch, query, current]);
  return (
    <div className={styles.jobList}>
      <Suggest />
      <div className={styles.results}>
        <h1>Results for "{query}"</h1>
        <div className={styles.filterBar}>
          <FilterBar />
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
            {jobList
              ?.slice(0 + (current - 1) * 8, current * 8)
              ?.map((item, index) => (
                <JobCard {...item} />
              ))}
          </div>
        </div>
      </div>
      <div className={styles.page}>
        <Pagination
          defaultCurrent={current}
          pageSize={8}
          total={jobList?.length}
          onChange={(e) => setCurrent(e)}
        />
      </div>
    </div>
  );
};

export default JobList;
