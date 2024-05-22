"use client";
import AddItem from "@/components/AddItem";
import DeleteModal from "@/components/DeleteModal";
import EditModal from "@/components/EditModal";
import ListItem from "@/components/ListItem";
import { useEffect, useState } from "react";

import { message } from "antd";
import axios from "axios";
export default function Home() {
  const [messageApi, contextHolder] = message.useMessage();
  const [list, setList] = useState([]);

  async function getTodo() {
    try {
      axios.get(`${process.env.NEXT_PUBLIC_API_URL}`).then((res) => {
        const data = res.data;
        setList(data);
      });
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getTodo();
  }, []);

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
      await axios
        .post(`${process.env.NEXT_PUBLIC_API_URL}`, { name: value })
        .then(async () => {
          await getTodo();
          messageApi.open({
            type: "success",
            content: "Your list have been successfully created.",
          });
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
      axios
        .put(`${process.env.NEXT_PUBLIC_API_URL}/${id}`, { name: value })
        .then(async () => {
          await getTodo();
          messageApi.open({
            type: "success",
            content: "Your changes have been successfully saved.",
          });
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
      axios
        .delete(`${process.env.NEXT_PUBLIC_API_URL}/${id}`)
        .then(async () => {
          await getTodo();
          messageApi.open({
            type: "success",
            content: "Your list was sucessfully deleted.",
          });
        });
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <>
      {contextHolder}
      <EditModal {...modal} updateItem={updateItem} />
      <DeleteModal {...deleteModal} confirmDeleteItem={confirmDeleteItem} />
      <div className="flex justify-center pt-12 font-bold text-3xl">
        TODO LIST
      </div>
      <AddItem addItem={addItem} />
      <ListItem editItem={editItem} deleteItem={deleteItem} items={list} />
    </>
  );
}
