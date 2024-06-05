"use client";
import { createContext, useContext, useState } from "react";

export const GlobalContext = createContext({
  loading: false,
  setLoading: () => false,
  drawer: false,
  setDrawer: () => false,
  title: "",
  setTitle: () => "",

  dialog: {
    show: false,
    title: "",
    message: "",
    iconType: "",
    confirm: () => {},
    cancle: () => {},
  },
  setDialog: () => ({
    show: false,
    title: "",
    message: "",
    iconType: "",
    confirm: () => {},
    cancle: () => {},
  }),
  dialogDelete: {
    show: false,
    title: "",
    message: "",
    iconType: "",
    confirm: () => {},
    cancle: () => {},
    deleteId: "",
  },
  setDialogDelete: () => ({
    show: false,
    title: "",
    message: "",
    iconType: "",
    confirm: () => {},
    cancle: () => {},
    deleteId: "",
  }),
});

export const GlobalContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const [title, setTitle] = useState("");
  const [dialog, setDialog] = useState({
    show: false,
    title: "",
    message: "",
    iconType: "warning",
    confirm: () => {},
    cancle: () => {
      setDialog((prev) => ({
        ...prev,
        show: false,
      }));
    },
  });
  const [dialogDelete, setDialogDelete] = useState({
    deleteId: "",
    show: false,
    title: "",
    message: "",
    iconType: "warning",
    confirm: () => {},
    cancle: () => {
      setDialogDelete((prev) => ({
        ...prev,
        show: false,
      }));
    },
  });
  return (
    <GlobalContext.Provider
      value={{
        dialog,
        setDialog,
        dialogDelete,
        setDialogDelete,

        loading,
        setLoading,

        drawer,
        setDrawer,
        title,
        setTitle,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
