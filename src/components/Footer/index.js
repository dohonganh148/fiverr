import React from "react";
import styles from "./Footer.module.scss";
import {
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";
import { MdOutlineLanguage } from "react-icons/md";
import { HiOutlineUserCircle } from "react-icons/hi";

const Footer = () => {
  const items = [
    {
      title: "Categories",
      details: [
        {
          detail: "Graphics & Design",
          desc: "",
        },
        {
          detail: "Digital Marketing",
          desc: "",
        },
        {
          detail: "Writing & Translation",
          desc: "",
        },
        {
          detail: "Video & Animation",
          desc: "",
        },
        {
          detail: "Music & Audio",
          desc: "",
        },
        {
          detail: "Programming & Tech",
          desc: "",
        },
        {
          detail: "Data",
          desc: "",
        },
        {
          detail: "Business",
          desc: "",
        },
        {
          detail: "Lifestyle",
          desc: "",
        },
        {
          detail: "Photography",
          desc: "",
        },
        {
          detail: "Sitemap",
          desc: "",
        },
      ],
    },
    {
      title: "About",
      details: [
        {
          detail: "Careers",
          desc: "",
        },
        {
          detail: "Press & News",
          desc: "",
        },
        {
          detail: "Partnerships",
          desc: "",
        },
        {
          detail: "Privacy Policy",
          desc: "",
        },
        {
          detail: "Terms of Service",
          desc: "",
        },
        {
          detail: "Intellectual Property Claims",
          desc: "",
        },
        {
          detail: "Investor Relations",
          desc: "",
        },
      ],
    },
    {
      title: "Support",
      details: [
        {
          detail: "Help & Support",
          desc: "",
        },
        {
          detail: "Trust & Safety",
          desc: "",
        },
        {
          detail: "Selling on Fiverr",
          desc: "",
        },
        {
          detail: "Buying on Fiverr",
          desc: "",
        },
      ],
    },
    {
      title: "Community",
      details: [
        {
          detail: "Events",
          desc: "",
        },
        {
          detail: "Blog",
          desc: "",
        },
        {
          detail: "Forum",
          desc: "",
        },
        {
          detail: "Community Standards",
          desc: "",
        },
        {
          detail: "Podcast",
          desc: "",
        },
        {
          detail: "Influencers",
          desc: "",
        },
        {
          detail: "Affiliates",
          desc: "",
        },
        {
          detail: "Invite a Friend",
          desc: "",
        },
        {
          detail: "Become a Seller",
          desc: "",
        },
      ],
    },
    {
      title: "More From Fiverr",
      details: [
        {
          detail: "Fiverr Business",
          desc: "",
        },
        {
          detail: "Fiverr Pro",
          desc: "",
        },
        {
          detail: "Fiverr Logo Maker",
          desc: "",
        },
        {
          detail: "Fiverr Guides",
          desc: "",
        },
        {
          detail: "Get Inspired",
          desc: "",
        },
        {
          detail: "Fiverr Select",
          desc: "",
        },
        {
          detail: "ClearVoice",
          desc: "Content Marketing",
        },
        {
          detail: "Fiverr Workspace",
          desc: "Invoice Software",
        },
        {
          detail: "Learn",
          desc: "Online Courses",
        },
        {
          detail: "Working Not Working",
          desc: "",
        },
      ],
    },
  ];
  return (
    <div className={styles.footer}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.top}>
            {items.map((item, index) => (
              <div key={index}>
                <h6>{item.title}</h6>
                <div>
                  {item.details.map((ele, index) => (
                    <div key={index} className={styles.col}>
                      <a href="#home" className={styles.detail}>
                        {ele.detail}
                      </a>
                      <a href="#home" className={styles.desc}>
                        {ele.desc}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className={styles.bot}>
            <div className={styles.left}>
              <h1>
                fiverr<span> &reg;</span>
              </h1>
              <p>&copy; Fiverr International Ltd. 2023</p>
            </div>
            <div className={styles.right}>
              <div className={styles.socials}>
                <button>
                  <FaTwitter />
                </button>
                <button>
                  <FaFacebook />
                </button>
                <button>
                  <FaLinkedin />
                </button>
                <button>
                  <FaPinterest />
                </button>
                <button>
                  <FaInstagram />
                </button>
              </div>
              <div className={styles.setting}>
                <button className={styles.language}>
                  <MdOutlineLanguage />
                  <p>English</p>
                </button>
                <button className={styles.usd}>$ USD</button>
                <button className={styles.user}>
                  <HiOutlineUserCircle />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
