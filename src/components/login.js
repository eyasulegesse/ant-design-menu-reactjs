import { Form, Input, Button, message, Alert } from 'antd';
import { UserAddOutlined, LockOutlined } from '@ant-design/icons';
import { useState } from 'react';
function Login() {
  const [isVisibleAlert, setIsVisibleAlert] = useState(false);
  const finishHandler = (e) => {
    console.log(e.username, e.password);

    setIsVisibleAlert(true);
  };
  return (
    <Form onFinish={finishHandler}>
      {isVisibleAlert && (
        <Alert
          type='info'
          message='Succesfully Login'
          description='Congragulation You are Succesfuly Login'
          closable={true}
        />
      )}
      <Form.Item name='username'>
        <Input
          placeholder='Username'
          style={{ width: '300px' }}
          prefix={<UserAddOutlined />}
          required
        ></Input>
      </Form.Item>
      <Form.Item name='password'>
        <Input.Password
          placeholder='Password'
          block
          prefix={<UserAddOutlined />}
          required
        ></Input.Password>
      </Form.Item>
      <Form.Item>
        <Button type='primary' icon={<LockOutlined />} block htmlType='submit'>
          Login{' '}
        </Button>
      </Form.Item>
    </Form>
  );
}

export default Login;
