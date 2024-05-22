"use client";

import { useGlobalContext } from "@/contexts/store";
import { useEffect } from "react";

import { schema } from "@/zodSchema/customerSchema";

import { service } from "@/services/customer.service";
import CustomerForm from "@/components/backoffice/customers/CustomerForm";
const returnWhenSuccess = "/backoffice/customers";
export default function page() {
  const { setTitle } = useGlobalContext();
  useEffect(() => {
    setTitle("Create Customer");
  }, []);

  async function onSubmit(data) {
    try {
      // await toast.promise(service.create(data), {
      //   pending: "Loading...",
      //   success: {
      //     render() {
      //       toast.info(`Redirecting to customers`, {
      //         autoClose: 3000,
      //         onClose: () => (window.location.href = returnWhenSuccess),
      //       });
      //       return "Create data successful";
      //     },
      //   },
      // });
    } catch (error) {
      // toast.error(error, {
      //   autoClose: 3000,
      // });
    }
  }
  return (
    <CustomerForm
      path="customers"
      schema={schema}
      onSubmit={onSubmit}
    ></CustomerForm>
  );
}
