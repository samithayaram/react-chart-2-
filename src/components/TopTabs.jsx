import React from "react";

export default function TopNav() {
  return (
    <div className="hidden md:block bg-black text-white border-b border-gray-800">
      {/* Top Row */}
      <div className="flex justify-between items-center px-6 py-3 border-b border-gray-800">
        <div className="text-sm font-medium">Profile</div>
        <div className="flex space-x-6 text-sm">
          <button className="hover:text-gray-300">Activity</button>
          <button className="hover:text-gray-300">Log out</button>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="flex justify-between items-center px-6">
        <div className="flex">
          <button className="px-4 py-2 border-r border-gray-800 text-sm font-medium text-white">
            Overview
          </button>
          <button className="px-4 py-2 border-r border-gray-800 text-sm text-gray-500">
            Portfolio
          </button>
          <button className="px-4 py-2 border-r border-gray-800 text-sm text-gray-500">
            Experience
          </button>
          <button className="px-4 py-2 text-sm text-gray-500">
            Media
          </button>
        </div>
        <button className="px-4 py-2 text-sm font-medium hover:text-gray-300">More</button>
      </div>
    </div>
  );
}
