"use client";

import { useGlobalContext } from "@/contexts/store";
import { useEffect, useState } from "react";

import { schema } from "@/zodSchema/customerSchema";
// import { toast } from "react-toastify";

import { service } from "@/services/customer.service";
import CustomerForm from "@/components/backoffice/customers/CustomerForm";
export default function page({ params }) {
  const [data, setData] = useState();
  const { setTitle } = useGlobalContext();
  useEffect(() => {
    setTitle("Edit Customer");
    getUser(params.id);
  }, []);
  async function getUser(id) {
    try {
      service.getById(id).then(async (response) => {
        const { data } = response;
        setData({ ...data });
      });
    } catch (error) {
      // toast.error(error, {
      //   autoClose: 3000,
      // });
    }
  }
  async function onSubmit(data) {
    const updateData = {
      id: Number(params.id),
      ...data,
    };
    // try {
    //   await toast.promise(service.update(updateData), {
    //     pending: "Loading...",
    //     success: "Update user successful",
    //   });
    // } catch (error) {
    //   // toast.error(error, {
    //   //   autoClose: 3000,
    //   // });
    // }
  }
  return (
    <CustomerForm
      path="customers"
      schema={schema}
      onSubmit={onSubmit}
      data={data}
      type="edit"
    ></CustomerForm>
  );
}
