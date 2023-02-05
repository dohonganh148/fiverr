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
        title="Cập nhật tài khoản"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick={handleOk}>
            Cập nhật
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
              label="Tài khoản"
              name="name"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập tài khoản!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item label="Ngày sinh" name="birthday">
              <Input />
            </Form.Item>
            <Form.Item name="role" hidden>
              <Input />
            </Form.Item>
            <Form.Item label="Giới tính" name="gender">
              <Select allowClear>
                <Option value={true}>Male</Option>
                <Option value={false}>Female</Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="Mật khẩu"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập mật khẩu!",
                },
                {
                  pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
                  message:
                    "Mật khẩu có ít nhất 6 ký tự, ít nhất 1 chữ và 1 số!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              label="Số điện thoại"
              name="phone"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập Số điện thoại!",
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
                  message: "Vui lòng nhập Email!",
                },
                {
                  pattern:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "Email không hợp lệ!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            {/* <Form.Item wrapperCol={{ offset: 9, span: 16 }}>
            <Button type="primary" htmlType="submit" className={s.button}>
              Cập nhật
            </Button>
          </Form.Item> */}
          </Form>
        </div>
      </Modal>
    </div>
  );
};

export default CardProfile;
