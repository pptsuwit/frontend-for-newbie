"use client";

import { useGlobalContext } from "@/contexts/store";
import Table from "@/components/Table";
import { useEffect, useState } from "react";
import { service as customerServices } from "@/services/customer.service";
import { Pagination } from "antd";

const header = [
  { title: "id", name: "id", align: "center" },
  { title: "Customer ID", name: "customerId", align: "left" },
  { title: "Full Name", name: "fullName", align: "left" },
  { title: "Email", name: "email", align: "left" },
  { title: "Telephone", name: "phone", align: "left" },
  { title: "Address", name: "address", align: "left" },
];

export default function page() {
  const { setTitle } = useGlobalContext();
  const [dataTable, setDataTable] = useState([]);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    recordPerPage: 10,
    totalPage: 10,
    totalRecord: 0,
  });
  useEffect(() => {
    setTitle("Customer Management");
    getData();
  }, []);

  const getData = async (
    page = {
      currentPage: pagination.currentPage,
      recordPerPage: pagination.recordPerPage,
    }
  ) => {
    try {
      await customerServices.gets(page).then((entity) => {
        const { data, pagination } = entity;
        const item = data.map((item) => {
          const data = {
            id: item.id,
            customerId: item.customerId,
            fullName: item.firstName + " " + item.lastName,
            email: item.email,
            phone: item.phone,
            address: item.address,
          };
          return data;
        });
        setDataTable(item);
        setPagination(pagination);
      });
    } catch (error) {
      messageApi.open({
        type: "error",
        content: error,
      });
    }
  };
  const deleteData = async (id) => {
    try {
      await toast.promise(customerServices.delete(id), {
        pending: "Waiting...",
        success: "Delete data successfully",
      });
      getData();
    } catch (error) {
      toast.error(error, {
        autoClose: 3000,
      });
    }
  };
  const changePage = (page) => {
    getData({
      currentPage: page,
      recordPerPage: pagination.recordPerPage,
    });
  };
  return (
    <>
      <Table
        createBtn={true}
        path="customers"
        header={header}
        data={dataTable}
        action={{
          status: true,
          // edit: false,
          // delete: false,
        }}
        onDelete={deleteData}
      />
      <div className="w-full my-8 flex justify-center">
        <Pagination
          defaultCurrent={pagination.currentPage}
          total={pagination.totalPage * 10}
          onChange={changePage}
        />
      </div>
    </>
  );
}
