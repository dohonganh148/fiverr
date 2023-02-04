import React, { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { getJobListByType, getJobTypes } from "redux/actions/home";
import { Dropdown, Space } from "antd";
import { logOut } from "redux/actions/auth";
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
  const token = localStorage.getItem("token");
  const handleLogOut = () => {
    dispatch(logOut());
    window.location.reload()
  };
  const items = [
    {
      key: "1",
      label: <div onClick={handleLogOut}>Đăng xuất</div>,
    },
  ];

  useEffect(() => {
    dispatch(getJobTypes());
    if (query) {
      setSearchData(query);
    } else {
      setSearchData("");
    }
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
  const handleSearchByType = (id) => {
    dispatch(getJobListByType(id));
  };
  const getMenu = (category) => {
    return category?.map((item, index) => {
      return {
        key: "1",
        label: (
          <div className={styles.list}>
            <div className={styles.listItem}>
              <h4>{item?.tenNhom}</h4>
              <ul>
                {item?.dsChiTietLoai?.map((it, id) => (
                  <li>
                    <Link
                      to="/joblist"
                      onClick={() => handleSearchByType(it.id)}
                    >
                      {it.tenChiTiet}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ),
      };
    });
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
          {token ? (
            <div className={styles.profile}>
              <NavLink
                to="/profile"
                className={({ isActive }) => {
                  if (isActive)
                    return `${styles.authenActive} ${styles.authen}`;
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
                    src="https://www.pngfind.com/pngs/m/676-6764065_default-profile-picture-transparent-hd-png-download.png"
                  />
                </Dropdown>
              </NavLink>
            </div>
          ) : (
            <div className={styles.authentication}>
              <Link to="/logIn" className={styles.a}>
                Sign in
              </Link>
              <Link to="/signup">
                <button>Join</button>
              </Link>
            </div>
          )}
        </nav>
      </div>

      <div className={showSubMenu ? styles.subMenuActive : styles.subMenu}>
        <div className={styles.row}>
          {jobTypes?.slice(0, 9)?.map((item, index) => (
            <Space wrap>
              <Dropdown
                menu={{
                  items: getMenu(item?.dsNhomChiTietLoai),
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
