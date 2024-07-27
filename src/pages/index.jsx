import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate()
  useEffect(()=>{
    const timer = setTimeout(() => {
    navigate('/login')
      
    }, 1000);
    clearTimeout = timer

  },[])
  return (
    <div className="w-screen h-screen  flex items-center justify-center">
      <div className="w-64 h-12 ">
        <img src="/logo/FixHub.png" alt="FixHub logo" />
      </div>
    </div>
  );
}
