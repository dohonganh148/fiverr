import React, { useState } from "react";
import { bookJob } from "services/jobDetail";
import s from "./CardBookingJob.module.scss";
import { BiTime } from "react-icons/bi";
import { GrPowerCycle } from "react-icons/gr";
import { FaCheck } from "react-icons/fa";
import moment from "moment";
import { Modal, Button } from "antd";
import { MdOutlineCancel } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const CardBookingJob = (props) => {
  const [isModalOpen, setIsOpenModal] = useState(false);
  const navigate = useNavigate();
  const handleCancel = () => {
    setIsOpenModal(false);
  };
  const handleOk = () => {
    setIsOpenModal(true);
    navigate("/login");
  };
  const plans = [
    {
      key: 1,
      name: "Basic",
    },
    {
      key: 2,
      name: "Standard",
    },
    {
      key: 3,
      name: "Premium",
    },
  ];
  const [currentPlan, setCurrentPlan] = useState(plans[0]);

  const handlePurchase = () => {
    if (localStorage.getItem("id")) {
      bookJob({
        id: props?.congViec?.id,
        maCongViec: props?.congViec?.id,
        maNguoiThue: localStorage?.getItem("id"),
        ngayThue: moment(),
        hoanThanh: true,
      });
    } else {
      setIsOpenModal(true);
    }
  };
  return (
    <div className={s.cardBookingJob}>
      <div className={s.wrapper}>
        <div className={s.header}>
          {plans.map((item, index) => (
            <div
              className={`${s.headerItem} ${
                item.key === currentPlan.key ? s.active : ""
              }`}
              key={index}
              onClick={() => setCurrentPlan(item)}
            >
              {item.name}
            </div>
          ))}
        </div>
        <div className={s.content}>
          <div className={s.info}>
            <div className={s.name}>{currentPlan?.name}</div>
            <div className={s.price}>${props?.congViec?.giaTien}</div>
          </div>
          <div className={s.description}>{props?.congViec?.moTaNgan}</div>
          <div className={s.time}>
            <div className={s.delivery}>
              <BiTime />
              <p>30 Days Delivery</p>
            </div>
            <div className={s.revision}>
              <GrPowerCycle />
              <p>2 Revisions</p>
            </div>
          </div>
          <div className={s.properties}>
            <div className={s.propItem}>
              <div className={s.active}>
                <FaCheck />
              </div>
              <p>Design Customization</p>
            </div>
            <div className={s.propItem}>
              <div>
                <FaCheck />
              </div>
              <p>Content Upload</p>
            </div>
            <div className={s.propItem}>
              <div className={s.active}>
                <FaCheck />
              </div>
              <p>Responsive Design</p>
            </div>
            <div className={s.propItem}>
              <div className={s.active}>
                <FaCheck />
              </div>
              <p>Include Source Code</p>
            </div>
            <div className={s.propItem}>
              <div>
                <FaCheck />
              </div>
              <p>1 Page</p>
            </div>
          </div>
          <button className={s.purchaseBtn} onClick={handlePurchase}>
            Continue (${props?.congViec?.giaTien})
          </button>
          <Modal
            centered
            title=""
            cancelText="Không"
            okText="Đồng ý"
            open={isModalOpen}
            onOk={() => setIsOpenModal(false)}
            onCancel={() => setIsOpenModal(false)}
            footer={[
              <Button key="back" onClick={handleCancel}>
                Không
              </Button>,
              <Button type="primary" ghost onClick={handleOk}>Đồng ý</Button>,
            ]}
          >
            <div className={s.modal}>
              <p>
                <MdOutlineCancel />
              </p>
              <h3>Bạn chưa đăng nhập</h3>
              <p>Bạn có muốn đăng nhập không?</p>
            </div>
          </Modal>
          <div className={s.compare}>
            <a href="#home">Compare Packages</a>
          </div>
        </div>
      </div>
      <div className={s.contact}>
        <p>Do you help any special requirements?</p>
        <button>Get a quote</button>
      </div>
    </div>
  );
};

export default CardBookingJob;
