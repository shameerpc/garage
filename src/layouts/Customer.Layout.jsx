import React from "react";
import Header from "../components/layouts/Header";
import { Outlet } from "react-router-dom";

export default function CustomerLayout() {
  return (
    <div className="w-screen h-screen">
      <Header />
      <Outlet/>
    </div>
  );
}
