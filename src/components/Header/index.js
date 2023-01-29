import React, { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { getJobTypes } from "redux/actions/home";

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

const Header = () => {
  const [isActive, setIsActive] = useState(true);
  const [showSubMenu, setShowSubMenu] = useState(true);
  const jobTypes = useSelector((state) => state.home.jobTypes);
  const dispatch = useDispatch();
  useEffect(() => {
    window.addEventListener("scroll", changeStyle);
    return () => {
      window.removeEventListener("scroll", changeStyle);
    };
  });
  const { search, pathname } = useLocation();
  const query = new URLSearchParams(search).get("search");
  useEffect(() => {
    dispatch(getJobTypes());
    setSearchData(query);
  }, [dispatch, query]);
  useEffect(() => {
    if (pathname === "/") {
      setIsActive(false);
      setShowSubMenu(false);
    } else {
      setIsActive(true);
      setShowSubMenu(true);
    }
  }, [pathname]);
  const changeStyle = () => {
    if (window.scrollY >= 60) {
      setIsActive(true);
      if (window.scrollY >= 100) {
        setShowSubMenu(true);
      }
    } else {
      if (pathname === "/") {
        setIsActive(false);
        setShowSubMenu(false);
      }
    }
  };
  const navigate = useNavigate();
  const [searchData, setSearchData] = useState();
  const handleSearch = () => {
    navigate(`/joblist?search=${searchData}`);
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
          <div className={styles.form}>
            <input
              type="search"
              placeholder="What service are you looking for today?"
              value={searchData}
              onChange={(e) => setSearchData(e.target.value)}
            />
            <button onClick={handleSearch}>
              <AiOutlineSearch />
            </button>
          </div>
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
          {jobTypes?.slice(0, 9)?.map((item, index) => (
            <p key={index}>
              <Link to={`/category/${item._id}`}>
                {item.name}
                {/* {item?.isNew && <span className={styles.btnNew}>New</span>} */}
              </Link>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
