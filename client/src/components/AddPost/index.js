import React, { useState } from "react";
import { Form, Input, Button, message, Alert } from "antd";
import { withRouter } from "react-router-dom";
import GoogleAuthentication from "../GoogleLogin";
import Axios from "axios";
import "./index.css";

const Post = withRouter((props) => {
  const [error, setError] = useState();

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  const onFinish = (values) => {
    console.log(values);
    Axios.post("/api/v/post", values)
      .then(({ data }) => {
        message.success(data.msg);
        props.history.push("/");
      })
      .catch((res) => {
        console.log(res);
        setError("Error occur while you are adding the post");
      });
  };

  return (
    <div className="post-container">
      <h2>Add New Post</h2>
      <Form
        {...layout}
        name="basic"
        onFinish={onFinish}
        initialValues={{ remember: true }}
        className="form-con"
      >
        <Form.Item
          label="title"
          name="title"
          rules={[{ required: true, message: "Please input blog title!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="description"
          name="description"
          rules={[
            { required: true, message: "Please input blog description!" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="img url"
          name="img"
          rules={[
            { required: true, message: "Please input blog img address!" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item {...tailLayout}>
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

export default Post;
