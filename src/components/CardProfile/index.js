import React, { useEffect, useRef } from "react";
import s from "./CardProfile.module.scss";
import { AiFillHeart } from "react-icons/ai";
import { BsDot, BsPencil } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { Button, Modal, Form, Input, Select } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateProfile, uploadUserAvatar } from "redux/actions/auth";
import { BiCamera } from "react-icons/bi";
const { Option } = Select;
const CardProfile = (props) => {
  const { name, avatar, id, birthday, phone, skill, certification } = props;
  const [form] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [addSkill, setAddSkill] = useState(false);
  const [addCert, setAddCert] = useState(false);

  const dispatch = useDispatch();
  const showModal = () => {
    initForm();
    setIsModalOpen(true);
  };
  const handleOk = () => {
    dispatch(updateProfile(form.getFieldsValue(), id));
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const initForm = () => {
    form.setFieldsValue({
      name: props.name,
      password: props.password,
      email: props.email,
      phone: props.phone,
      birthday: props.birthday,
      gender: props.gender,
      role: props.role,
    });
  };
  const uploadInput = useRef();
  const handleClickUpload = () => {
    uploadInput.current.click();
  };
  const handleUpload = async (e) => {
    const selectedImg = e.target.files[0];
    const formData = new FormData();
    formData.append("formFile", selectedImg);
    dispatch(uploadUserAvatar(formData, id));
  };
  const handleAddNewSkill = async (value) => {
    const newSkillList = [...skill, value.newSkill];
    console.log(newSkillList);
    dispatch(updateProfile({ ...props, skill: newSkillList }, id));
    setAddSkill(false);
  };
  const handleAddNewCert = async (value) => {
    const newCertList = [...certification, value.newCert];
    dispatch(updateProfile({ ...props, certification: newCertList }, id));
    setAddCert(false);
  };
  return (
    <div className={s.cardProfile}>
      <div className={s.infor}>
        <div className={s.header}>
          <div className={s.heart}>
            <AiFillHeart />
          </div>
          <div className={s.avatar}>
            <img
              alt=""
              src={
                avatar ||
                "https://www.pngfind.com/pngs/m/676-6764065_default-profile-picture-transparent-hd-png-download.png"
              }
            />
            <div className={s.upload} onClick={handleClickUpload}>
              <input type="file" ref={uploadInput} onChange={handleUpload} />
              <BiCamera />
            </div>
          </div>
          <div className={s.btnOnline}>
            <button>
              <BsDot />
              <p>Online</p>
            </button>
          </div>
        </div>
        <div className={s.name}>
          <h3>{name}</h3>
          <div onClick={showModal}>
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
              <p>Phone</p>
            </div>
            <p className={s.colRight}>{phone}</p>
          </div>
          <div className={s.col}>
            <div className={s.colLeft}>
              <FaUser />
              <p>Birthday</p>
            </div>
            <p className={s.colRight}>{birthday}</p>
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
            <button onClick={() => setAddSkill(true)}>Add new</button>
          </div>
          <div className={s.skillList}>
            {skill?.map((item, index) => (
              <button key={index}>{item}</button>
            ))}
          </div>
          {addSkill && (
            <Form onFinish={handleAddNewSkill}>
              <Form.Item name={"newSkill"}>
                <Input placeholder="Add Skill" />
              </Form.Item>
              <div>
                <Button onClick={() => setAddSkill(false)}>Cancel</Button>
                <Button htmlType="submit" type="primary">
                  Add
                </Button>
              </div>
            </Form>
          )}
        </div>
        <div className={s.certification}>
          <div className={s.title}>
            <h3>Certification</h3>
            <button onClick={() => setAddCert(true)}>Add new</button>
          </div>
          {certification?.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
          {addCert && (
            <Form onFinish={handleAddNewCert}>
              <Form.Item name={"newCert"}>
                <Input placeholder="Add Certification" />
              </Form.Item>
              <div>
                <Button onClick={() => setAddCert(false)}>Cancel</Button>
                <Button htmlType="submit" type="primary">
                  Add
                </Button>
              </div>
            </Form>
          )}
        </div>
      </div>
      <Modal
        title="C???p nh???t t??i kho???n"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick={handleOk}>
            C???p nh???t
          </Button>,
        ]}
      >
        <div>
          <Form
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            name="basic"
            // onFinish={onFinish}
            className={s.form}
            form={form}
          >
            <Form.Item label="ID" name="id" hidden>
              <Input disabled />
            </Form.Item>
            <Form.Item
              label="T??i kho???n"
              name="name"
              rules={[
                {
                  required: true,
                  message: "Vui l??ng nh???p t??i kho???n!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item label="Ng??y sinh" name="birthday">
              <Input />
            </Form.Item>
            <Form.Item name="role" hidden>
              <Input />
            </Form.Item>
            <Form.Item label="Gi???i t??nh" name="gender">
              <Select allowClear>
                <Option value={true}>Male</Option>
                <Option value={false}>Female</Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="M???t kh???u"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Vui l??ng nh???p m???t kh???u!",
                },
                {
                  pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
                  message:
                    "M???t kh???u c?? ??t nh???t 6 k?? t???, ??t nh???t 1 ch??? v?? 1 s???!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              label="S??? ??i???n tho???i"
              name="phone"
              rules={[
                {
                  required: true,
                  message: "Vui l??ng nh???p S??? ??i???n tho???i!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Vui l??ng nh???p Email!",
                },
                {
                  pattern:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "Email kh??ng h???p l???!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            {/* <Form.Item wrapperCol={{ offset: 9, span: 16 }}>
            <Button type="primary" htmlType="submit" className={s.button}>
              C???p nh???t
            </Button>
          </Form.Item> */}
          </Form>
        </div>
      </Modal>
    </div>
  );
};

export default CardProfile;
