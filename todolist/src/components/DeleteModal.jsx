"use client";
import { Modal, Button } from "antd";
import { WarningFilled } from "@ant-design/icons";
export default function DeleteModal(props) {
  const handleOk = () => {
    props.confirmDeleteItem(props.id || props.index);
    props.cancleModal();
  };

  return (
    <>
      <Modal
        open={props.showModal}
        onOk={handleOk}
        onCancel={props.cancleModal}
        footer={[
          <Button key="back" onClick={props.cancleModal}>
            Cancle
          </Button>,
          <Button key="submit" type="primary" onClick={handleOk} danger>
            Delete
          </Button>,
        ]}
      >
        <div className="flex justify-center">
          <WarningFilled className="text-[80px] !text-yellow-500" />
        </div>
        <div className="flex justify-center text-3xl py-3 font-semibold">
          {props.title}
        </div>
        <div className="flex justify-start text-xl pb-2">{props.value}</div>
      </Modal>
    </>
  );
}
