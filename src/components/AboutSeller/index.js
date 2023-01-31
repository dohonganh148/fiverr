import React from "react";
import s from "./AboutSeller.module.scss";
import { Rate, Collapse } from "antd";
import { TfiAngleDown, TfiAngleUp } from "react-icons/tfi";
const { Panel } = Collapse;

const AboutSeller = () => {
  const text = [
    {
      key: "1",
      header: "I have zero knowledge about programming and web development.",
      content: "I will teach you everything from the very begining.",
    },
    {
      key: "2",
      header: "I want to have sessions more or less than 60 minutes.",
      content:
        "Message me and discuss everything. I will send you a custom offer.",
    },
    {
      key: "3",
      header: "I want to become a complete web developer.",
      content:
        "I will help you with that. We will set a schedule and will have sessions accordingly every single day. And I will make you a complete web developer.",
    },
  ];
  return (
    <div className={s.aboutSeller}>
      <div className={s.content}>
        <h1 className={s.thisSeller}>About This Seller</h1>
        <div className={s.profile}>
          <div className={s.avatar}>
            <img
              alt=""
              src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/profile/photos/3840831/original/P_20160828_073325_LL.jpg"
            />
            <a href="#home"></a>
          </div>
          <div className={s.infor}>
            <h4>maverickabhi</h4>
            <p>Fullstack Web Developer, Reactjs, Nextjs ,Nodejs</p>
            <div className={s.rate}>
            <Rate
                disabled
                style={{ fontSize: 15, fill: "#ffb33e" }}
                allowHalf
                defaultValue={5}
              />
              <p className={s.rating}>5</p>
              <p className={s.comment}>(62)</p>
            </div>
            <div className={s.contact}>
              <button>Contact Me</button>
            </div>
          </div>
        </div>
        <div className={s.faq}>
          <h2>FAQ</h2>
          <Collapse
            accordion
            ghost
            expandIconPosition="end"
            expandIcon={({ isActive }) =>
              isActive ? <TfiAngleUp /> : <TfiAngleDown />
            }
          >
            {text.map((item) => (
              <Panel header={item.header} key={item.key}>
                <p>{item.content}</p>
              </Panel>
            ))}
          </Collapse>
        </div>
      </div>
    </div>
  );
};

export default AboutSeller;
