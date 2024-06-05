import Dialog from "@/components/Dialog";
import Drawer from "@/components/Drawer";
import Navbar from "@/components/Navbar";
import { GlobalContextProvider } from "@/contexts/store";

export default function MainLayouts({ children }) {
  return (
    <GlobalContextProvider>
      <Dialog />
      <div className="z-0 flex absolute w-full h-full">
        <Drawer />
        <div className="w-full">
          <Navbar />
          <div className="xs:py-4 sm:p-4 z-0 ">{children}</div>
        </div>
      </div>
    </GlobalContextProvider>
  );
}
