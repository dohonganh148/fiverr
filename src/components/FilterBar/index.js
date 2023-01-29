import styles from "./FilterBar.module.scss";
import { Switch, Dropdown } from "antd";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const FilterBar = () => {
  const btnFilter = [
    {
      content: "Category",
    },
    {
      content: "Service Options",
    },
    {
      content: "Seller Details",
    },
    {
      content: "Budget",
    },
    {
      content: "Delivery Time",
    },
  ];
  const switchBtn = [
    {
      title: "Pro services",
      desc: [
        {
          key: "1",
          label: (
            <div>Vetted professionals, verified for quality and service.</div>
          ),
        },
      ],
    },
    {
      title: "Local sellers",
      desc: [
        {
          key: "2",
          label: <div>Sellers from your country.</div>,
        },
      ],
    },
    {
      title: "Online sellers",
      desc: [
        {
          key: "3",
          label: <div>Sellers who are connected to Fiverr right now.</div>,
        },
      ],
    },
  ];

  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };
  return (
    <>
      <div className={styles.filter}>
        <div className={styles.left}>
          {btnFilter.map((item, index) => (
            <div key={index}>
              <button>
                <div>{item.content}</div>
                <MdOutlineKeyboardArrowDown />
              </button>
            </div>
          ))}
        </div>
        <div className={styles.right}>
          {switchBtn.map((item, index) => (
            <div key={index}>
              <Dropdown menu={{ items: item.desc }} placement="bottom" arrow>
                <p>
                  <Switch
                    style={{ width: 31 }}
                    size="small"
                    onChange={onChange}
                  />
                  <span>{item.title}</span>
                </p>
              </Dropdown>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default FilterBar;
