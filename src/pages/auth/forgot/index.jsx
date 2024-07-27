import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  const [otp, setOtp] = useState(false);
  return (
    <section className="flex items-center w-full h-screen">
      <div className="flex-[0.5] h-full  border-r border-[#EAEAEA]">
        <div className="flex justify-center items-center h-full">
          <img src="/images/auth/forget.png" alt="" />
        </div>
      </div>

      <div className="flex-[0.5] flex flex-col gap-y-10 items-center justify-center h-full">
        <div className="text-center max-w-sm ">
          <h3 className="text-3xl font-semibold mb-4">Forgot Password?</h3>

          <p>
            A few steps to create a new password.please enter your email address
          </p>
        </div>
        <div className="max-w-md w-full flex flex-col gap-4">
          {otp && (
            <div className="flex items-center gap-4 mx-auto my-4   w-[75%] px-10 focus:border-[#2E2E2E]   h-10 text-[#696969]">
              <input
                autoComplete="off"
                type="text"
                className="h-full w-full bg-transparent border border-[#FFCD57] rounded "
              />
              <input
                autoComplete="off"
                type="text"
                className="h-full w-full bg-transparent border border-[#FFCD57] rounded"
              />
              <input
                autoComplete="off"
                type="text"
                className="h-full w-full bg-transparent border border-[#FFCD57] rounded"
              />
              <input
                autoComplete="off"
                type="text"
                className="h-full w-full bg-transparent border border-[#FFCD57] rounded"
              />
            </div>
          )}
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

          <div className="mt-6 w-full">
            <button
              onClick={() => setOtp(true)}
              className="my-2 w-full bg-[#FFCD57] cursor-pointer text-black h-12 font-semibold"
            >
              SENT OTP
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
