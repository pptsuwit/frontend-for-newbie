"use client";

import { useGlobalContext } from "@/contexts/store";
import Link from "next/link";
import { useState } from "react";

import {
  AiOutlineClose,
  AiOutlineDown,
  AiOutlinePicture,
} from "react-icons/ai";
import { PiUserCircleFill } from "react-icons/pi";
export default function Drawer() {
  const { drawer, setDrawer } = useGlobalContext();
  const iconSize = { fontSize: 25 };
  const [menu, setMenu] = useState([
    {
      name: "User Management",
      icon: <PiUserCircleFill {...iconSize} />,
      link: "/users",
    },
  ]);
  const uiMenu = (
    <ul className="space-y-2 font-medium">
      {menu.map((item, index) => {
        let result;
        if (item.subMenu) {
          result = (
            <li key={index}>
              <button
                onClick={() => toggleSubmenu(item)}
                className="flex items-center w-full xs:px-8 sm:px-2 p-2 text-base text-gray-900 rounded-lg group hover:bg-gray-100 transition duration-75 ease-in-out"
              >
                {item.icon}
                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap overflow-x-hidden text-ellipsis">
                  {item.name}
                </span>
                <AiOutlineDown fontSize={15} />
              </button>
              {item.active && (
                <ul className="py-2 space-y-2">
                  {item.subMenu.map((subMenu, subIndex) => {
                    return (
                      <li key={subIndex}>
                        <Link
                          href={subMenu.link}
                          className="flex items-center w-full p-2 xs:pl-24 sm:pl-11 text-gray-900 transition duration-75 ease-in-out rounded-lg  group hover:bg-gray-100"
                        >
                          {subMenu.icon}
                          <span className="ms-3 whitespace-nowrap overflow-x-hidden text-ellipsis">
                            {subMenu.name}
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
          );
        } else {
          result = (
            <li key={index}>
              <Link
                href={item.link}
                className="flex items-center xs:px-8 sm:px-2 p-2 text-gray-900 rounded-lg hover:bg-gray-100 group "
              >
                {item.icon}
                <span className="ms-3 whitespace-nowrap overflow-x-hidden text-ellipsis">
                  {item.name}
                </span>
              </Link>
            </li>
          );
        }
        return result;
      })}
    </ul>
  );

  function toggleSubmenu(target) {
    setMenu(
      menu.map((item) => {
        if (item.name === target.name) {
          return {
            ...item,
            active: !item.active,
          };
        } else {
          return item;
        }
      })
    );
  }
  return (
    <>
      <aside
        id="drawer-navigation"
        className={`min-h-[calc(100svh-4rem)] bg-white xs:w-screen sm:w-full min-w-72 sm:max-w-72 shadow-md transition-transform overflow-y-auto z-40
         ${drawer ? "xs:fixed md:static h-full" : "fixed -translate-x-full"} 
         `}
      >
        <div className="flex justify-between items-start pr-8 p-4 h-16 bg-[#232E3E]">
          <div>
            <AiOutlinePicture fontSize={34} className="text-white" />
          </div>

          <div>
            <span className="text-center text-2xl text-white font-semibold whitespace-nowrap  ">
              Dev Team
            </span>
          </div>
          <div>
            <button
              onClick={() => setDrawer(!drawer)}
              type="button"
              data-drawer-hide={"drawer-navigation"}
              aria-controls="drawer-navigation"
              className="text-gray-400 bg-transparent hover:text-white rounded-full text-sm w-8 h-8 absolute inline-flex items-center justify-center"
            >
              <AiOutlineClose {...iconSize} />
              <span className="sr-only">Close menu</span>
            </button>
          </div>
        </div>
        <div className="p-4 overflow-y-auto">{uiMenu}</div>
      </aside>
    </>
  );
}
