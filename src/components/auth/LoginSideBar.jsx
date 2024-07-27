import React, { useEffect, useState } from "react";
import { loginImgSliders } from "../../constants/images";

export default function LoginSideBar() {
  const [currentImg, setCurrentImg] = useState(loginImgSliders[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  console.log(loginImgSliders.length);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === loginImgSliders.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);
  console.log(currentIndex);
  return (
    <div className="flex  flex-col items-center gap-y-10 ">
      <div
        className="max-w-96 w-96 flex transition-transform duration-500"
        // style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        <img
          // key={image.id}
          src={loginImgSliders[currentIndex]?.path}
          alt={loginImgSliders[currentIndex]?.name}
          className="object-contain  flex-shrink-0"
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
          onClick={() => setCurrentIndex(0)}
          className={`${
            currentIndex === 0
              ? "w-10 h-3 bg-[#FFCD57]"
              : "w-4 h-3  bg-[#D9D9D9] "
          }  rounded-full cursor-pointer`}
        />
        <div
          onClick={() => setCurrentIndex(1)}
          className={`${
            currentIndex === 1
              ? "w-10 h-3 bg-[#FFCD57]"
              : "w-4 h-3  bg-[#D9D9D9] "
          }  rounded-full cursor-pointer`}
        />
        <div
          onClick={() => setCurrentIndex(2)}
          className={`${
            currentIndex === 2
              ? "w-10 h-3 bg-[#FFCD57]"
              : "w-4 h-3  bg-[#D9D9D9] "
          }  rounded-full cursor-pointer`}
        />
      </div>
    </div>
  );
}
