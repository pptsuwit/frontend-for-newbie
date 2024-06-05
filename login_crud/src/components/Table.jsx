import React from "react";
import { Table } from "antd";

export default function MyTable(props) {
  return (
    <Table
      className="p-4"
      columns={props.columns}
      dataSource={props.data}
      pagination={{
        position: ["none"],
      }}
    />
  );
}
