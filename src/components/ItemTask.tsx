import React from "react";
import { FiEdit3 } from "react-icons/fi";
import { TiDelete } from "react-icons/ti";

export const ItemTask: React.FC = () => {
  return (
    <>
      <li className="bg-gray-50 shadow-sm hover:bg-green-50 active:bg-green-100 cursor-pointer border border-gray-300 text-white p-2 text-xl flex justify-between items-center">
        <div className="flex items-center justify-center gap-3">
          <input type="checkbox" className="w-5 h-5" />
          <p className="text-gray-700 font-light text-sm sm:text-lg">
            Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet
            consectetur
          </p>
        </div>
        <div className="flex gap-3">
          <button title="Edit" className="text-blue-600 text-sm sm:text-lg">
            <FiEdit3 />
          </button>
          <button title="Delete" className="text-red-500 text-sm sm:text-lg">
            <TiDelete size={25} />
          </button>
        </div>
      </li>
    </>
  );
};
