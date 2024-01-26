import { ClockCircleOutlined } from "@ant-design/icons";
import { Avatar, Badge, Space } from "antd";

function Interactions() {
  return (
    <Space size="middle" className="badge">
      <Badge count={5} >
        <Avatar shape="circle" size="medium" />
      </Badge>
      <Badge count={0} showZero >
        <Avatar shape="circle" size="medium" />
      </Badge>
      <Badge 
        count={
          <ClockCircleOutlined
            style={{
              color: "#f5222d",
            }}
          />
        }
      >
        <Avatar shape="circle" size="medium" />
      </Badge>
    </Space>
  );
}

export default Interactions;
