"use client";
import { Input, Button } from "antd";
import { useState } from "react";
export default function AddItem(props) {
  const [item, setItem] = useState("");
  return (
    <>
      <div className="flex justify-center gap-x-3 p-3 xs:w-screen sm:w-screen md:w-[600px] mx-auto">
        <Input
          size="large"
          onChange={(e) => setItem(e.target.value)}
          placeholder="Add something to your list"
          value={item}
        />
        <Button
          size="large"
          onClick={() => {
            setItem("");
            props.addItem(item);
          }}
          type="primary"
        >
          Add
        </Button>
      </div>
    </>
  );
}
