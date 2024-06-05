"use client";
import { useGlobalContext } from "@/contexts/store";
import {
  AiOutlineClose,
  AiFillExclamationCircle,
  AiFillMinusCircle,
} from "react-icons/ai";

export default function Dialog() {
  const { dialog } = useGlobalContext();
  return (
    <>
      {dialog.show && (
        <div className="z-50 w-full h-full flex justify-center items-center overflow-y-auto overflow-x-hidden fixed bottom-[calc(100%-80%)]">
          <div className="relative p-4 w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-lg shadow-2xl shadow-slate-400">
              <button
                onClick={dialog.cancle}
                type="button"
                className="absolute top-2 end-2.5 text-gray-400 hover:bg-gray-100 hover:text-gray-800   
                text-sm w-8 h-8 ms-auto inline-flex justify-center items-center  rounded-full"
                data-modal-hide="popup-modal"
              >
                <AiOutlineClose fontSize={20} />
                <span className="sr-only">Close modal</span>
              </button>
              <div className="p-4 md:p-5 text-center">
                {dialog.iconType === "warning" && (
                  <AiFillExclamationCircle
                    className="mx-auto mb-4 text-yellow-500"
                    fontSize={80}
                  />
                )}
                {dialog.iconType === "error" && (
                  <AiFillMinusCircle
                    className="mx-auto mb-4 text-red-500"
                    fontSize={80}
                  />
                )}
                <h1 className="mb-5 text-3xl font-bold">{dialog.title}</h1>
                <h3 className="mb-5 text-lg font-normal ">{dialog.message}</h3>
                <button
                  onClick={() => dialog.confirm(true)}
                  data-modal-hide="popup-modal"
                  type="button"
                  className="text-white bg-blue-500 hover:bg-blue-600  font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center me-2"
                >
                  Confirm
                </button>
                <button
                  onClick={dialog.cancle}
                  data-modal-hide="popup-modal"
                  type="button"
                  className="text-gray-50 bg-gray-500 hover:bg-gray-600 hover:text-white rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 focus:z-10  "
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
