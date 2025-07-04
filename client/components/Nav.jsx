import React from "react";

const Nav = () => {
  return (
    <div>
      <div className="flex gap-1 items-center py-2 sm:py-2 justify-center">
        <img className="w-10 h-10 sm:w-20 sm:h-20" src="/images/logo.png" />
        <h3 className="text-xl font-semibold sm:text-3xl sm:leading-[80px] tracking-tighter">
          HD
        </h3>
      </div>
    </div>
  );
};

export default Nav;
