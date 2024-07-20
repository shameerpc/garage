import React from "react";
import { Bell, Expand, House, LayoutGrid, PlusCircle } from "lucide-react";
// import { setSidebar } from "@/lib/store/features/layoutSlice";
// import ProfileDrop from "./ProfileDrop";
// import Dropdown from "./dropdown/Dropdown";
// import { language, location } from "@/constants/dropdown";

export default function Header() {
  const [isFullscreen, setIsFullscreen] = React.useState(false);

  // Watch for fullscreenchange
  React.useEffect(() => {
    document.addEventListener("fullscreenchange", onFullscreenChange);
    return () =>
      document.removeEventListener("fullscreenchange", onFullscreenChange);
  }, []);

  function onFullscreenChange() {
    setIsFullscreen(!!document.fullscreenElement);
  }

  function toggleFullscreen() {
    if (isFullscreen) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      }
    } else {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
      }
    }
  }
  return (
    <header className=" border-b border-[#F2F2F2] flex items-center justify-between px-20 min-h-20 h-20">
      <div className="flex gap-4">
        <div className="flex gap-2 items-center border-r border-[#E0E0E0] pr-3">
          <div
            //   onClick={() => {
            //     dispatch(setSidebar(!sidebar));
            //   }}
            className="size-9 hover:scale-[1.05] transition-all hover:shadow duration-500 cursor-pointer bg-black rounded-full flex items-center justify-center relative "
          >
            {/* <img
            className="object-contain h-7"
            src={"/dashboard/icons/hamburger.svg"}
          /> */}
          </div>
          <p className="text-[#434343] font-semibold">Garage 22,Trivandrum</p>
          {/* <Dropdown dropdownData={language} type={"lang"} /> */}
        </div>
        <div className="border border-[#E3E5E8] w-80 rounded-full px-3 flex justify-between items-center ">
          <div className="flex items-center gap-1">
            <House  className="size-5"/>
            <p className="font-semibold">Branch</p>
          </div>
          <div>
            <select name="" id="" className="text-[#737B8C] font-bold text-sm">
                <option value="">Lakshmi Nagar,Trivandrum</option>
            </select>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="w-9 hover:scale-[1.05] hover:shadow transition-all duration-500 cursor-pointer bg-white rounded flex items-center justify-center px-2 h-9">
          <Bell className="text-[#2C2C2C]/80" />
        </div>
      </div>
    </header>
  );
}
