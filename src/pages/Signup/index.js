import React from 'react';
import s from "./Signup.module.scss";
import AuthenWith from "components/AuthenWith";
import BgAuthen from "images/bgAuthen.jpg";
import { Button, Checkbox, Form, Input } from "antd";

const Signup = () => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  return (
    <div className={s.authen} style={{backgroundImage: `url(${BgAuthen})`}}>
      <div className={s.overlay}></div>
      <div className={s.content}>
        <h1>Join Fiverr</h1>
        <AuthenWith />
        <div className={s.form}>
        <Form
          labelCol={{ span: 0 }}
          wrapperCol={{ span: 24 }}
          name="basic"
          onFinish={onFinish}
        >
          <Form.Item
            name="taiKhoan"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập tài khoản!",
              },
            ]}
          >
            <Input  placeholder="Enter username"/>
          </Form.Item>

          <Form.Item
            name="matKhau"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập mật khẩu!",
              },
              {
                pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
                message: "Mật khẩu có ít nhất 6 ký tự, ít nhất 1 chữ và 1 số!",
              },
            ]}
          >
            <Input.Password  placeholder="Enter password"/>
          </Form.Item>

          <Form.Item
            name="nhapLaiMatKhau"
            dependencies={["matKhau"]}
            rules={[
              {
                required: true,
                message: "Vui lòng nhập lại mật khẩu!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("matKhau") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error("Mật khẩu không khớp !"));
                },
              }),
            ]}
          >
            <Input.Password  placeholder="Confirm password"/>
          </Form.Item>

          <Form.Item
            name="hoTen"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập Họ tên!",
              },
            ]}
          >
            <Input  placeholder="Enter fullname"/>
          </Form.Item>
          <Form.Item
            name="soDt"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập Số điện thoại!",
              },
            ]}
          >
            <Input  placeholder="Enter phone number"/>
          </Form.Item>

          <Form.Item
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
            <Input  placeholder="Enter email"/>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 0, span: 24 }}>
            <Button type="primary" htmlType="submit" className={s.continue}>
              Join now
            </Button>
          </Form.Item>
        </Form>
        </div>
        <p className={s.agree}>By joining I agree to receive emails from Fiverr.</p>
        <div className={s.footer}>
          <p>Already a member? <a href='#home'>Sign In</a></p>
        </div>
      </div>
    </div>
  )
}

export default Signup