import React from "react";
import { Eye, EyeOff, Calendar } from "lucide-react";
import Nav from "./Nav";
import { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [otp, setOtp] = useState("");
  const [isVerified, setIsVerified] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    if (!isVerified) {
      alert("Please verify your OTP first.");
      return;
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/api/auth/signup`,
        {
          name,
          email,
          dob,
        }
      );
      console.log(response);
      setName("");
      setEmail("");
      setDob("");
      setOtp("");
    } catch (error) {
      console.error("signup Error:", error);
    }
  };

  const otpSend = async (e) => {
    e.preventDefault();

    if (!email.trim()) {
      alert("Please enter your email first.");
      return;
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/api/otp/send`,
        {
          email,
        }
      );
      alert("OTP sent successfully. Check your mail.");
    } catch (error) {
      alert("OTP not sent");
      console.error("signup Error:", error);
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
      console.error("signup Error:", error);
    }
  };

  return (
    <div className=" sm:h-screen bg-white sm:flex sm:justify-between">
      <div className="left-col sm:w-[595px] sm:h-screen">
        {/* navbar  */}
        <Nav />

        {/* left side form aur content */}
        <div className="p-2 sm:px-18 sm:py-3">
          <div className="mb-4 text-center sm:text-start">
            <h1 className="text-2xl mb-1 sm:text-4xl font-semibold tracking-tighter sm:mb-2 ">
              Sign up
            </h1>
            <p className="font-normal sm:text-lg text-[#969696]">
              Sign up to enjoy the feature of HD
            </p>
          </div>

          {/* form  */}
          <form
            className="mt-4 px-2 sm:px-0"
            onSubmit={handleSubmit}
            noValidate={false}
          >
            <div className="flex flex-col mb-3">
              <label className="text-[#969696] text-sm font-medium mb-2">
                Your Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                className="w-full outline-blue-500 h-10 sm:h-12 px-4 py-3 border border-[#969696] rounded-md text-base sm:text-lg font-normal text-black"
                placeholder="Jonas Khanwald"
                required
              />
            </div>
            <div className="flex flex-col mb-3">
              <label className="text-[#969696] text-sm font-medium mb-2">
                Date Of Birth
              </label>
              <div>
                <input
                  type="date"
                  value={dob}
                  onChange={(e) => {
                    setDob(e.target.value);
                  }}
                  className="w-full h-10 sm:h-12 p-2 sm:px-4 sm:py-2 border border-[#969696] rounded-md text-base sm:text-lg font-normal text-black outline-blue-500"
                  placeholder="date"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col mb-5 sm:mb-6">
              <label className="text-[#969696] text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="w-full h-10 sm:h-12 px-4 py-3 border outline-blue-500 border-[#969696] rounded-md text-base sm:text-lg font-normal text-black"
                placeholder="jonaskhanwald@gmail.com"
                required
              />
            </div>
            <div className="flex justify-center mb-3 sm:mb-4">
              <button
                type="button"
                onClick={otpSend}
                className="bg-blue-500 hover:bg-blue-600 cursor-pointer text-white text-base font-medium px-2 py-1  rounded-md"
              >
                Send OTP
              </button>
            </div>
            <div className="mb-4 relative">
              <input
                type="text"
                value={otp}
                onChange={(e) => {
                  setOtp(e.target.value);
                }}
                className="w-full h-10 sm:h-12 px-4 py-3 border outline-blue-500 border-[#969696] rounded-md text-base sm:text-lg font-normal text-black"
                placeholder="OTP"
              />
              <EyeOff className="absolute top-3 right-3 text-gray-400 w-5 h-5 cursor-pointer" />
            </div>
            <div className="flex justify-center mb-3 sm:mb-4">
              <button
                type="button"
                onClick={otpVerify}
                className="bg-blue-500 hover:bg-blue-600 cursor-pointer text-white text-base  font-medium px-2 py-1  rounded-md"
              >
                Verify OTP
              </button>
            </div>
            <button
              type="submit"
              disabled={!isVerified}
              className="w-full bg-blue-600 text-white text-base sm:text-lg font-medium sm:font-semibold py-3 px-2 rounded-lg  hover:bg-blue-700 cursor-pointer"
            >
              Sign up
            </button>
          </form>
          <div className="mt-4 text-center">
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
