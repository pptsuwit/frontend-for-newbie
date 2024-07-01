"use client";
import React from "react";
import { FaSquare } from "react-icons/fa6";
import { Button, Divider } from "antd";

import defaultImage from "@/assets/image400x400.png";
import Image from "next/image";
export default function Footer() {
  return (
    <div className="w-full min-h-[30svh] p-10">
      <div>
        <div className="grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-8 items-center ">
          <div className=" flex justify-center xs:gap-3 sm:gap-3 md:gap-3 lg:gap-12 xl:gap-24">
            <a href="#" className="text-sm font-bold  text-center">
              Mobile app
            </a>
            <a href="#" className="text-sm font-bold  text-center">
              Community
            </a>
            <a href="#" className="text-sm font-bold  text-center">
              Company
            </a>
          </div>
          <div className="">
            <a className="text-black text-3xl flex justify-center text-center ">
              <FaSquare />
              <p className="text-2xl px-2">photo</p>
            </a>
          </div>
          <div className=" flex justify-center xs:gap-3 sm:gap-3 md:gap-3 lg:gap-12 xl:gap-24">
            <a href="#" className="text-sm font-bold  text-center">
              Help desk
            </a>
            <a href="#" className="text-sm font-bold  text-center">
              Blog
            </a>
            <a href="#" className="text-sm font-bold  text-center">
              Resources
            </a>
          </div>
        </div>
      </div>

      <Divider />

      <div className="xs:w-full sm:w-full md:w-5/6 flex justify-center mx-auto">
        <div className="grid grid-cols-4 gap-4">
          <div className="relative h-[40px] w-[40px] rounded-full overflow-hidden">
            <Image
              unoptimized={true}
              priority={true}
              loader={() => defaultImage}
              src={defaultImage}
              fill={true}
              alt="image"
              objectFit="cover"
            />
          </div>
          <div className="relative h-[40px] w-[40px] rounded-full overflow-hidden">
            <Image
              unoptimized={true}
              priority={true}
              loader={() => defaultImage}
              src={defaultImage}
              fill={true}
              alt="image"
              objectFit="cover"
            />
          </div>
          <div className="relative h-[40px] w-[40px] rounded-full overflow-hidden">
            <Image
              unoptimized={true}
              priority={true}
              loader={() => defaultImage}
              src={defaultImage}
              fill={true}
              alt="image"
              objectFit="cover"
            />
          </div>
          <div className="relative h-[40px] w-[40px] rounded-full overflow-hidden">
            <Image
              unoptimized={true}
              priority={true}
              loader={() => defaultImage}
              src={defaultImage}
              fill={true}
              alt="image"
              objectFit="cover"
            />
          </div>
        </div>
      </div>

      <div className="text-sm text-center py-8 text-gray-400">
        © Photo, Inc. 2019. We love our users!
      </div>
    </div>
  );
}
