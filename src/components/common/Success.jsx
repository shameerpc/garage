import React from "react";

export default function Success({ image, message, btnText }) {
  return (
    <section className="w-full h-screen">
      <div className="flex flex-col justify-items-center items-center py-20">
        <div className="text-center">
          <h3 className="font-bold text-4xl tracking-">Success!</h3>
          <p className="text-xs tracking-tight">
            Your Account has been created
          </p>
        </div>
        <div>
          <img src="/images/auth/success-1.png" alt="" />
        </div>
        <div className="w-64 rounded h-10 bg-[#FFCD57] mt-6 font-semibold flex justify-center items-center">
          <p>CONTINUE</p>
        </div>
      </div>
    </section>
  );
}
