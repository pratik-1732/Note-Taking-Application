import React from "react";
import Cards from "./Cards";

const Dashboard = () => {
  return (
    <div>
      <nav className="flex justify-between items-center py-3 px-4 sm:py-5 sm:px-15 ">
        <div className="flex gap-2 sm:gap-5 items-center">
          <img src="/images/logo.png" className="h-10 w-10 sm:h-20 sm:w-20" />
          <h1 className=" text-2xl sm:text-4xl font-semibold">Dashboard</h1>
        </div>
        <div>
          <button className="text-blue-600 underline font-medium text-lg sm:text-white cursor-pointer sm:text-xl sm:font-medium sm:bg-blue-600 sm:px-4 sm:py-2 sm:rounded-md">
            Sign out
          </button>
        </div>
      </nav>
      <div className="flex flex-col sm:items-center justify-center">
        <div className="m-5 py-6 px-4 sm:mx-20 sm:my-15 sm:px-5 sm:py-10 border border-gray-300 shadow-xl rounded-md text-start sm:w-1/2 ">
          <h1 className="text-2xl sm:text-4xl font-bold mb-5">
            Welcome, Jonas Kahnwald !
          </h1>
          <p className="text-base sm:text-lg font-normal text-gray-600">
            Email: xxxxxx@xxxx.com
          </p>
        </div>
        <button className="px-5 py-2 m-5 text-lg font-medium bg-blue-600 text-white sm:text-xl rounded-lg sm:px-10 sm:py-3 sm:font-semibold cursor-pointer">
          Create Note
        </button>
      </div>
      <div className="p-5 sm:p-20">
        <h1 className="text-lg font-medium mb-6 text-start sm:text-3xl sm:font-semibold sm:mb-10 sm:text-center">
          Notes
        </h1>
        <div className="flex flex-col gap-4 sm:grid sm:grid-cols-3 sm:gap-5">
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
