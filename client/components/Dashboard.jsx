import React from "react";
import Cards from "./Cards";

const Dashboard = () => {
  return (
    <div>
      <nav className="flex justify-between py-5 px-15 items-center">
        <div className="flex gap-5 items-center">
          <img src="/images/logo.png" className="h-20 w-20" />
          <h1 className="text-4xl font-semibold">Dashboard</h1>
        </div>
        <div>
          <button className="text-white cursor-pointer text-xl font-medium bg-blue-600 px-4 py-2 rounded-md">
            Sign out
          </button>
        </div>
      </nav>
      <div className="flex flex-col items-center justify-center">
        <div className="mx-20 my-15 px-5 py-10 border border-gray-300 shadow-xl rounded-md text-center w-1/2 ">
          <h1 className="text-4xl font-bold mb-5">Welcome, Jonas Kahnwald !</h1>
          <p className="text-lg font-normal text-gray-500">
            Email: xxxxxx@xxxx.com
          </p>
        </div>
        <button className="bg-blue-600 text-white text-xl rounded-lg px-10 py-3 font-semibold cursor-pointer">
          Create Note
        </button>
      </div>
      <div className="p-20">
        <h1 className="text-3xl font-semibold mb-10 text-center">Notes</h1>
        <div className="grid grid-cols-3 gap-5">
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
