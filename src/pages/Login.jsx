import { Button, Form, Input } from "antd";
import { useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthData } from "../auth/AuthWrapper";

function Login() {
  const navigate = useNavigate();
  const { login } = AuthData();
  const [formData, setFormData] = useReducer(
    (formData, newItem) => {
      return { ...formData, ...newItem };
    },
    { userName: "", password: "" }
  );
  const [errorMessage, setErrorMessage] = useState(null);

  const doLogin = async () => {
    try {
      await login(formData.userName, formData.password);
      localStorage.setItem('userName', JSON.stringify(formData.userName))
      navigate("/private");
    } catch (error) {
      setErrorMessage(error);
    }
  };

  return (
    <Form
      className="form"
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      style={{
        maxWidth: 600,
      }}
      initialValues={{
        remember: true,
      }}
      autoComplete="off"
      onFinish={doLogin}
    >
      <Form.Item
        label="Username"
        name="userName"
        value={formData.userName}
        onChange={(e) => setFormData({ userName: e.target.value })}
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        value={formData.password}
        onChange={(e) => setFormData({ password: e.target.value })}
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        {errorMessage ? <div className="error">{errorMessage}</div> : null}
      </Form.Item>
    </Form>
  );
}

export default Login;
