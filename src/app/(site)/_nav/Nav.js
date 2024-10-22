import React from "react";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  const currentDate = new Date().toLocaleDateString("en-GB", {
    weekday: "long",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return (
    <nav className="flex items-center justify-between p-4 bg-white ">
      {/* Dashboard Title */}
      <div className="flex items-center">
        <h1 className="text-2xl font-bold text-black">
          <span className="text-red-500">To</span>Do
        </h1>
      </div>

      {/* Search Input */}
      <div className="flex items-center w-1/2">
        <input
          type="text"
          placeholder="Search your task here..."
          className="w-full px-4 py-2 text-gray-700 rounded-l-lg border-2 border-red-100 focus:outline-none focus:ring-2 focus:ring-red-300"
        />
        <button className="px-4 py-2 bg-red-500 text-white rounded-r-lg text-3xl">
          <CiSearch className="h-7 w-5 " />
        </button>
      </div>

      {/* Notification & Calendar Icons */}
      {/* <div className="flex items-center space-x-4">
        <button className="p-2 bg-red-500 text-white rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 24 24"
            stroke="currentColor"
            fill="none"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 16h-1v-4h-1m1-4h.01m6.938 4c.112-4.718-2.458-8-6.938-8S5.175 7.282 5.063 12M19 13v7h-6l-1 1-1-1H5v-7"
            />
          </svg>
        </button>

        <button className="p-2 bg-red-500 text-white rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 24 24"
            stroke="currentColor"
            fill="none"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 11h14M5 15h14M5 7h14"
            />
          </svg>
        </button>
      </div> */}

      {/* Date Display */}
      <div className="flex items-center">
        <span className="text-sm text-gray-500">{currentDate}</span>
      </div>
    </nav>
  );
};

export default Navbar;
