import React from "react";
import s from "./Login.module.scss";
import AuthenWith from "components/AuthenWith";
import BgAuthen from "images/bgAuthen.jpg";
import { Button, Checkbox, Form, Input } from "antd";

const Login = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <div className={s.authen} style={{ backgroundImage: `url(${BgAuthen})` }}>
      <div className={s.overlay}></div>
      <div className={s.content}>
        <h1>Sign In to Fiverr</h1>
        <AuthenWith />
        <div className={s.form}>
          <Form
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <Form.Item
              name="taiKhoan"
              rules={[
                {
                  required: true,
                  message: "Please input your Username!",
                },
              ]}
            >
              <Input placeholder="Username" />
            </Form.Item>
            <Form.Item
              name="matKhau"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <Input type="password" placeholder="Password" />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle style={{display: "block"}}>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
              <a className="login-form-forgot" href="#home" style={{color:"#19a463"}}>
                Forgot password
              </a>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className={s.continue}>
                <a href="#home">Continue</a>
              </Button>
            </Form.Item>
          </Form>
        </div>
        <div className={s.footer}>
          <p>
            Not a member yet? <a href="#home">Join now</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
