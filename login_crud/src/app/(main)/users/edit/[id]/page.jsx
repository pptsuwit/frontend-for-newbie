"use client";

import UserForm from "@/components/UserForm";
import { useGlobalContext } from "@/contexts/store";
import { useEffect, useState } from "react";

import { schemaEdit } from "@/zodSchema/userSchema";

import { service } from "@/services/user.service";
import { message } from "antd";
export default function page({ params }) {
  const [user, setUser] = useState();
  const { setTitle } = useGlobalContext();
  const [messageApi, contextHolder] = message.useMessage();
  useEffect(() => {
    setTitle("Edit User");
    getUser(params.id);
  }, []);
  async function getUser(id) {
    try {
      service.getById(id).then(async (response) => {
        const { data } = response;
        const userData = {
          firstName: data.firstName,
          lastName: data.lastName,
          username: data.username,
          avatar: data.assetFile,
        };
        setUser(userData);
      });
    } catch (error) {
      messageApi.open({
        type: "error",
        content: error,
      });
    }
  }
  async function onSubmit(data) {
    try {
      service.update(params.id, data).then(() => {
        messageApi.open({
          type: "success",
          content: "user was updated.",
        });
      });
    } catch (error) {
      messageApi.open({
        type: "error",
        content: error,
      });
    }
  }
  return (
    <>
      {contextHolder}
      <UserForm
        schema={schemaEdit}
        onSubmit={onSubmit}
        data={user}
        type="edit"
      ></UserForm>
    </>
  );
}
