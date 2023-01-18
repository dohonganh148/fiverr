import React from "react";
import styles from "./Header.module.scss";
// import { Link, NavLink} from "react-router-dom";

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
    link: "#home",
  },
];

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.content}>
        <div>
          <a href="/" className={styles.logo}>
            fiverr<span>.</span>
          </a>
        </div>
        <nav className={styles.navbar}>
          {menu.map((item, index) => (
            <a key={index} href={item.link}>
              {item.label}
            </a>
          ))}
          <a href="#home">
            <button>Join</button>
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Header;
