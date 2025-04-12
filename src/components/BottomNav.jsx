import React from "react";
import { MdDashboard, MdAnalytics, MdConnectWithoutContact, MdOutlineRoom, MdOutlineTimeline } from "react-icons/md";

export default function BottomNav() {
  const navItems = [
    { icon: <MdDashboard />, label: "Dashboard" },
    { icon: <MdAnalytics />, label: "Analytics" },
    { icon: <MdConnectWithoutContact />, label: "Connect" },
    { icon: <MdOutlineTimeline />, label: "Activity" },
    { icon: <MdOutlineRoom />, label: "Dealroom" },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-[#111] border-t border-gray-800 flex justify-around py-2 z-50">
      {navItems.map((item, idx) => (
        <div key={idx} className="flex flex-col items-center text-xs text-white">
          {item.icon}
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  );
}