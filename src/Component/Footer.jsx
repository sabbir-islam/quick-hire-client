import React from "react";
import pngLogo from "../assets/Logo 2.png";
import { Link } from "react-router";
import { SocialIcon } from "react-social-icons";

function Footer() {
  return (
    <div className=" bg-[#202430]">
      <div className=" md:w-[80%] mx-auto p-4 md:p-11 ">
        <div className="flex flex-col md:flex-row justify-between gap-3">
          {/* logo here */}
          <div>
            <img src={pngLogo} alt="" />
            <p className="w-80 md:w-137 text-white mt-3">
              Great platform for the job seeker that passionate about startups.
              Find your dream job easier.
            </p>
          </div>
          <div className="flex gap-20 md:flex-none">
            {/* quick nav */}
            <div className="text-white flex flex-col gap-2">
              <h1 className="text-lg font-semibold">About</h1>
              <Link className="text-base font-normal">Companies</Link>
              <Link className="text-base font-normal">Pricing</Link>
              <Link className="text-base font-normal">Terms</Link>
              <Link className="text-base font-normal">Advice</Link>
              <Link className="text-base font-normal">Privacy Policy</Link>
            </div>
            {/* quick nav */}
            <div className="text-white flex flex-col gap-2">
              <h1 className="text-lg font-semibold">Resources</h1>
              <Link className="text-base font-normal">Help Docs</Link>
              <Link className="text-base font-normal">Guide</Link>
              <Link className="text-base font-normal">Updates</Link>
              <Link className="text-base font-normal">Contact Us</Link>
            </div>
          </div>

          {/* newsletter  */}
          <div className="flex flex-col gap-3 mt-3.5">
            <h1 className="text-white text-lg font-semibold">
              Get job notifications
            </h1>
            <p className="text-white text-base font-normal">
              The latest job news, articles, sent to your inbox weekly.
            </p>
            <span className="flex gap-2 mt-3">
              <input
                className="bg-white w-56 h-12 p-2"
                placeholder="E-mail address here"
                type="email"
                name=""
                id=""
              />
              <button className="bg-[#4640DE] p-3 text-white font-bold cursor-pointer">
                Subscribe
              </button>
            </span>
          </div>
        </div>
        <hr className=" border-gray-600 mt-10" />
        <div className="flex flex-col md:flex-row justify-between mt-10">
          <h1 className="text-gray-400">
            2021 @ QuickHire. All rights reserved.
          </h1>
          <div className="flex gap-2 mt-8 md:mt-0">
            <SocialIcon
              bgColor="gray"
              fgColor="white"
              style={{ height: 35, width: 35 }}
              url="www.facebook.com"
            />
            <SocialIcon
              bgColor="gray"
              fgColor="white"
              style={{ height: 35, width: 35 }}
              url="www.instagram.com"
            />
            <SocialIcon
              bgColor="gray"
              fgColor="white"
              style={{ height: 35, width: 35 }}
              url="www.linkedin.com"
            />
            <SocialIcon
              bgColor="gray"
              fgColor="white"
              style={{ height: 35, width: 35 }}
              url="www.x.com"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
