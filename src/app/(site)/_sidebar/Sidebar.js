"use client"
import React from "react";
import { menuItems } from "../constants/constants";
import {NavButton} from '../_navButtons/NavButton'

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-red-400 text-white flex flex-col items-center p-4">
      {/* Profile Section */}
      <div className="flex flex-col items-center mb-6">
        <img
          className="w-16 h-16 rounded-full"
          src="https://via.placeholder.com/150" // Replace this with the actual profile image URL
          alt="Profile"
        />
        <h2 className="mt-2 text-lg font-semibold">Samadhan Shejal</h2>
        <p className="text-sm text-gray-200">samadhannshejal99@gmail.com</p>
      </div>

      {/* Menu Items */}
      <ul className="flex flex-col w-full space-y-4">
        {menuItems.map((item) => (
          <li key={item.label} className="w-full">
            <NavButton
              icon={item.icon}
              label={item.label}
              href={item.href}
              className={item.className}
            />
            
          </li>
        ))}
      </ul>

      {/* Logout Button */}
      {/* <div className="mt-auto">
        <button className="flex items-center p-3 text-white">
          <span className="mr-2">🔓</span> Logout
        </button>
      </div> */}
    </div>
  );
};

export default Sidebar;
