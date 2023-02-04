import React from "react";
import s from "./CardProfile.module.scss";
import { AiFillHeart } from "react-icons/ai";
import { BsDot, BsPencil } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { FaUser } from "react-icons/fa";

const CardProfile = (props) => {
  const { name, avatar } = props;
  return (
    <div className={s.cardProfile}>
      <div className={s.infor}>
        <div className={s.header}>
          <div className={s.heart}>
            <AiFillHeart />
          </div>
          <img
            alt=""
            src={
              avatar ||
              "https://www.pngfind.com/pngs/m/676-6764065_default-profile-picture-transparent-hd-png-download.png"
            }
          />
          <div>
            <button>
              <BsDot />
              <p>Online</p>
            </button>
          </div>
        </div>
        <div className={s.name}>
          <h3>{name}</h3>
          <div>
            <BsPencil />
          </div>
          <button className="btnGreen">
            <a href="#home">Contact Me</a>
          </button>
        </div>
        <div className={s.about}>
          <div className={s.col}>
            <div className={s.colLeft}>
              <MdLocationOn />
              <p>From</p>
            </div>
            <p className={s.colRight}>Pakistan</p>
          </div>
          <div className={s.col}>
            <div className={s.colLeft}>
              <FaUser />
              <p>Member since</p>
            </div>
            <p className={s.colRight}>May 2020</p>
          </div>
        </div>
      </div>
      <div className={s.detail}>
        <div className={s.description}>
          <div className={s.title}>
            <h3>Description</h3>
            <button>Edit Description</button>
          </div>
          <p>
            Greetings, I am Muhammad Zaeem I have a lot of experience in web
            development and SEO. I am here to deliver good quality services to
            my clients to satisfy them. Please feel free to discuss the project.
            Thanks :)
          </p>
        </div>
        <div className={s.language}>
          <div className={s.title}>
            <h3>Languages</h3>
            <button>Add new</button>
          </div>
          <p>
            English - <span>Basic</span>
          </p>
        </div>
        <div className={s.linkAccount}>
          <div className={s.title}>
            <h3>Link Account</h3>
            <button>Add new</button>
          </div>
          <div className={s.links}>
            <p>+ Facebook</p>
            <p>+ Dribbble</p>
            <p>+ Github</p>
            <p>+ Twitter</p>
          </div>
        </div>
        <div className={s.skills}>
          <div className={s.title}>
            <h3>Skills</h3>
            <button>Add new</button>
          </div>
          <div className={s.skillList}>
            <button>Web development</button>
            <button>CSS</button>
            <button>SEO</button>
            <button>PHP</button>
            <button>HTML</button>
            <button>WordPress</button>
          </div>
        </div>
        <div className={s.education}>
          <div className={s.title}>
            <h3>Education</h3>
            <button>Add new</button>
          </div>
          <p>Add your Education</p>
        </div>
        <div className={s.certification}>
          <div className={s.title}>
            <h3>Certification</h3>
            <button>Add new</button>
          </div>
          <p>Add your Certification</p>
        </div>
      </div>
    </div>
  );
};

export default CardProfile;
