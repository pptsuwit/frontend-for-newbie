"use client";

import { useGlobalContext } from "@/contexts/store";
import Table from "@/components/Table";
import { useEffect, useState } from "react";
import { service as userServices } from "@/services/user.service";
import { Button, Pagination, message } from "antd";
import defaultImage from "@/assets/avatar.jpg";
import Image from "next/image";
import { FaRegEdit, FaTrash } from "react-icons/fa";
export default function page() {
  const [messageApi, contextHolder] = message.useMessage();
  const { setTitle, setDialogDelete, dialogDelete } = useGlobalContext();
  const [dataTable, setDataTable] = useState([]);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    recordPerPage: 10,
    totalPage: 10,
    totalRecord: 0,
  });
  useEffect(() => {
    setTitle("User Management");
    getData();
  }, []);

  const defaultDialog = {
    deleteId: "",
    show: false,
    title: "Are you sure ?",
    message: "Are you sure you want to delete this user?",
    iconType: "warning",
    confirm: removeUser,
    cancle: () => {
      setDialogDelete((prev) => ({
        ...prev,
        show: false,
      }));
    },
  };

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
      align: "center",
    },
    {
      title: "Avatar",
      dataIndex: "avatar",
      key: "avatar",
      render: (_, { avatar }) => (
        <div className="w-full flex justify-center">
          <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full">
            <Image
              unoptimized={true}
              priority={true}
              loader={() => avatar || defaultImage}
              src={avatar || defaultImage}
              fill={true}
              alt="avatar"
            />
          </div>
        </div>
      ),
      align: "center",
    },
    {
      title: "Full Name",
      dataIndex: "fullName",
      key: "fullName",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Action",
      key: "action",
      render: (_, data) => (
        <div className="flex gap-2 justify-center">
          <Button
            type="primary"
            href={`users/edit/${data.id}`}
            icon={<FaRegEdit size={14} className="" />}
          >
            Edit
          </Button>
          <Button
            type="primary"
            danger
            icon={<FaTrash size={12} />}
            onClick={() =>
              setDialogDelete(() => ({
                ...defaultDialog,
                show: true,
                deleteId: data.id,
              }))
            }
          >
            Delete
          </Button>
        </div>
      ),
      align: "center",
      width: "280px",
    },
  ];

  const getData = async (
    page = {
      currentPage: pagination.currentPage,
      recordPerPage: pagination.recordPerPage,
    }
  ) => {
    try {
      await userServices.gets(page).then((resp) => {
        const { data, pagination } = resp;
        const user = data.map((item) => {
          const data = {
            key: item.id,
            id: item.id,
            avatar: item.assetFile,
            fullName: item.firstName + " " + item.lastName,
            email: item.username,
          };

          return data;
        });
        setDataTable(user);
        setPagination(pagination);
      });
    } catch (error) {
      messageApi.open({
        type: "error",
        content: error,
      });
    }
  };
  async function removeUser(id) {
    try {
      await userServices.delete(id);
      await getData();
      dialogDelete.cancle();
      messageApi.open({
        type: "success",
        content: "user was deleted.",
      });
    } catch (error) {
      messageApi.open({
        type: "error",
        content: error,
      });
    }
  }
  const changePage = (page) => {
    getData({
      currentPage: page,
      recordPerPage: pagination.recordPerPage,
    });
  };

  return (
    <>
      {contextHolder}
      <div className="w-full flex justify-end px-4">
        <Button type="primary" className="!bg-emerald-400" href="users/create">
          Add
        </Button>
      </div>
      <Table columns={columns} data={dataTable} />
      <Pagination
        className="text-center !my-4"
        current={pagination.currentPage}
        total={pagination.totalPage * 10}
        onChange={changePage}
        showSizeChanger={false}
      />
    </>
  );
}
