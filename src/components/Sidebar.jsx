// import "antd/dist/antd.css";
import { Input, Menu, Space } from "antd";
import { Switch } from "antd";
import {
  HomeFilled,
  UserOutlined,
  CloseOutlined,
  UserDeleteOutlined,
  ToolOutlined,
  UserSwitchOutlined,
  DashboardOutlined,
  EyeOutlined,
  ArrowUpOutlined,
  BlockOutlined,
  PayCircleOutlined,
  RedEnvelopeOutlined,
} from "@ant-design/icons/lib/icons";

function Sidebar() {
  
  return (
    <Space>
      <Menu
        className="menu"
        mode="inline"
        defaultOpenKeys={["dashboard"]}
        theme="dark"
        items={[
          {
            label: <Input.Search placeholder="Search..."></Input.Search>,
            key: "search",
          },
          { label: "Home", key: "home", icon: <HomeFilled></HomeFilled> },
          {
            label: "Followers",
            key: "followers",
            icon: <EyeOutlined></EyeOutlined>,
          },
          {
            label: "Dashboard",
            key: "dashboard",
            icon: <DashboardOutlined></DashboardOutlined>,
            children: [
              {
                label: "Followers Gained",
                key: "fg",
                icon: <ArrowUpOutlined></ArrowUpOutlined>,
              },
              {
                label: "Following",
                key: "fl",
                icon: <BlockOutlined></BlockOutlined>,
              },
            ],
          },
          {
            label: "User",
            key: "user",
            type: "group",
            icon: <UserOutlined></UserOutlined>,
            children: [
              {
                label: "Edit Profile",
                key: "edp",
                icon: <ToolOutlined></ToolOutlined>,
              },
              {
                label: "Switch Profile",
                key: "sw",
                icon: <UserSwitchOutlined></UserSwitchOutlined>,
              },
              {
                label: "Delete Profile",
                key: "del",
                icon: <UserDeleteOutlined></UserDeleteOutlined>,
              },
            ],
          },
          {
            label: "Creators' Tools",
            key: "tools",
            icon: <ToolOutlined></ToolOutlined>,
          },
          {
            label: "Payments",
            key: "pay",
            type: "group",
            children: [
              {
                label: "My Payments",
                key: "mypay",
                icon: <PayCircleOutlined></PayCircleOutlined>,
              },
              {
                label: "Billing Info",
                key: "bill",
                icon: <RedEnvelopeOutlined></RedEnvelopeOutlined>,
              },
              {
                label: "Receipts",
                key: "rec",
                icon: <></>,
              },
            ],
          },
          {
            label: "Sign Out",
            key: "exit",
            danger: true,
            icon: <CloseOutlined></CloseOutlined>,
          },
        ]}
      ></Menu>
     
    </Space>
  );
}
export default Sidebar;
