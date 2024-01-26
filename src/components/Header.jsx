import { Layout, Flex, Space, Switch } from "antd";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useState } from "react";

function Header() {
  const { Header } = Layout;

  const headerStyle = {
    display: "flex",
    position: "absolute",
    alignItems: "center",
    textAlign: "center",
    color: "#fff",
    justifyContent: "flex-start",
    fontSize: "20px",
    height: 64,
    paddingInline: 48,
    lineHeight: "64px",
    width: "100%",
    backgroundColor: "#0e233d",
    borderBottom: "2px solid black",
  };
  const textStyle = {
    marginLeft: 100,
    flex: 1,
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  };

  const [darkTheme, setDarkTheme] = useState(true);

  const onChange = (checked) => {
    setDarkTheme(checked);
    document.body.style.backgroundColor = checked ? "rgb(52, 65, 104)" : "lightgray";
    console.log(`switch to ${checked}`);
  };

  return (
    <Flex gap="middle" wrap="wrap">
      <Layout>
        <Header style={headerStyle}>
          <Avatar size={60} icon={<UserOutlined />} className="user" />
          <div style={textStyle}>Creator Dashboard</div>
          <Space>
            <Switch
              className="switch-container"
              checkedChildren="Dark"
              unCheckedChildren="Light"
              defaultChecked
              onChange={onChange}
            />
          </Space>
        </Header>
      </Layout>
    </Flex>
  );
}

export default Header;
