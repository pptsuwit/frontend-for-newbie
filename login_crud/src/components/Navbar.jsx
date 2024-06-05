"use client";
import { useGlobalContext } from "@/contexts/store";
import { AiOutlineMenu, AiOutlinePicture } from "react-icons/ai";
import defaultImage from "@/assets/avatar.jpg";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { authService } from "@/services/auth.service";
const Navbar = () => {
  const { title, drawer, setDrawer, setDialog, dialog } = useGlobalContext();
  const [menu, setMenu] = useState(false);

  const [user, setUser] = useState({
    email: "",
    name: "",
    image: defaultImage.src,
  });

  const defaultDialog = {
    show: false,
    title: "Are you sure ?",
    message: "Are you sure you want to sign out?",
    iconType: "warning",
    confirm: signOut,
    cancle: () => {
      setDialog((prev) => ({
        ...prev,
        show: false,
      }));
    },
  };
  useEffect(() => {
    setDialog(defaultDialog);

    const userAcc = JSON.parse(localStorage.getItem("user"));
    if (userAcc) {
      const name = `${userAcc.firstName} ${userAcc.lastName}`;
      const email = userAcc.username;
      const image = userAcc.assetFile || defaultImage.src;
      setUser({ name, email, image });
    }
  }, []);

  const menuList = [{ name: "Home", link: "/" }];
  const liMenuList = menuList.map((item, index) => {
    return (
      <li key={index}>
        <Link
          onClick={() => setMenu(false)}
          href={item.link}
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          {item.name}
        </Link>
      </li>
    );
  });

  function signOut(status) {
    if (!status) return;
    dialog.cancle();
    authService.logout();
  }

  return (
    <>
      <nav className="bg-white border-gray-200 shadow-md h-16 z-0">
        <div className="flex items-center py-2">
          {/* Title */}
          <div className="flex xs:w-[calc(100%-4rem)] sm:w-[calc(100%-10rem)] px-2 xs:justify-start sm:justify-start">
            <button
              onClick={() => setDrawer(!drawer)}
              type="button"
              className="inline-flex items-center justify-center p-2 w-10 h-12 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none mr-5"
            >
              <span className="sr-only">Open main menu</span>
              <AiOutlineMenu fontSize={40} />
            </button>
            <span className="xs:text-3xl xs:pt-1.5 sm:pt-0.5 sm:text-4xl text-gray-600 font-bold whitespace-nowrap">
              {title}
            </span>
          </div>
          {/* Avatar Menu */}
          <div className="flex items-center ">
            <button
              type="button"
              className="flex text-sm rounded-full ring-2 ring-blue-500"
              onClick={() => setMenu(!menu)}
            >
              <span className="sr-only">Open menu</span>
              <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full ">
                <Image
                  unoptimized={true}
                  priority={true}
                  loader={() => user.image}
                  src={user.image}
                  fill={true}
                  alt="avatar"
                />
              </div>
            </button>
            <button
              onClick={() => setMenu(!menu)}
              className="text-blue-500 px-2 whitespace-nowrap"
            >
              {user.name}
            </button>
            {/* <!-- Dropdown menu --> */}
            {menu && (
              <div className="absolute z-50 top-11 right-5 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow">
                <div className="px-4 py-3 ">
                  <span className="block text-sm text-blue-500 font-bold">
                    {user.name}
                  </span>
                  <span className="block text-sm  text-gray-500 truncate font-bold">
                    {user.email}
                  </span>
                </div>
                <ul className="py-2" aria-labelledby="user-menu-button">
                  {liMenuList}
                  <li>
                    <a
                      onClick={() =>
                        setDialog(() => ({
                          ...defaultDialog,
                          show: true,
                        }))
                      }
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
