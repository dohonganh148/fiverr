import Suggest from "components/Suggest";
import React, { useEffect, useState } from "react";
import styles from "./JobDetail.module.scss";
import InforJobDetail from "components/InforJobDetail";
import AboutGig from "components/AboutGig";
import CardBookingJob from "components/CardBookingJob";
import AboutSeller from "components/AboutSeller";
import Reviews from "components/Reviews";
import { useParams } from "react-router-dom";
import { getJobsDetail } from "services/category";

const JobDetail = () => {
  const [job, setJob] = useState({});
  const params = useParams();
  useEffect(() => {
    getJob();
  }, [params.id]);
  const getJob = async () => {
    let res = await getJobsDetail(params.id);
    setJob(res?.content[0]);
  };
  return (
    <div className={styles.jobDetail}>
      {job && (
        <div>
          <Suggest />
          <div  className={styles.content}>
            
            <div className={styles.jobDesc}>
              <div>
                <InforJobDetail {...job} />
                <AboutGig {...job} />
                <AboutSeller {...job} />
                <Reviews />
              </div>
              <div>
                <CardBookingJob />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobDetail;
