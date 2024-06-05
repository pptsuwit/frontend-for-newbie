"use client";
import { getModalMessage } from "@/utils/helpers";
import { createContext, useContext, useState } from "react";

export const GlobalContext = createContext({
  modal: false,
  setModal: () => false,
  modalMessage: { title: "", message: "", status: "" },
  setModalMessage: () => ({
    title: "",
    message: "",
    status: "",
  }),

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
});

export const GlobalContextProvider = ({ children }) => {
  const [modal, setModal] = useState(false);
  const [modalMessage, setModalMessage] = useState(getModalMessage());
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
  return (
    <GlobalContext.Provider
      value={{
        modal,
        setModal,
        modalMessage,
        setModalMessage,

        dialog,
        setDialog,

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
