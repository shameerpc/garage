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
    <div className="navbar border-b border-[#F2F2F2] px-20 h-20">
      <div className="flex-1 flex gap-4 items-center">
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
        <div className="border border-[#E3E5E8] w-80 h-10 rounded-full px-3 flex justify-between items-center ">
          <div className="flex items-center gap-1">
            <House className="size-5" />
            <p className="font-semibold">Branch</p>
          </div>
          <div>
            <select name="" id="" className="text-[#737B8C] font-bold text-sm">
              <option value="">Lakshmi Nagar,Trivandrum</option>
            </select>
          </div>
        </div>
      </div>
      <div className="flex-none">
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span className="badge badge-xs badge-success indicator-item"></span>
          </div>
        </button>
        {/* <button className="btn btn-square btn-ghost">
          <Bell className="text-[#2C2C2C]/80" />
        </button> */}
      </div>
    </div>
  );

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
            <House className="size-5" />
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
