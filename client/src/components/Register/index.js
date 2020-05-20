import React, { useState } from "react";
import { Form, Input, Button, message, Alert } from "antd";
import { withRouter } from "react-router-dom";
import GoogleAuthentication from "../GoogleLogin";
import Axios from "axios";

const RegisterComponent = withRouter((props) => {
  const [error, seError] = useState();

  const onFinish = (values) => {
    Axios.post("/api/posts/register", values)
      .then(({ data: { msg } }) => {
        message.success(msg);
        props.history.push("/");
      })
      .catch((res) => {
        seError("Email is exists or an error occur while you are registering");
      });
  };

  return (
    <div>
      <h2>Register</h2>
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        className="form-con"
      >
        <Form.Item
          label="Username"
          name="name"
          rules={[{ required: true, message: "Please enter your username" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="email"
          name="email"
          rules={[
            {
              type: "email",
              required: true,
              message: "Please enter your email!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please enter your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="btn">
            Submit
          </Button>
          <GoogleAuthentication />
        </Form.Item>
        {error && <Alert type="error" message={error} />}
      </Form>
    </div>
  );
});

export default RegisterComponent;
