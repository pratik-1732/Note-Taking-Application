import React from "react";
import { Eye, EyeOff, Calendar } from "lucide-react";

import Nav from "./Nav";

const Signin = () => {
  return (
    <div className=" h-screen bg-white flex justify-between">
      <div className="left-col w-[591px]">
        {/* navbar */}
        <Nav />

        {/* leftside */}
        <div className="p-4 sm:p-16">
          <div className="mb-4 text-center">
            <h1 className="text-2xl sm:text-4xl font-semibold tracking-tighter sm:mb-2">
              Sign in
            </h1>
            <p className="font-normal sm:text-lg text-[#969696]">
              Please login to continue to your account.
            </p>
          </div>

          {/* form  */}
          <form className="mt-4 px-2 sm:px-0">
            <div className="flex flex-col mb-5">
              <label className="text-[#969696] text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="text"
                className="w-full h-10 sm:h-12 px-4 py-3 border outline-blue-500 border-[#969696] rounded-md text-base sm:text-lg font-normal text-black"
                placeholder="jonaskhanwald@gmail.com"
              />
            </div>
            <div className="mb-3 sm:mb-8 relative">
              <input
                type="text"
                className="w-full h-10 sm:h-12 px-4 py-3 border outline-blue-500 border-[#969696] rounded-md text-base sm:text-lg font-normal text-black"
                placeholder="OTP"
              />
              <EyeOff className="absolute top-3 right-3 text-gray-400 w-5 h-5 cursor-pointer" />
            </div>
            <p className="text-[#367AFF] text-sm sm:text-base underline font-medium mb-3">
              Resend OTP
            </p>
            <div className="flex gap-2 items-center mb-5">
              <input type="checkbox" />
              <p>Keep me logged in</p>
            </div>
            <button
              type="button"
              className="w-full bg-blue-600 text-white text-lg font-medium sm:font-semibold py-2 sm:py-4 px-2 rounded-lg  hover:bg-blue-700 cursor-pointer"
            >
              Sign in
            </button>
            <div className="mt-6 text-center">
              <p className=" text-base sm:text-lg text-gray-600 font-normal">
                Need an account?
                <button className="text-blue-600 hover:text-blue-700 font-medium ml-1 underline cursor-pointer">
                  Create one
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>

      {/* right side image */}
      <div className="right-col  ">
        <img
          className="h-0 w-0 sm:p-4 sm:rounded-[24px] sm:object-cover sm:w-[825px] sm:h-screen"
          src="/images/img_1.jpg"
        />
      </div>
    </div>
  );
};

export default Signin;
