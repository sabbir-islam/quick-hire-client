import React from "react";
import { Search, MapPin, ChevronDown } from "lucide-react";
import BannerImg from "../assets/banner.png"; // Your image of the man
import Pattern from "../assets/Pattern.png"; // Your geometric pattern

function Banner() {
  return (
    <section className="relative w-full  mx-auto px-6 pt-12 lg:pt-20 overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* LEFT CONTENT */}
        <div className="flex-1 z-10">
          <div className="relative inline-block">
            <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-tight">
              Discover <br /> more than <br />
              <span className="text-blue-500 relative">
                5000+ Jobs
                <span className="absolute bottom-1 left-0 w-full h-2 bg-blue-400 opacity-50 -z-10 rounded-full"></span>
              </span>
            </h1>
          </div>

          <p className="mt-6 text-slate-500 text-lg max-w-lg leading-relaxed">
            Great platform for the job seeker that searching for new career
            heights and passionate about startups.
          </p>

          {/* SEARCH BAR */}
          <div className="mt-10 bg-white p-2 shadow-2xl rounded-sm flex flex-col md:flex-row items-center border border-gray-100">
            <div className="flex items-center flex-1 px-4 py-3 border-b md:border-b-0 md:border-r border-gray-200 w-full">
              <Search className="text-gray-400 mr-3" size={20} />
              <input
                type="text"
                placeholder="Job title or keyword"
                className="w-full outline-none text-slate-700 placeholder:text-gray-300"
              />
            </div>

            <div className="flex items-center flex-1 px-4 py-3 w-full justify-between">
              <div className="flex items-center">
                <MapPin className="text-gray-400 mr-3" size={20} />
                <span className="text-slate-700">Florence, Italy</span>
              </div>
              <ChevronDown className="text-gray-400" size={18} />
            </div>

            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-8 py-4 w-full md:w-auto transition-colors">
              Search my job
            </button>
          </div>

          <p className="mt-4 text-sm text-gray-500">
            <span className="font-semibold text-gray-700">Popular :</span> UI
            Designer, UX Researcher, Android, Admin
          </p>
        </div>

        <div className="flex-1 relative flex justify-center lg:justify-end">
          <div
            className="absolute top-0 right-0 w-100 h-100 opacity-20 -z-10"
            style={{
              backgroundImage: `url(${Pattern})`,
              backgroundSize: "contain",
            }}
          ></div>

          <div className="relative">
            <img
              src={BannerImg}
              alt="Professional pointing"
              className="relative z-10 w-full max-w-md object-contain"
            />

            {/* White diagonal cut overlay at the bottom right */}
            <div className="absolute bottom-0 -right-96 w-[200%] h-32 bg-white rotate-[-35deg] z-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
