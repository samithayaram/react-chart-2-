export default function Overview() {
  return (
    <div className="flex-1 p-3 bg-black h-screen overflow-hidden">
      <h2 className="text-lg font-semibold mb-3 text-white">Overview</h2>
      <div className="mb-3">
        <ProfileCard />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <FoundedCompanies />
        <Experience />
      </div>
    </div>
  );
}
