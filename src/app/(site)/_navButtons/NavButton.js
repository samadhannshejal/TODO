"use client";
import React from "react";
// import CustomLink from '../Common/CustomLink';
import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavButton = ({ icon, label, href }) => {
  const pathName = usePathname();

  return (
    <button
      className={`w-full flex items-center p-3 rounded-md ${
        pathName === href ? "bg-white text-red-400 " : " "
      }`}
    >
      <span className={`mr-2 }`}>{icon}</span>
      {/* <CustomLink href={href}>{label}</CustomLink> */}
      <Link href={href}>{label}</Link>
    </button>
  );
};
