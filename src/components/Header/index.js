import React, { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { getJobTypes } from "redux/actions/home";
import { Dropdown, Space } from "antd";

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
];

const Header = () => {
  const items = [
    {
      key: "1",
      label: <div>Đăng xuất</div>,
    },
  ];
  const items2 = [
    {
      key: "1",
      label: (
        <div className={styles.list}>
          <div className={styles.listItem}>
            <h4>Logo & Brand Identity</h4>
            <ul>
              <li>
                <a href="#home">Logo Design</a>
              </li>
            </ul>
          </div>
        </div>
      ),
    },
  ];
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
          <div>
            {menu.map((item, index) => (
              <Link key={index} to={item.link} className={styles.a}>
                {item.label}
              </Link>
            ))}
          </div>
          <div className={styles.authentication}>
            <Link to="/profile" className={styles.a}>
              Sign in
            </Link>
            <Link to="/signup">
              <button>Join</button>
            </Link>
          </div>
          <div className={styles.profile}>
            <NavLink
              to="/profile"
              className={({ isActive }) => {
                if (isActive) return `${styles.authenActive} ${styles.authen}`;
                return styles.authen;
              }}
            >
              <Dropdown
                menu={{
                  items,
                }}
                placement="bottom"
                arrow
              >
                <img
                  alt=""
                  src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/profile/photos/3840831/original/P_20160828_073325_LL.jpg"
                />
              </Dropdown>
            </NavLink>
          </div>
        </nav>
      </div>

      <div className={showSubMenu ? styles.subMenuActive : styles.subMenu}>
        <div className={styles.row}>
          {jobTypes?.slice(0, 9)?.map((item, index) => (
            <Space wrap>
              <Dropdown
                menu={{
                  items: items2,
                }}
                placement="bottom"
              >
                <p key={index}>
                  <Link to={`/category/${item.id}`}>
                    {item.tenLoaiCongViec}
                    {/* {item?.isNew && <span className={styles.btnNew}>New</span>} */}
                  </Link>
                </p>
              </Dropdown>
            </Space>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
