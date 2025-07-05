import React from "react";
import { Trash2 } from "lucide-react";

const Cards = ({ data }) => {
  return (
    <div className="flex px-5 py-3 justify-between sm:px-8 sm:py-4 border border-gray-200 rounded-md shadow-lg items-center">
      <p className="text-sm sm:text-lg ">{data.content}</p>

      <Trash2 className="text-gray-600 cursor-pointer h-6 w-6 sm:h-10 sm:w-10" />
    </div>
  );
};

export default Cards;
