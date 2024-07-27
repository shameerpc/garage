import React from "react";
import Header from "../components/layouts/Header";
import { Outlet, useLocation } from "react-router-dom";

export default function CustomerLayout() {
  const pathName = useLocation()
  const pathWithoutLayout = pathName?.pathname.includes("customer/manage")
  return (
    <div className="w-screen h-screen overflow-hidden">
      <div className="sticky top-0 bg-white">
        <Header />
      </div>
      <div className="w-full h-full overflow-auto">
        <Outlet />
      </div>
    </div>
  );
}
