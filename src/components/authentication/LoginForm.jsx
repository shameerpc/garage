import { useState } from "react";
import { useForm } from "react-hook-form";
import { IoEyeOutline } from "react-icons/io5";
import { HiOutlineMailOpen } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import SwitchDemo from "./Switch";

export default function LoginForm() {
  const [passwordShown, setPasswordShown] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const togglePasswordVisiblity = () => {
    setPasswordShown(!passwordShown);
  };

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-4">
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-sm font-normal text-gray-700 mb-1"
        >
          Email Address
        </label>
        <div className="relative text-gray-600 focus-within:text-gray-400">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <HiOutlineMailOpen className="text-[#F7AD01]" />
          </span>
          <input
            id="email"
            type="email"
            {...register("email", { required: true })}
            className="rounded-md bg-[#F6F6F6] py-3.5 pl-10 text-sm text-[#A9A9A9] focus:bg-gray-200 focus:text-gray-900 focus:outline-none w-full"
            placeholder="Email"
            autoComplete="off"
          />
        </div>
        {errors.email && (
          <span className="text-red-500 text-sm">This field is required</span>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="password"
          className="block text-sm font-normal text-gray-700 mb-1"
        >
          Password
        </label>
        <div className="relative text-gray-600 focus-within:text-gray-400">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <RiLockPasswordLine className="text-[#F7AD01]" />
          </span>
          <input
            id="password"
            type={passwordShown ? "text" : "password"}
            {...register("password", { required: true })}
            className="rounded-md bg-[#F6F6F6] py-3.5 pl-10 pr-10 text-sm text-[#A9A9A9] focus:bg-gray-200 focus:text-gray-900 focus:outline-none w-full"
            placeholder="Password"
            autoComplete="off"
          />
          <span className="absolute inset-y-0 right-0 flex items-center pr-3">
            <IoEyeOutline
              onClick={togglePasswordVisiblity}
              className="text-gray-400 cursor-pointer"
            />
          </span>
        </div>
        {errors.password && (
          <span className="text-red-500 text-sm">This field is required</span>
        )}
      </div>
      <div className="flex justify-between">
        <SwitchDemo />
        <h3 className="font-light text-sm">Forgot password</h3>
      </div>
      <div className="mt-10">
        <button
          type="submit"
          className="w-full py-2 px-4 bg-[#FFCD57] text-black rounded-md hover:bg-[#ffca4e] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          PROCEED
        </button>
      </div>
      <section className="flex justify-center my-3 space-x-1">
        <p className="font-extralight">Don’t have an account?</p>
        <h5 className="font-medium cursor-pointer">Sign Up Now</h5>
      </section>
    </form>
  );
}
