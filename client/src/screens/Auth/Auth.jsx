import React from 'react';
import { Button, Checkbox, Form, Input, Layout } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
const Auth = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <Layout
      style={{
        height: '100vh',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        style={{
          width: '80%'
        }}
      >
        <Form.Item name="username">
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
            allowClear={true}
            width={{ width: '100%' }}
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
            allowClear={true}
            
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
        </Form.Item>
      </Form>
    </Layout>
  );
};

export default Auth;
