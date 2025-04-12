import React from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { FaUserCircle, FaReact } from "react-icons/fa";

export default function TopMobileNav() {
  return (
    <div className="flex items-center justify-between px-4 py-3 border-b border-gray-700 bg-black md:hidden">
      <FaUserCircle size={24} />
      <FaReact size={28} className="text-white" />
      <HiOutlineDotsVertical size={24} />
    </div>
  );
}
