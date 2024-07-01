import React from "react";

export default function ContactUs() {
  return (
    <div className="w-full min-h-[25svh] bg-[#F5F5F5] p-10  flex justify-center">
      <div className="md:flex items-center">
        <div className="text-2xl xs:w-full sm:w-full md:w-2/3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore
        </div>
        <div className="xs:w-full sm:w-full md:w-1/3 flex justify-center gap-6 xs:py-10 sm:py-10 md:py-0">
          <button
            type="button"
            class="text-white bg-blue-500 hover:bg-blue-600 font-medium rounded-md text-sm px-6 py-2 "
          >
            Join Today
          </button>
          <button
            type="button"
            class="text-blue-400 bg-white hover:text-blue-500 border  border-blue-400 font-medium rounded-md text-sm px-6 py-2 "
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}
