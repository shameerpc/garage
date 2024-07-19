import React from "react";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <div className="md:flex justify-center">
      <div className="md:w-[400px]">
        <h1 className="text-3xl text-center font-medium my-8">
          Login
        </h1>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
