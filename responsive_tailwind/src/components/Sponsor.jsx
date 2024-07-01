"use client";
import defaultImage from "@/assets/image400x400.png";
import Image from "next/image";
export default function Sponsor() {
  return (
    <div className="w-full min-h-[50svh] p-16 ">
      <div className="text-3xl font-bold text-center">
        You’re in good company
      </div>
      <div className="xs:w-full sm:w-full md:w-2/3 py-12 text-xl text-center mx-auto text-ellipsis ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum rerum
        officia sit obcaecati distinctio blanditiis ex autem suscipit nostrum
        iure ab libero praesentium qui corrupti vel hic similique, pariatur
        officiis.
      </div>

      <div className="xs:w-full sm:w-full md:w-5/6 flex justify-center mx-auto">
        <div className="grid xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xs:gap-6 sm:gap-6 md:gap-8">
          <div className="relative h-[80px] w-[140px] rounded-md overflow-hidden">
            <Image
              unoptimized={true}
              priority={true}
              loader={() => defaultImage}
              src={defaultImage}
              fill={true}
              alt="image"
            />
          </div>
          <div className="relative h-[80px] w-[140px] rounded-md overflow-hidden">
            <Image
              unoptimized={true}
              priority={true}
              loader={() => defaultImage}
              src={defaultImage}
              fill={true}
              alt="image"
            />
          </div>
          <div className="relative h-[80px] w-[140px] rounded-md overflow-hidden">
            <Image
              unoptimized={true}
              priority={true}
              loader={() => defaultImage}
              src={defaultImage}
              fill={true}
              alt="image"
            />
          </div>
          <div className="relative h-[80px] w-[140px] rounded-md overflow-hidden">
            <Image
              unoptimized={true}
              priority={true}
              loader={() => defaultImage}
              src={defaultImage}
              fill={true}
              alt="image"
            />
          </div>
          <div className="relative h-[80px] w-[140px] rounded-md overflow-hidden">
            <Image
              unoptimized={true}
              priority={true}
              loader={() => defaultImage}
              src={defaultImage}
              fill={true}
              alt="image"
            />
          </div>
          <div className="relative h-[80px] w-[140px] rounded-md overflow-hidden">
            <Image
              unoptimized={true}
              priority={true}
              loader={() => defaultImage}
              src={defaultImage}
              fill={true}
              alt="image"
            />
          </div>
          <div className="relative h-[80px] w-[140px] rounded-md overflow-hidden">
            <Image
              unoptimized={true}
              priority={true}
              loader={() => defaultImage}
              src={defaultImage}
              fill={true}
              alt="image"
            />
          </div>
          <div className="relative h-[80px] w-[140px] rounded-md overflow-hidden">
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
    </div>
  );
}
