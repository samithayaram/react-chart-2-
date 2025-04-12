export default function Sidebar() {
  return (
    <div className="hidden md:block w-64 bg-[#0a0a0a] h-screen border-r border-gray-800">
      <div className="p-4 border-b border-gray-800 text-white font-semibold">Vertxlabs, Inc</div>
      <ul className="mt-4 space-y-4 px-4 text-sm text-gray-400">
        <li>Dashboard</li>
        <li>Analytics</li>
        <li>Connect</li>
        <li>Dealroom</li>
        <li>Profile</li>
        <li>Settings</li>
      </ul>
    </div>
  );
}
