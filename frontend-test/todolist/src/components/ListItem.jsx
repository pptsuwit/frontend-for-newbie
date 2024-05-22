import { Card } from "antd";
import Item from "@/components/Item";
import { useEffect, useState } from "react";
export default function ListItem(props) {
  const [list, setList] = useState([]);

  useEffect(() => {
    const listItem = props.items.map((item, index) => {
      return (
        <Item
          key={index}
          id={item.id}
          index={index}
          name={item.name}
          editItem={props.editItem}
          deleteItem={props.deleteItem}
        />
      );
    });
    setList(listItem);
  }, [props]);

  return (
    <div className="flex justify-center gap-x-3 p-3 xs:w-screen sm:w-screen md:w-[600px] mx-auto">
      <Card bordered={true} className="w-full shadow-md">
        <div className="grid gap-y-2">{list}</div>
      </Card>
    </div>
  );
}
