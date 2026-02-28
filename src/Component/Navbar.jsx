import React from "react";
import NavLogo from "../assets/Logo 1.png";
import { Link } from "react-router";
function Navbar() {
  return (
    <div className="">
      <div className="w-[80%] mx-auto flex justify-between pt-3.5">
        {/* logo */}
        <div className="flex gap-5 items-center">
          <img src={NavLogo} alt="" />
          <div className="space-x-3">
            <Link className="text-[#515B6F] text-base font-medium">
              Find Jobs
            </Link>
            <Link className="text-[#515B6F] text-base font-medium">
              Browse Companies
            </Link>
          </div>
        </div>
        {/* singin  */}
        <div className="space-x-1">
          <button className="w-28 h-14 border border-[#4640DE] hover:bg-[#4640DE] text-[#4640DE] hover:text-white text-base font-bold cursor-pointer">
            Login
          </button>
          <button className="w-28 h-14 bg-[#4640DE]  text-white text-base font-bold cursor-pointer">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
