import Dialog from "@/components/Dialog";
import DialogDelete from "@/components/DialogDelete";
import Drawer from "@/components/Drawer";
import Navbar from "@/components/Navbar";
import { GlobalContextProvider } from "@/contexts/store";

export default function MainLayouts({ children }) {
  return (
    <GlobalContextProvider>
      <Dialog />
      <DialogDelete />
      <div className="flex absolute w-full h-full">
        <Drawer />
        <div className="w-full">
          <Navbar />
          <div>{children}</div>
        </div>
      </div>
    </GlobalContextProvider>
  );
}
