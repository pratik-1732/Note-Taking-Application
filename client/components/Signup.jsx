import React from "react";
import { Eye, EyeOff, Calendar } from "lucide-react";
import Nav from "./Nav";

const Signup = () => {
  return (
    <div className=" sm:h-screen bg-white sm:flex sm:justify-between">
      <div className="left-col sm:w-[591px]">
        {/* navbar  */}
        <Nav />

        {/* left side form aur content */}
        <div className="p-2 sm:p-16">
          <div className="mb-4 text-center sm:text-start">
            <h1 className="text-2xl mb-1 sm:text-4xl font-semibold tracking-tighter sm:mb-2 ">
              Sign up
            </h1>
            <p className="font-normal sm:text-lg text-[#969696]">
              Sign up to enjoy the feature of HD
            </p>
          </div>

          {/* form  */}
          <form className="mt-4 px-2 sm:px-0">
            <div className="flex flex-col mb-3">
              <label className="text-[#969696] text-sm font-medium mb-2">
                Your Name
              </label>
              <input
                type="text"
                className="w-full outline-blue-500 h-10 sm:h-12 px-4 py-3 border border-[#969696] rounded-md text-base sm:text-lg font-normal text-black"
                placeholder="Jonas Khanwald"
              />
            </div>
            <div className="flex flex-col mb-3">
              <label className="text-[#969696] text-sm font-medium mb-2">
                Date Of Birth
              </label>
              <div className="flex gap-2 items-center w-full h-10 sm:h-12  border border-[#969696] rounded-md ">
                <Calendar className=" text-gray-700 w-5 h-5 ml-2 cursor-pointer" />
                <input
                  type="text"
                  className="w-full text-base sm:text-lg font-normal text-black outline-blue-500"
                  placeholder="date"
                />
              </div>
            </div>
            <div className="flex flex-col mb-5 sm:mb-6">
              <label className="text-[#969696] text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="text"
                className="w-full h-10 sm:h-12 px-4 py-3 border outline-blue-500 border-[#969696] rounded-md text-base sm:text-lg font-normal text-black"
                placeholder="jonaskhanwald@gmail.com"
              />
            </div>
            <div className="mb-8 relative">
              <input
                type="text"
                className="w-full h-10 sm:h-12 px-4 py-3 border outline-blue-500 border-[#969696] rounded-md text-base sm:text-lg font-normal text-black"
                placeholder="OTP"
              />
              <EyeOff className="absolute top-3 right-3 text-gray-400 w-5 h-5 cursor-pointer" />
            </div>
            <button
              type="button"
              className="w-full bg-blue-600 text-white text-base sm:text-lg font-medium sm:font-semibold py-3 sm:py-4 px-2 rounded-lg  hover:bg-blue-700 cursor-pointer"
            >
              Sign up
            </button>
          </form>
          <div className="mt-6 text-center">
            <p className="text-base sm:text-lg text-gray-600 font-normal">
              Already have an account??
              <button className="text-blue-600 hover:text-blue-700 font-medium ml-2 underline cursor-pointer">
                Sign in
              </button>
            </p>
          </div>
        </div>
      </div>

      {/* right side img  */}
      <div className="right-col  ">
        <img
          className="h-0 w-0 sm:p-4 sm:rounded-[24px] sm:object-cover sm:w-[825px] sm:h-screen"
          src="/images/img_1.jpg"
        />
      </div>
    </div>
  );
};

export default Signup;
