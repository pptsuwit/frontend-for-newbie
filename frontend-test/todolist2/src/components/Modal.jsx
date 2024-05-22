"use client";
import { Modal, Input } from "antd";
import { useEffect, useState } from "react";

export default function CustomModal(props) {
  const [item, setItem] = useState();
  const handleOk = () => {
    props.updateItem(props.id || props.index, item);
    props.cancleModal();
  };
  useEffect(() => {
    setItem(props.value);
  }, [props]);

  return (
    <>
      <Modal
        // title={props.title}
        open={props.showModal}
        onOk={handleOk}
        onCancel={props.cancleModal}
      >
        <div className="flex justify-center text-3xl py-3 font-semibold">
          {props.title}
        </div>
        <Input
          size="large"
          onChange={(e) => setItem(e.target.value)}
          value={item}
        />
      </Modal>
    </>
  );
}
