import React, { useState } from "react";
import LoginSideBar from "../../../components/auth/LoginSideBar";
import { Link } from "react-router-dom";
import { Switch } from "@headlessui/react";
import { Eye, EyeOff } from "lucide-react";

export default function Login() {
  const [showPassowrd, setShowPassowrd] = useState(false);
  return (
    <div className="md:flex gap-6 px-20 justify-center items-center h-screen w-full">
      <div className="flex-[0.5] flex items-center justify-center w-full h-full border-r">
        <LoginSideBar />
      </div>
      <div className="flex-[0.5] flex flex-col gap-y-10 items-center max-w-2xl">
        <h3 className="text-2xl font-semibold">Login to Continue</h3>
        <div className="max-w-md w-full flex flex-col gap-4">
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
          <div className="flex justify-between text-sm">
            <div className="flex gap-1.5">
              <Switch
                // checked={enabled}
                // onChange={setEnabled}
                className="group relative flex h-6 w-10 cursor-pointer rounded-full bg-[#F7AD01]/50 p-1 transition-colors duration-200 ease-in-out focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[checked]:bg-[#F7AD01]"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none inline-block size-4 translate-x-0 rounded-full bg-[white] ring-0 shadow-lg transition duration-200 ease-in-out group-data-[checked]:translate-x-4"
                />
              </Switch>{" "}
              <p>Remember Me</p>
            </div>
            <p>Forgot Password?</p>
          </div>
          <div className="mt-6 w-full">
            <button className="my-2 w-full bg-[#FFCD57] text-black h-12 font-semibold">
              PROCEED
            </button>

            <p className="text-center  mt-1.5">
              Don’t have an account?{" "}
              <Link to={"/register"} className="font-bold text-[#001F3F]">
                Sign Up Now
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
