"use client";
import React, { useState } from "react";
import { Button, Drawer } from "antd";
import { FaSquare } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <div className="h-12 w-full fixed top-0 left-0 right-0 z-50  flex justify-between items-center bg-white border shadow-sm">
      <div className="min-w-36 text-center xs:hidden sm:hidden md:block ">
        <Button type="link" icon={<FaSquare />} className="!text-black">
          photo
        </Button>
      </div>

      <div className="flex items-start space-x-4 px-2  w-full">
        <Button
          type="text"
          onClick={showDrawer}
          className="!hidden xs:!block sm:!block md:!hidden"
          icon={<RxHamburgerMenu />}
        ></Button>
        <Drawer
          className="hidden xs:block sm:block"
          placement={"left"}
          closable={false}
          onClose={onClose}
          open={open}
          key={"left"}
        >
          <div className="py-2">
            <a href="#" className="text-blue-400 hover:text-blue-800">
              Features
            </a>
          </div>
          <div className="py-2">
            <a href="#" className="text-blue-400 hover:text-blue-800">
              Pricing
            </a>
          </div>
          <div className="py-2">
            <a href="#" className="text-blue-400 hover:text-blue-800">
              Community
            </a>
          </div>
          <div className="py-2">
            <a href="#" className="text-blue-400 hover:text-blue-800">
              Support
            </a>
          </div>
        </Drawer>
        <div className="flex gap-x-3  xs:hidden sm:hidden md:flex">
          <a href="#" className="text-blue-400 text-sm hover:text-blue-800">
            Features
          </a>
          <a href="#" className="text-blue-400 text-sm hover:text-blue-800">
            Pricing
          </a>
          <a href="#" className="text-blue-400 text-sm hover:text-blue-800">
            Community
          </a>
          <a href="#" className="text-blue-400 text-sm hover:text-blue-800">
            Support
          </a>
        </div>
        <div className="xs:block sm:block md:hidden">
          <Button type="link" icon={<FaSquare />} className="!text-black">
            photo
          </Button>
        </div>
      </div>
      <div className=" min-w-52 flex justify-center items-center space-x-3 px-2">
        <div>
          <button
            type="button"
            class="text-blue-400 bg-white hover:text-blue-500 border  border-blue-400   font-medium rounded-md text-sm px-4 py-1 "
          >
            Log in
          </button>
        </div>
        <div>
          <button
            type="button"
            class="text-white bg-blue-500 hover:bg-blue-600 font-medium rounded-md text-sm px-4 py-1 "
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
}
