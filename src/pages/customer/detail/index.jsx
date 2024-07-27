import React from "react";

export default function CustomerDetails() {
  return (
    <section className="w-full h-full relative">
      <div className="flex w-full h-full   bg-[#FBFBFB]">
        <div className="flex-[0.4] border-r border-[#E0E0E0] flex pl-20 pr-5 p py-10 bg-white ">
          <div className="bg-black size-8 rounded-full"></div>

          <div className="flex flex-col gap-y-4 mt-20  w-full">
            <div className="py-4 border-b flex gap-2 text-sm  w-full">
              <div className="size-6">
                <img src="/icons/customer/king.svg" alt="" className="size-9" />
              </div>
              <div>
                <p className="text-xs">Customer ID</p>
                <p className="font-semibold text-base">#CN123</p>
              </div>
            </div>
            <div className="py-4 border-b flex gap-2 text-sm  w-full">
              <div className="size-6">
                <img src="/icons/customer/king.svg" alt="" className="size-9" />
              </div>
              <div>
                <p className="text-xs">Customer Name</p>
                <p className="font-semibold text-base">Kiran Mohan</p>
              </div>
            </div>
            <div className="py-4 border-b flex gap-2 text-sm  w-full">
              <div className="size-6">
                <img
                  src="/icons/customer/calling.svg"
                  alt=""
                  className="size-9"
                />
              </div>
              <div>
                <p className="text-xs">Phone Number</p>
                <p className="font-semibold text-base">9784512345</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-[0.6] bg-[#FBFBFB] py-10 pr-20 pl-20">
          <div className="flex items-center gap-1.5 justify-end">
            <div className="bg-black rounded-full size-6 text-white text-2xl flex justify-center items-center ">
              +
            </div>
            <p className="font-bold text-sm underline px-1.5">
              Add New Vehicle
            </p>
          </div>
          <div className="table table-lg   mx-auto rounded-md w-full mt-4">
            <table className="w-full ">
              <thead className="bg-[#FFCD57] rounded-md">
                <tr className="text-center text-black ">
                  <th className="">Vehicles</th>
                  <th>Total Jobs</th>
                  <th>View History</th>
                  <th>Add New Job</th>
                </tr>
              </thead>
              <tbody className="border border-[#F6F6F6] bg-white">
                <tr className="border-b-2 border-[#F6F6F6]">
                  <td>KA13M1234</td>
                  <td>10</td>
                  <td className="underline underline-offset-4 font-bold">
                    View
                  </td>
                  <td>10</td>
                </tr>
                <tr className="border-b border-[#F6F6F6]">
                  <td>KA13M1234</td>
                  <td>10</td>
                  <td>10</td>
                  <td>
                    <div className="rounded-full bg-[#FFC328] text-white size-5 text-lg flex justify-center items-center">
                      +
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <footer className="bg-black text-white py-4  absolute bottom-20 rounded px-20 flex gap-x-5 items-center justify-end h-20 w-full">
        <p>
          Please click on <span className="text-[#FFCD57]"> 'ADD A JOB' </span> to
          assign a Job
        </p>
        <div className="h-10 w-24 border border-[#A1A1A1] flex justify-center rounded items-center">
          CANCEL
        </div>
        <div className="h-10 w-28  font-semibold text-base bg-[#FFCD57] text-black  flex justify-center rounded items-center">
          ADD A JOB
        </div>
      </footer>
    </section>
  );
}
