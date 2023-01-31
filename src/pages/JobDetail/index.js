import Suggest from "components/Suggest";
import React from "react";
import styles from "./JobDetail.module.scss";
import InforJobDetail from "components/InforJobDetail";
import AboutGig from "components/AboutGig";
import CardBookingJob from "components/CardBookingJob";
import AboutSeller from "components/AboutSeller";
import Reviews from "components/Reviews";

const JobDetail = () => {
  return (
    <div className={styles.jobDetail}>
      <div className={styles.content}>
        <div>
          <Suggest />
          <div className={styles.jobDesc}>
            <div>
              <InforJobDetail />
              <AboutGig />
              <AboutSeller />
              <Reviews />
            </div>
            <div>
              <CardBookingJob />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
