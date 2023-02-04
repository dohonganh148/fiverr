import React, { useEffect, useState } from "react";
import s from "./Profile.module.scss";
import CardProfile from "components/CardProfile";
import CardJobBooked from "components/CardJobBooked";
import { getHiredJobs } from "services/profile";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "redux/actions/auth";

const Profile = () => {
  const dispatch = useDispatch();
  const [hiredJobs, setHiredJobs] = useState([]);
  const profile = useSelector((state) => state.home.profile);
  const id = localStorage.getItem("id")
  useEffect(() => {
    if(id) {
      dispatch(getProfile(id));
    }
    init();
  }, []);
  const init = async () => {
    let jobs = await getHiredJobs();
    setHiredJobs(jobs.content);
  };
  return (
    <div className={s.profile}>
      <div className={s.content}>
        <CardProfile {...profile} />
        <CardJobBooked jobs={hiredJobs} />
      </div>
    </div>
  );
};

export default Profile;
