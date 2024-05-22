"use client";
import AddItem from "@/components/AddItem";
import ListItem from "@/components/ListItem";
import Modal from "@/components/Modal";
import DialogModal from "@/components/DialogModal";
import { useState, useEffect } from "react";
import { message } from "antd";
export default function Home() {
  const [messageApi, contextHolder] = message.useMessage();
  async function getTodo() {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`);
      const data = await response.json();

      setList(data);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getTodo();
  }, []);
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

  async function addItem(value) {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`, {
        method: "POST",
        body: JSON.stringify({
          name: value,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      await response.json();
      await getTodo();
      messageApi.open({
        type: "success",
        content: "Your list have been successfully created.",
      });
    } catch (err) {
      console.log(err);
    }
  }
  const editItem = (index) => {
    setModal({
      ...modal,
      showModal: true,
      value: list[index].name,
      index: index,
      id: list[index].id,
    });
  };
  async function updateItem(id, value) {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${id}`, {
        method: "PUT",
        body: JSON.stringify({
          name: value,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      await response.json();
      await getTodo();
      messageApi.open({
        type: "success",
        content: "Your changes have been successfully saved.",
      });
    } catch (err) {
      console.log(err);
    }
  }
  const deleteItem = (index) => {
    setDeleteModal({
      ...deleteModal,
      showModal: true,
      index: index,
      id: list[index].id,
    });
  };
  async function confirmDeleteItem(id) {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${id}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      await response.json();
      await getTodo();
      messageApi.open({
        type: "success",
        content: "Your list was sucessfully deleted.",
      });
    } catch (err) {
      console.log(err);
    }
  }
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
