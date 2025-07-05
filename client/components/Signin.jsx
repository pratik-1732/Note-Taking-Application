import React from "react";
import { Eye, EyeOff, Calendar } from "lucide-react";
import axios from "axios";

import Nav from "./Nav";
import { useState } from "react";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [isVerified, setIsVerified] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const otpSend = async (e) => {
    e.preventDefault();

    if (!email.trim()) {
      alert("Please enter your email first.");
      return;
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/api/otp/signin/send`,
        {
          email,
        }
      );
      alert("OTP sent successfully. Check your mail.");
    } catch (error) {
      if (
        error.response?.status === 404 &&
        error.response.data?.message === "Sign up first"
      ) {
        alert("Sign up first.");
      } else {
        alert("OTP not sent");
        console.error("signin Error:", error);
      }
    }
  };

  const otpVerify = async (e) => {
    e.preventDefault();

    if (!otp.trim()) {
      alert("Please enter the OTP.");
      return;
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/api/otp/verify`,
        {
          email,
          otp,
        }
      );
      if (response.data.isVerified) {
        setIsVerified(true);
        alert("OTP verified successfully");
      }
    } catch (error) {
      alert("OTP is invalid or expired");
      console.error("signin Error:", error);
    }
  };

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
          <form className="mt-4 px-2 sm:px-0" onSubmit={handleSubmit}>
            <div className="flex flex-col mb-5">
              <label className="text-[#969696] text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="text"
                className="w-full h-10 sm:h-12 px-4 py-3 border outline-blue-500 border-[#969696] rounded-md text-base sm:text-lg font-normal text-black"
                placeholder="jonaskhanwald@gmail.com"
                required
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="mb-3 sm:mb-8 relative">
              <input
                type="text"
                className="w-full h-10 sm:h-12 px-4 py-3 border outline-blue-500 border-[#969696] rounded-md text-base sm:text-lg font-normal text-black"
                placeholder="OTP"
                required
                onChange={(e) => {
                  setOtp(e.target.value);
                }}
              />
              <EyeOff className="absolute top-3 right-3 text-gray-400 w-5 h-5 cursor-pointer" />
            </div>
            <div className="flex justify-around items-center mb-3 sm:mb-4">
              <button
                type="button"
                onClick={otpSend}
                className="bg-blue-600 hover:bg-blue-700 cursor-pointer text-white text-base font-medium px-3 py-1  rounded-md"
              >
                Send OTP
              </button>
              <button
                type="button"
                onClick={otpVerify}
                className="bg-blue-600 hover:bg-blue-700 cursor-pointer text-white text-base  font-medium px-3 py-1  rounded-md"
              >
                Verify OTP
              </button>
            </div>
            <button
              type="button"
              onClick={otpSend}
              className="text-[#367AFF] text-sm sm:text-base underline font-medium mb-3"
            >
              Resend OTP
            </button>
            <div className="flex gap-2 items-center mb-5">
              <input type="checkbox" />
              <p>Keep me logged in</p>
            </div>
            <button
              type="submit"
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
