import { HomeIcon } from "lucide-react";
import React from "react";

export default function Home() {
  return (
    <div className="w-screen h-screen">
      <div className="w-full z-[999999999999999] h-16 flex justify-center gap-x-8 items-center shadow-md">
        {/* <div className="h-full relative gap-3 flex flex-col items-center justify-end">
          <HomeIcon />
          <p>Home</p>
          <div className=" bg-[#FFCD57] rounded-full h-2.5 absolute  w-24"></div>
        </div> */}

        <div className="flex gap-1 relative -z-50 h-full justify-center items-center px-2">
          <HomeIcon className="fill-[#FFC57] text-[#FFCD57]" />
          <p>Services</p>
          <div className="border-t-4 border-[#FFCD57] rounded-full h-2.5 -bottom-1.5 absolute  w-full -z-50"></div>
        </div>
        <div className="flex gap-1 relative -z-50 h-full justify-center items-center px-2">
          <HomeIcon />
          <p>Services</p>
          {/* <div className="border-t-4 border-[#FFCD57] rounded-full h-2.5 -bottom-1.5 absolute  w-full -z-50"></div> */}
        </div>
        <div className="flex gap-1 relative -z-50 h-full justify-center items-center px-2">
          <HomeIcon />
          <p>Services</p>
          {/* <div className="border-t-4 border-[#FFCD57] rounded-full h-2.5 -bottom-1.5 absolute  w-full -z-50"></div> */}
        </div>
        <div className="flex gap-1 relative -z-50 h-full justify-center items-center px-2">
          <HomeIcon />
          <p>Services</p>
          {/* <div className="border-t-4 border-[#FFCD57] rounded-full h-2.5 -bottom-1.5 absolute  w-full -z-50"></div> */}
        </div>
        {/* <div className="flex gap-1">
          <HomeIcon />
          <p>Settings</p>
        </div>
        <div className="flex gap-1">
          <HomeIcon />
          <p>Account</p>
        </div> */}
      </div>
      <div className="w-full  h-80 bg-gradient-to-b from-[#D2BC880A] to-[#FFCD5733] my-4">
        <div className=" flex items-center justify-between px-20 min-h-20 h-20">
          <div className="flex gap-4">
            <div className="flex gap-2 items-center border-r border-[#E0E0E0] pr-3">
              <div className="size-9 hover:scale-[1.05] transition-all hover:shadow duration-500 cursor-pointer bg-black rounded-full flex items-center justify-center relative ">
                {/* <img
            className="object-contain h-7"
            src={"/dashboard/icons/hamburger.svg"}
          /> */}
              </div>
              <div className="flex flex-col">
                <h3 className="text-[#434343] font-bold text-sm">
                  Hello, Rahul
                </h3>
                <p className="text-xs">Here is your job overview</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="rounded-full h-10 w-96 flex justify-center items-center border border-[#E3E5E8]">
              <p>Search for mobile no.,vehicle no. or job Id</p>
            </div>
            <div className="rounded-full h-10 w-52 flex gap-2 px-3 items-center bg-[#FFCD57]">
              <div className="rounded-full bg-black size-5 text-xl text-[#FFCD57] flex justify-center items-center">
                +
              </div>
              <p className="font-semibold">Add new customers</p>
            </div>
          </div>
        </div>

        <div className="w-full px-20">
          <div className="flex justify-between items-center my-4 ">
            <div className="bg-[#F1EBDC] h-10 w-32 rounded-md flex  justify-between items-center px-2">
              <div>
                <img src="/icons/customer/sort-line.svg" alt="" />
              </div>
              <select
                name=""
                id=""
                className="w-full ml-2 h-full bg-transparent"
              >
                <option value="">Today</option>
                <option value="">Today</option>
                <option value="">Today</option>
                <option value="">Today</option>
                <option value="">Today</option>
              </select>
            </div>
            <div className="bg-white h-10 w-36 rounded-md flex  justify-between items-center px-2">
              <div className=" ">
                <img src="/icons/customer/mage_filter.svg" alt="" className="w-7" />
              </div>
              <select
                name=""
                id=""
                className="w-full ml-2 h-full bg-transparent"
              >
                <option value="">Today</option>
                <option value="">Today</option>
                <option value="">Today</option>
                <option value="">Today</option>
                <option value="">Today</option>
              </select>
            </div>{" "}
          </div>

          <div className="grid grid-cols-5 gap-x-4 gap-y-4">
            <div className="bg-black h-36  rounded-md text-white flex justify-between ">
              <div className="pl-3 py-4">
                <p>Total</p>
                <p>1000</p>
              </div>
              <div
                style={{
                  background: 'url("/images/Intersect.png" )',
                  backgroundRepeat: "no-repeat",
                }}
                className="bg-no-repeat object-contain h-14 w-12 flex justify-center items-center"
              >
                <img src="/icons/customer/two-cars.svg" alt="" />
              </div>
            </div>
            <div className="bg-white h-36  rounded-md text-white px-3">
              <div className=" py-4">
                <p>Total</p>
                <p>1000</p>
              </div>
              <div className="h-14 w-full flex justify-end items-center">
                <img src="/icons/customer/two-cars.svg" alt="" />
              </div>
            </div>
            <div className="bg-white h-36  rounded-md text-white px-3">
              <div className=" py-4">
                <p>Total</p>
                <p>1000</p>
              </div>
              <div className="h-14 w-full flex justify-end items-center">
                <img src="/icons/customer/two-cars.svg" alt="" />
              </div>
            </div>
            <div className="bg-white h-36  rounded-md text-white px-3">
              <div className=" py-4">
                <p>Total</p>
                <p>1000</p>
              </div>
              <div className="h-14 w-full flex justify-end items-center">
                <img src="/icons/customer/two-cars.svg" alt="" />
              </div>
            </div>
            <div className="bg-white h-36  rounded-md text-white px-3">
              <div className=" py-4">
                <p>Total</p>
                <p>1000</p>
              </div>
              <div className="h-14 w-full flex justify-end items-center">
                <img src="/icons/customer/two-cars.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-20 w-full">
        <h3>Management</h3>
        <div className="grid grid-cols-3 gap-x-4 mt-4">
          <div className="border border-[#E3E3E3] h-20 rounded-md"></div>
          <div className="border border-[#E3E3E3] h-20 rounded-md"></div>
          <div className="border border-[#E3E3E3] h-20 rounded-md"></div>
        </div>
      </div>
    </div>
  );
}
