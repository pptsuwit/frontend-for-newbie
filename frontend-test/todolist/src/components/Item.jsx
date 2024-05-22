import { EditFilled, DeleteFilled } from "@ant-design/icons";
import { Button } from "antd";
export default function Item(props) {
  return (
    <div className="flex justify-between w-full shadow-md border rounded-md p-1.5 px-4">
      <span className="font-semibold text-lg">{props.name}</span>
      <div className="flex gap-x-2">
        <div>
          <Button
            onClick={() => props.editItem(props.index)}
            type="link"
            icon={<EditFilled style={{ color: "#1890FF" }} />}
          ></Button>
        </div>
        <div>
          <Button
            onClick={() => props.deleteItem(props.index)}
            type="link"
            icon={<DeleteFilled style={{ color: "red" }} />}
          ></Button>
        </div>
      </div>
    </div>
  );
}
