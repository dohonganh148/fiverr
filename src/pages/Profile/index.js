import React, { useEffect, useState } from "react";
import s from "./Profile.module.scss";
import CardProfile from "components/CardProfile";
import CardJobBooked from "components/CardJobBooked";
import { getHiredJobs } from "services/profile";

const Profile = () => {
  const [hiredJobs, setHiredJobs] = useState([]);
  useEffect(() => {
    init()
  }, []);
  const init = async () => {
    let jobs = await getHiredJobs();
    setHiredJobs(jobs.content)
  };
  return (
    <div className={s.profile}>
      <div className={s.content}>
        <CardProfile />
        <CardJobBooked jobs={hiredJobs}/>
      </div>
    </div>
  );
};

export default Profile;
