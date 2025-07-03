import React from "react";
import { Eye, EyeOff, Calendar } from "lucide-react";

import Nav from "./Nav";

const Signin = () => {
  return (
    <div className=" h-screen bg-white flex justify-between">
      <div className="left-col w-[591px]">
        <Nav />
        <div className="content p-16">
          <div className="mb-4">
            <h1 className="text-4xl font-semibold tracking-tighter mb-2">
              Sign in
            </h1>
            <p className="font-normal text-lg text-[#969696]">
              Please login to continue to your account.
            </p>
          </div>
          <form className="mt-4">
            <div className="flex flex-col mb-6">
              <label className="text-[#969696] text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="text"
                className="w-full h-12 px-4 py-3 border outline-blue-500 border-[#969696] rounded-md text-lg font-normal text-black"
                placeholder="jonaskhanwald@gmail.com"
              />
            </div>
            <div className="mb-8 relative">
              <input
                type="text"
                className="w-full h-12 px-4 py-3 border outline-blue-500 border-[#969696] rounded-md text-lg font-normal text-black"
                placeholder="OTP"
              />
              <EyeOff className="absolute top-3 right-3 text-gray-500 w-5 h-5 cursor-pointer" />
            </div>
            <p className="text-[#367AFF] text-md underline font-medium mb-3">
              Resend OTP
            </p>
            <div className="flex gap-2 items-center mb-4">
              <input type="checkbox" />
              <p>Keep me logged in</p>
            </div>
            <button
              type="button"
              className="w-full bg-blue-600 text-white text-lg font-semibold py-4 px-2 rounded-lg  hover:bg-blue-700 cursor-pointer"
            >
              Sign in
            </button>
            <div className="mt-6 text-center">
              <p className="text-lg text-gray-600 font-normal">
                need an account?
                <button className="text-blue-600 hover:text-blue-700 font-medium ml-1 underline cursor-pointer">
                  Create one
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>
      <div className="right-col  ">
        <img
          className="p-4 rounded-[24px] object-cover w-[825px] h-screen"
          src="/images/img_1.jpg"
        />
      </div>
    </div>
  );
};

export default Signin;
