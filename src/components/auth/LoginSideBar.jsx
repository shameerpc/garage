import React, { useEffect, useState } from "react";
import { loginImgSliders } from "../../constants/images";

export default function LoginSideBar() {
  const [currentImg, setCurrentImg] = useState(loginImgSliders[0]);

  return (
    <div className="flex  flex-col items-center gap-y-10 ">
      <div className="max-w-96 w-96">
        <img
          src={currentImg?.path}
          alt={currentImg?.name}
          className="object-contain"
        />
      </div>
      <div className="text-center tracking-[0.08rem] flex flex-col gap-y-2">
        <h2 className="font-bold text-2xl ">
          Streamline Your Garage <br /> Management Processes
        </h2>
        <p className="text-xs w-72">
          Completely free from your traditional methods of paper-based records
        </p>
      </div>
      <div className="h-3 flex gap-2">
        <div
          onClick={() => setCurrentImg(loginImgSliders[0])}
          className={`${
            currentImg?.id === 1
              ? "w-10 h-3 bg-[#FFCD57]"
              : "w-4 h-3  bg-[#D9D9D9] "
          }  rounded-full cursor-pointer`}
        />
        <div
          onClick={() => setCurrentImg(loginImgSliders[1])}
          className={`${
            currentImg?.id === 2
              ? "w-10 h-3 bg-[#FFCD57]"
              : "w-4 h-3  bg-[#D9D9D9] "
          }  rounded-full cursor-pointer`}
        />
        <div
          onClick={() => setCurrentImg(loginImgSliders[2])}
          className={`${
            currentImg?.id === 3
              ? "w-10 h-3 bg-[#FFCD57]"
              : "w-4 h-3  bg-[#D9D9D9] "
          }  rounded-full cursor-pointer`}
        />
      </div>
    </div>
  );
}
