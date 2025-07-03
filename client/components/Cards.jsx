import React from "react";
import { Trash2 } from "lucide-react";

const Cards = () => {
  return (
    <div className="flex gap-5 px-8 py-4 border border-gray-200 rounded-md shadow-sm">
      <p className="text-lg ">
        notes ka content notes ka content notes ka content notes ka content
        notes ka content notes ka content notes ka content notes ka content
        notes ka content notes ka content notes ka content notes ka content
      </p>

      <Trash2 className="text-gray-400 cursor-pointer" size={110} />
    </div>
  );
};

export default Cards;
