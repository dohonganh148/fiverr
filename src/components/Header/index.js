import React, { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import { Link} from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";

const menu = [
  {
    label: "Fiverr Business",
    link: "#home",
  },
  {
    label: "Explore",
    link: "#home",
  },
  {
    label: "$ USD",
    link: "#home",
  },
  {
    label: "Become a Seller",
    link: "#home",
  },
  {
    label: "Sign in",
    link: "/login",
  },
];
const submenu = [
  {
    label: "Graphics & Design",
    link: "#home",
  },
  {
    label: "Video & Animation",
    link: "#home",
  },
  {
    label: "Writing & Translation",
    link: "#home",
  },
  {
    label: "AI Services",
    link: "#home",
    isNew: true,
  },
  {
    label: "Digital Marketing",
    link: "#home",
  },
  {
    label: "Music & Audio",
    link: "#home",
  },
  {
    label: "Programming & Tech",
    link: "/category",
  },
  {
    label: "Business",
    link: "#home",
  },
  {
    label: "Lifestyle",
    link: "#home",
  },
];

const Header = () => {
  const [isActive, setIsActive] = useState(true);
  const [showSubMenu, setShowSubMenu] = useState(true);
  useEffect(() => {
    window.addEventListener("scroll", changeStyle);
    return () => {
      window.removeEventListener("scroll", changeStyle);
    };
  });
  const changeStyle = () => {
    if (window.scrollY >= 60) {
      setIsActive(true);
      if (window.scrollY >= 100) {
        setShowSubMenu(true);
      }
    }
    // } else {
    //   setIsActive(false);
    //   setShowSubMenu(false);
    // }
  };
  return (
    <div
      className={
        isActive ? `${styles.headerActive} ${styles.header}` : styles.header
      }
    >
      <div className={styles.content}>
        <div>
          <a href="/" className={styles.logo}>
            fiverr<span>.</span>
          </a>
        </div>
        {isActive && (
          <form className={styles.form}>
            <input
              type="search"
              placeholder="What service are you looking for today?"
            />
            <button type="submit">
              <AiOutlineSearch />
            </button>
          </form>
        )}
        <nav className={styles.navbar}>
          {menu.map((item, index) => (
            <Link key={index} to={item.link}>
              {item.label}
            </Link>
          ))}
          <Link to="/signup">
            <button>Join</button>
          </Link>
        </nav>
      </div>

      <div className={showSubMenu ? styles.subMenuActive : styles.subMenu}>
        <div className={styles.row}>
          {submenu.map((item, index) => (
            <p key={index}>
              <Link to={item.link}>
                {item.label}
                {item?.isNew && <span className={styles.btnNew}>New</span>}
              </Link>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
