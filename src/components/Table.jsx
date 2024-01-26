import { Table } from "antd";

function TableUser() {
  const dataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "June 2023",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "March 2023",
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Following Since",
      dataIndex: "address",
      key: "address",
    },
  ];
  return <Table className="table" dataSource={dataSource} columns={columns} />;
}

export default TableUser;
