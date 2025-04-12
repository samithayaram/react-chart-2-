import React from "react";
import Sidebar from "../components/Sidebar";
import TopMobileNav from "../components/TopMobileNav";
import TopTabs from "../components/TopTabs";
import ProfileCard from "../components/ProfileCard";
import FoundedCompanies from "../components/FoundedCompanies";
import BottomNav from "../components/BottomNav";
import Experience from "../components/Experience";

export default function ProfileOverview() {
  return (
    <div className="flex bg-black min-h-screen text-white">
      <div className="hidden md:block w-64">
        <Sidebar />
      </div>
      <div className="flex-1">
        <TopMobileNav />
        <TopTabs />
        <div className="p-4 md:p-8 space-y-6">
          <h1 className="text-2xl font-bold">Overview</h1>
          <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-2 md:gap-6">
            <div className="col-span-2">
              <ProfileCard />
            </div>
            <FoundedCompanies />
            <Experience />
          </div>
        </div>
        <BottomNav />
      </div>
    </div>
  );
}