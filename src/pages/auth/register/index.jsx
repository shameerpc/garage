import { Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

export default function RegisterAccount() {
  const [showPassowrd, setShowPassowrd] = useState(false);

  return (
    <div className=" w-full flex justify-center h-screen md:py-4 py-2">
      <div className=" max-w-md w-full flex flex-col md:gap-y-3 gap-y-1.5">
        <div className="my-4">
          <h3 className="font-semibold text-2xl">Create an Account</h3>
          <p className="text-sm">Please enter your details</p>
        </div>

        <div className="flex group flex-col space-y-2">
          <label className="text-[#3A3A3A] group-focus-within:text-[#2E2E2E] font-medium">
            Name
          </label>
          <div className="flex items-center gap-2 rounded bg-[#F6F6F6]  w-full px-2 focus:border-[#2E2E2E]   h-10 text-[#696969]">
            <div>
              <img src="/icons/user.svg" alt="" />
            </div>
            <input
              autoComplete="off"
              type="text"
              className="h-full w-full bg-transparent"
            />
          </div>
        </div>
        <div className="flex group flex-col space-y-2">
          <label className="text-[#3A3A3A] group-focus-within:text-[#2E2E2E] font-medium">
            Garage Name
          </label>
          <div className="flex items-center gap-2 rounded bg-[#F6F6F6]  w-full px-2 focus:border-[#2E2E2E]   h-10 text-[#696969]">
            <div>
              <img src="/icons/garage.svg" alt="" />
            </div>
            <input
              autoComplete="off"
              type="text"
              className="h-full w-full bg-transparent"
            />
          </div>
        </div>
        <div className="flex group flex-col space-y-2">
          <label className="text-[#3A3A3A] group-focus-within:text-[#2E2E2E] font-medium">
            Email Address
          </label>
          <div className="flex items-center gap-2 rounded bg-[#F6F6F6]  w-full px-2 focus:border-[#2E2E2E]   h-10 text-[#696969]">
            <div>
              <img src="/icons/mail.svg" alt="" />
            </div>
            <input
              autoComplete="off"
              type="text"
              className="h-full w-full bg-transparent"
            />
          </div>
        </div>
        <div className="flex group flex-col space-y-2">
          <label className="text-[#3A3A3A] group-focus-within:text-[#2E2E2E] font-medium">
            Phone
          </label>
          <div className="flex items-center gap-2 rounded bg-[#F6F6F6]  w-full px-2 focus:border-[#2E2E2E]   h-10 text-[#696969]">
            <PhoneInput
              defaultCountry="IN"
              placeholder="Enter phone number"
              value={value}
              onChange={setValue}
              className="h-full w-full bg-[#F6F6F6]"
            />
          </div>
        </div>
        <div className="flex group flex-col space-y-2">
          <label className="text-[#3A3A3A] group-focus-within:text-[#2E2E2E] font-medium">
            Password
          </label>
          <div className="flex items-center justify-between rounded bg-[#F6F6F6]  w-full px-2 focus:border-[#2E2E2E]   h-10 text-[#696969]">
            <div className="flex gap-2">
              <img src="/icons/lock.svg" alt="" />
              <input
                autoComplete="off"
                type={showPassowrd ? "text" : "password"}
                className="h-full w-full bg-transparent"
              />
            </div>
            {showPassowrd ? (
              <Eye
                className="text-[#A9A9A9] size-5 cursor-pointer"
                onClick={() => setShowPassowrd(false)}
              />
            ) : (
              <EyeOff
                className="text-[#A9A9A9]  size-5 cursor-pointer"
                onClick={() => setShowPassowrd(true)}
              />
            )}
          </div>
        </div>
        <div className="mt-4 w-full">
          <button className="my-2 w-full bg-[#FFCD57] text-black h-12 font-semibold rounded">
            CREATE ACCOUNT
          </button>

          <p className="text-center  mt-1.5">
            Don’t have an account?{" "}
            <Link to={"/login"} className="font-bold text-[#001F3F]">
              Sign Up Now
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
