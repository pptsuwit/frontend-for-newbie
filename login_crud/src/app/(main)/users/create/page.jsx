"use client";

import UserForm from "@/components/UserForm";
import { useGlobalContext } from "@/contexts/store";
import { useEffect } from "react";

import { schema } from "@/zodSchema/userSchema";

import { service } from "@/services/user.service";
import { message } from "antd";
export default function page() {
  const { setTitle } = useGlobalContext();
  const [messageApi, contextHolder] = message.useMessage();
  useEffect(() => {
    setTitle("Create User");
  }, []);

  async function onSubmit(data) {
    try {
      service.create(data).then(() => {
        messageApi.open({
          type: "success",
          content: "user was created.",
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
      <UserForm schema={schema} onSubmit={onSubmit}></UserForm>
    </>
  );
}
