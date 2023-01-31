import React from 'react';
import s from "./Profile.module.scss";
import CardProfile from "components/CardProfile";
import CardJobBooked from "components/CardJobBooked";

const Profile = () => {
  return (
    <div className={s.profile}>
      <div className={s.content}>
      <CardProfile />
      <CardJobBooked />
      </div>
    </div>
  )
}

export default Profile