"use client";
import React from "react";

import defaultImage from "@/assets/image400x400.png";
import Image from "next/image";
export default function Content2() {
  return (
    <div className="w-full min-h-[40svh] p-10 bg-[#F5F5F5]">
      <div className="grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8 p-10">
        <div className="flex flex-col justify-center items-start">
          <div className="font-bold text-xl">
            Sed ut perspiciatis unde omnis
          </div>
          <div>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.
          </div>
        </div>
        <div className="relative h-[400px] rounded-md overflow-hidden">
          <Image
            unoptimized={true}
            priority={true}
            loader={() => defaultImage}
            src={defaultImage}
            fill={true}
            alt="image"
          />
        </div>
      </div>
    </div>
  );
}
