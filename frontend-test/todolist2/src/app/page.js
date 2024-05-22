"use client";
import AddItem from "@/components/AddItem";
import ListItem from "@/components/ListItem";
import Modal from "@/components/Modal";
import DialogModal from "@/components/DialogModal";
import { useState } from "react";
import { message } from "antd";
export default function Home() {
  const [messageApi, contextHolder] = message.useMessage();

  const [list, setList] = useState([]);
  const [modal, setModal] = useState({
    index: null,
    showModal: false,
    title: "Edit",
    value: "",
    cancleModal: () => {
      setModal({ ...modal, showModal: false });
    },
  });
  const [deleteModal, setDeleteModal] = useState({
    index: null,
    showModal: false,
    title: "Confirm Delete this list ?",
    value: "Are you sure you want to delete this list.",
    cancleModal: () => {
      setDeleteModal({ ...deleteModal, showModal: false });
    },
  });

  const addItem = (value) => {
    setList(() => [...list, { name: value }]);
  };
  const editItem = (index) => {
    setModal({
      ...modal,
      showModal: true,
      value: list[index].name,
      index: index,
    });
  };
  function updateItem(index, value) {
    let editList = [...list];
    editList[index].name = value;
    setList(editList);
    messageApi.open({
      type: "success",
      content: "Your changes have been successfully saved.",
    });
  }
  const deleteItem = (index) => {
    setDeleteModal({
      ...deleteModal,
      showModal: true,
      index: index,
    });
  };
  const confirmDeleteItem = (index) => {
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
    messageApi.open({
      type: "success",
      content: "Your list was sucessfully deleted.",
    });
  };
  return (
    <>
      {contextHolder}
      <Modal {...modal} updateItem={updateItem} />
      <DialogModal {...deleteModal} confirmDeleteItem={confirmDeleteItem} />
      <div className="flex justify-center pt-12 font-bold text-3xl">
        TODO LIST
      </div>
      <AddItem addItem={addItem} />
      <ListItem editItem={editItem} deleteItem={deleteItem} items={list} />
    </>
  );
}
